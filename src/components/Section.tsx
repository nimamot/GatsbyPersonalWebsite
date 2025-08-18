
import React, { PropsWithChildren, useRef } from "react";
import { motion, useInView } from "framer-motion";

export function SectionHeader({ id, title }: { id: string; title: string }){
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  
  return (
    <motion.h2 
      ref={ref} 
      initial={{ opacity: 0, y: 20 }} 
      animate={inView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.6 }} 
      id={id} 
      className="scroll-mt-24 text-center text-4xl font-bold text-gray-900 dark:text-white mb-4"
    >
      {title}
    </motion.h2>
  );
}

export function Card({ children }: PropsWithChildren){
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow"
      whileHover={{ y: -2 }}
    >
      {children}
    </motion.div>
  );
}

export function Divider(){
  return (
    <motion.div 
      className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent my-16"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    />
  );
}
