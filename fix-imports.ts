// If you still have import issues, create this file and run: npx tsx fix-imports.ts

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

function fixImports(dir: string) {
  const files = readdirSync(dir);
  
  for (const file of files) {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    
    if (stat.isDirectory()) {
      fixImports(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const content = readFileSync(filePath, 'utf8');
      const fixedContent = content.replace(/from "(@\/[^"]+)"/g, 'from "$1.js"');
      
      if (content !== fixedContent) {
        writeFileSync(filePath, fixedContent);
        console.log(`Fixed imports in ${filePath}`);
      }
    }
  }
}

fixImports('./src');