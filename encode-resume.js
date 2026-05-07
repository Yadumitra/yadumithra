const fs = require('fs');
const path = require('path');

// Read the resume PDF and convert to base64
const pdfPath = path.join(__dirname, 'resume.pdf');

if (!fs.existsSync(pdfPath)) {
  console.error('❌ resume.pdf not found in current directory');
  console.log('Please save the resume PDF as "resume.pdf" in this folder, then run this script again.');
  process.exit(1);
}

try {
  const pdfBuffer = fs.readFileSync(pdfPath);
  const base64 = pdfBuffer.toString('base64');
  
  // Write to pdf_base64.txt
  fs.writeFileSync(
    path.join(__dirname, 'pdf_base64.txt'),
    base64
  );
  
  console.log('✓ Resume encoded to base64');
  console.log(`✓ Saved to pdf_base64.txt (${base64.length} characters)`);
  console.log('✓ Update index.html to use this base64 data');
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
