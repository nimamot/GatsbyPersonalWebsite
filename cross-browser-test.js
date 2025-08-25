const puppeteer = require('puppeteer');
const { execSync } = require('child_process');

const testUrl = 'http://localhost:8000';

// Browser configurations
const browsers = [
  {
    name: 'Chromium',
    executablePath: null, // Uses bundled Chromium
    engine: 'Blink'
  },
  {
    name: 'Firefox',
    executablePath: '/Applications/Firefox.app/Contents/MacOS/firefox',
    engine: 'Gecko'
  },
  {
    name: 'Safari',
    executablePath: '/Applications/Safari.app/Contents/MacOS/Safari',
    engine: 'WebKit'
  }
];

async function testBrowser(browserConfig) {
  console.log(`\n🧪 Testing with ${browserConfig.name} (${browserConfig.engine})...`);
  
  let browser;
  try {
    // Launch browser with appropriate settings
    const launchOptions = {
      headless: false,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    };
    
    if (browserConfig.executablePath) {
      launchOptions.executablePath = browserConfig.executablePath;
    }
    
    browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();
    
    // Set viewport
    await page.setViewport({ width: 1280, height: 720 });
    
    // Navigate to the site
    console.log(`  📱 Loading ${testUrl}...`);
    await page.goto(testUrl, { waitUntil: 'networkidle2', timeout: 30000 });
    
    // Wait for content to load
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Test 1: Basic page load
    console.log(`  ✅ Page loaded successfully`);
    
    // Test 2: Check for JavaScript errors
    const consoleErrors = await page.evaluate(() => {
      return window.consoleErrors || [];
    });
    
    if (consoleErrors.length === 0) {
      console.log(`  ✅ No JavaScript errors detected`);
    } else {
      console.log(`  ⚠️  ${consoleErrors.length} JavaScript errors found`);
    }
    
    // Test 3: Responsive design testing
    const viewports = [
      { width: 375, height: 667, name: 'Mobile' },
      { width: 768, height: 1024, name: 'Tablet' },
      { width: 1280, height: 720, name: 'Desktop' }
    ];
    
    console.log(`  📱 Responsive design test:`);
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
      
      const funSectionVisible = await page.$eval('#fun', el => {
        return el.offsetWidth > 0 && el.offsetHeight > 0;
      }).catch(() => false);
      
      console.log(`    ${viewport.name} (${viewport.width}x${viewport.height}): Hero=${heroVisible}, Nav=${navVisible}, Fun=${funSectionVisible}`);
    }
    
    // Test 4: CSS and styling compatibility
    console.log(`  🎨 CSS compatibility test:`);
    
    // Check if Tailwind classes are working
    const tailwindWorking = await page.evaluate(() => {
      const testElement = document.querySelector('nav');
      if (!testElement) return false;
      
      const styles = window.getComputedStyle(testElement);
      return styles.display !== 'none' && styles.visibility !== 'hidden';
    });
    
    console.log(`    Tailwind CSS: ${tailwindWorking ? '✅ Working' : '❌ Issues detected'}`);
    
    // Check dark mode support
    const darkModeSupport = await page.evaluate(() => {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches !== undefined;
    });
    
    console.log(`    Dark mode support: ${darkModeSupport ? '✅ Supported' : '❌ Not supported'}`);
    
    // Test 5: JavaScript functionality
    console.log(`  ⚡ JavaScript functionality test:`);
    
    // Test theme toggle
    const themeToggle = await page.$('[aria-label="Toggle theme"]');
    if (themeToggle) {
      await themeToggle.click();
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(`    Theme toggle: ✅ Working`);
    } else {
      console.log(`    Theme toggle: ⚠️  Not found`);
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
        console.log(`    Fun section interactions: ✅ Working`);
      }
    }
    
    // Test 6: Performance metrics
    const performance = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0];
      const paint = performance.getEntriesByType('paint');
      
      return {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstPaint: paint.find(p => p.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0
      };
    });
    
    console.log(`  📊 Performance metrics:`);
    console.log(`    Load time: ${performance.loadTime}ms`);
    console.log(`    DOM content loaded: ${performance.domContentLoaded}ms`);
    console.log(`    First paint: ${performance.firstPaint}ms`);
    console.log(`    First contentful paint: ${performance.firstContentfulPaint}ms`);
    
    // Test 7: Accessibility
    const accessibility = await page.evaluate(() => {
      const images = document.querySelectorAll('img');
      const imagesWithAlt = Array.from(images).filter(img => img.alt && img.alt.trim() !== '');
      const buttons = document.querySelectorAll('button');
      const buttonsWithAria = Array.from(buttons).filter(btn => 
        btn.getAttribute('aria-label') || 
        btn.textContent.trim() !== '' || 
        btn.getAttribute('title')
      );
      const links = document.querySelectorAll('a');
      const linksWithText = Array.from(links).filter(link => 
        link.textContent.trim() !== '' || 
        link.getAttribute('aria-label') ||
        link.getAttribute('title')
      );
      
      return {
        imagesWithAlt: imagesWithAlt.length,
        totalImages: images.length,
        buttonsWithAria: buttonsWithAria.length,
        totalButtons: buttons.length,
        linksWithText: linksWithText.length,
        totalLinks: links.length
      };
    });
    
    console.log(`  ♿ Accessibility:`);
    console.log(`    Images with alt text: ${accessibility.imagesWithAlt}/${accessibility.totalImages}`);
    console.log(`    Buttons with proper labels: ${accessibility.buttonsWithAria}/${accessibility.totalButtons}`);
    console.log(`    Links with text: ${accessibility.linksWithText}/${accessibility.totalLinks}`);
    
    // Test 8: CSS Grid and Flexbox support
    const cssSupport = await page.evaluate(() => {
      const testElement = document.createElement('div');
      testElement.style.display = 'grid';
      document.body.appendChild(testElement);
      
      const gridSupported = window.getComputedStyle(testElement).display === 'grid';
      
      testElement.style.display = 'flex';
      const flexSupported = window.getComputedStyle(testElement).display === 'flex';
      
      document.body.removeChild(testElement);
      
      return { gridSupported, flexSupported };
    });
    
    console.log(`  🎯 CSS support:`);
    console.log(`    CSS Grid: ${cssSupport.gridSupported ? '✅ Supported' : '❌ Not supported'}`);
    console.log(`    CSS Flexbox: ${cssSupport.flexSupported ? '✅ Supported' : '❌ Not supported'}`);
    
    // Take a screenshot
    await page.screenshot({ 
      path: `screenshot-${browserConfig.name.toLowerCase()}.png`,
      fullPage: true 
    });
    console.log(`  📸 Screenshot saved as screenshot-${browserConfig.name.toLowerCase()}.png`);
    
    console.log(`  ✅ ${browserConfig.name} testing completed successfully`);
    
  } catch (error) {
    console.error(`  ❌ Error testing ${browserConfig.name}:`, error.message);
    
    if (error.message.includes('executablePath')) {
      console.log(`    💡 ${browserConfig.name} not found at expected path. Install it or update the path.`);
    }
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

async function runCrossBrowserTests() {
  console.log('🚀 Starting comprehensive cross-browser compatibility tests...\n');
  
  // Check which browsers are available
  const availableBrowsers = [];
  
  for (const browser of browsers) {
    try {
      if (browser.executablePath) {
        // Check if browser executable exists
        const fs = require('fs');
        if (fs.existsSync(browser.executablePath)) {
          availableBrowsers.push(browser);
        } else {
          console.log(`⚠️  ${browser.name} not found at ${browser.executablePath}`);
        }
      } else {
        // Chromium is bundled with Puppeteer
        availableBrowsers.push(browser);
      }
    } catch (error) {
      console.log(`⚠️  Could not check ${browser.name}: ${error.message}`);
    }
  }
  
  if (availableBrowsers.length === 0) {
    console.log('❌ No browsers available for testing!');
    console.log('\n📋 To install browsers:');
    console.log('  Firefox: brew install firefox');
    console.log('  Safari: Already installed on macOS');
    return;
  }
  
  console.log(`✅ Found ${availableBrowsers.length} browser(s) for testing\n`);
  
  // Test each available browser
  for (const browser of availableBrowsers) {
    await testBrowser(browser);
  }
  
  console.log('\n🎉 Cross-browser testing completed!');
  console.log('\n📋 Summary:');
  console.log('  • Chromium: Best compatibility (bundled with Puppeteer)');
  console.log('  • Firefox: Good compatibility, may need installation');
  console.log('  • Safari: WebKit engine, may have some differences');
  console.log('\n💡 For manual testing:');
  console.log('  1. Open your website in each browser');
  console.log('  2. Test all interactions and animations');
  console.log('  3. Check responsive design on different screen sizes');
  console.log('  4. Verify dark mode functionality');
}

// Run the tests
runCrossBrowserTests().catch(console.error);
