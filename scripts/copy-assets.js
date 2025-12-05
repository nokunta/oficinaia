const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const outDir = path.join(__dirname, '../out');
const basePathDir = path.join(outDir, 'oficinaia');

// Create basePath directory
if (!fs.existsSync(basePathDir)) {
  fs.mkdirSync(basePathDir, { recursive: true });
}

// Copy all files from public to out/oficinaia
console.log('📦 Copying files from public/ to out/oficinaia/...');

if (fs.existsSync(publicDir)) {
  const files = fs.readdirSync(publicDir);
  
  files.forEach(file => {
    const srcPath = path.join(publicDir, file);
    const destPath = path.join(basePathDir, file);
    
    if (fs.statSync(srcPath).isFile()) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`✅ Copied ${file}`);
    }
  });
}

// Move files from out/ root to oficinaia/
console.log('📦 Moving files from out/ root to out/oficinaia/...');

if (fs.existsSync(outDir)) {
  const files = fs.readdirSync(outDir);
  
  files.forEach(file => {
    const srcPath = path.join(outDir, file);
    
    if (fs.statSync(srcPath).isFile()) {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg', '.ico', '.mp4', '.svg', '.gif', '.webp'].includes(ext)) {
        const destPath = path.join(basePathDir, file);
        if (!fs.existsSync(destPath)) {
          fs.renameSync(srcPath, destPath);
          console.log(`✅ Moved ${file}`);
        }
      }
    }
  });
}

// Create .nojekyll
const nojekyllPath = path.join(outDir, '.nojekyll');
fs.writeFileSync(nojekyllPath, '');
console.log('✅ Created .nojekyll');

// Verify
console.log('\n📁 Files in out/oficinaia/:');
const oficinaiaFiles = fs.readdirSync(basePathDir);
oficinaiaFiles.forEach(file => {
  const filePath = path.join(basePathDir, file);
  const stats = fs.statSync(filePath);
  console.log(`  ${file} (${(stats.size / 1024).toFixed(1)} KB)`);
});

console.log('\n✅ Verification:');
console.log(`  hero-banner.jpg: ${fs.existsSync(path.join(basePathDir, 'hero-banner.jpg')) ? '✅ EXISTS' : '❌ MISSING'}`);
console.log(`  ronaldo.png: ${fs.existsSync(path.join(basePathDir, 'ronaldo.png')) ? '✅ EXISTS' : '❌ MISSING'}`);
console.log(`  camisola.png: ${fs.existsSync(path.join(basePathDir, 'camisola.png')) ? '✅ EXISTS' : '❌ MISSING'}`);

