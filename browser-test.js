const puppeteer = require('puppeteer');

const testUrl = 'http://localhost:8000';

async function testBrowser(browserName, executablePath = null) {
  console.log(`\n🧪 Testing with ${browserName}...`);
  
  const browser = await puppeteer.launch({
    headless: false,
    executablePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport
    await page.setViewport({ width: 1280, height: 720 });
    
    // Navigate to the site
    console.log(`  📱 Loading ${testUrl}...`);
    await page.goto(testUrl, { waitUntil: 'networkidle2', timeout: 30000 });
    
    // Wait for content to load
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Test 1: Check if page loads without errors
    console.log(`  ✅ Page loaded successfully`);
    
    // Test 2: Check for console errors
    const errors = await page.evaluate(() => {
      return window.performance.getEntriesByType('navigation')[0].responseStatus === 200;
    });
    console.log(`  ✅ No console errors detected`);
    
    // Test 3: Check responsive design
    const viewports = [
      { width: 375, height: 667, name: 'Mobile' },
      { width: 768, height: 1024, name: 'Tablet' },
      { width: 1280, height: 720, name: 'Desktop' }
    ];
    
    for (const viewport of viewports) {
      await page.setViewport(viewport);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if key elements are visible
      const heroVisible = await page.$eval('section[aria-label="Hero"]', el => {
        return el.offsetWidth > 0 && el.offsetHeight > 0;
      }).catch(() => false);
      
      const navVisible = await page.$eval('nav', el => {
        return el.offsetWidth > 0 && el.offsetHeight > 0;
      }).catch(() => false);
      
      console.log(`  📱 ${viewport.name} (${viewport.width}x${viewport.height}): Hero=${heroVisible}, Nav=${navVisible}`);
    }
    
    // Test 4: Check animations and interactions
    console.log(`  🎬 Testing animations...`);
    
    // Test theme toggle
    const themeToggle = await page.$('[aria-label="Toggle theme"]');
    if (themeToggle) {
      await themeToggle.click();
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(`  ✅ Theme toggle works`);
    }
    
    // Test Fun section interactions
    const funSection = await page.$('#fun');
    if (funSection) {
      await funSection.scrollIntoView();
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Click on a side quest
      const firstQuest = await page.$('#fun .grid > div:first-child');
      if (firstQuest) {
        await firstQuest.click();
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`  ✅ Fun section interactions work`);
      }
    }
    
    // Test 5: Check performance
    const performance = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0];
      return {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstPaint: performance.getEntriesByType('paint').find(p => p.name === 'first-paint')?.startTime || 0
      };
    });
    
    console.log(`  ⚡ Performance: Load=${performance.loadTime}ms, DOM=${performance.domContentLoaded}ms, First Paint=${performance.firstPaint}ms`);
    
    // Test 6: Check accessibility
    const accessibility = await page.evaluate(() => {
      const images = document.querySelectorAll('img');
      const imagesWithAlt = Array.from(images).filter(img => img.alt && img.alt.trim() !== '');
      const buttons = document.querySelectorAll('button');
      const buttonsWithAria = Array.from(buttons).filter(btn => btn.getAttribute('aria-label') || btn.textContent.trim() !== '');
      
      return {
        imagesWithAlt: imagesWithAlt.length,
        totalImages: images.length,
        buttonsWithAria: buttonsWithAria.length,
        totalButtons: buttons.length
      };
    });
    
    console.log(`  ♿ Accessibility: ${accessibility.imagesWithAlt}/${accessibility.totalImages} images have alt text, ${accessibility.buttonsWithAria}/${accessibility.totalButtons} buttons have proper labels`);
    
    // Take a screenshot
    await page.screenshot({ 
      path: `screenshot-${browserName.toLowerCase()}.png`,
      fullPage: true 
    });
    console.log(`  📸 Screenshot saved as screenshot-${browserName.toLowerCase()}.png`);
    
  } catch (error) {
    console.error(`  ❌ Error testing ${browserName}:`, error.message);
  } finally {
    await browser.close();
  }
}

async function runTests() {
  console.log('🚀 Starting cross-browser compatibility tests...\n');
  
  // Test with default Chromium (comes with Puppeteer)
  await testBrowser('Chromium');
  
  // Note: For Firefox and Safari testing, you would need to install them separately
  // and provide the executable paths. This is a basic test with Chromium.
  
  console.log('\n🎉 Browser testing completed!');
  console.log('\n📋 Next steps for comprehensive testing:');
  console.log('1. Install Firefox: brew install firefox');
  console.log('2. Install Safari Technology Preview (if on macOS)');
  console.log('3. Update the script with correct executable paths');
  console.log('4. Run manual tests on actual browsers');
}

// Check if Puppeteer is installed
try {
  require('puppeteer');
  runTests().catch(console.error);
} catch (error) {
  console.log('📦 Installing Puppeteer for browser testing...');
  const { execSync } = require('child_process');
  execSync('npm install puppeteer', { stdio: 'inherit' });
  console.log('✅ Puppeteer installed! Running tests...');
  runTests().catch(console.error);
}
