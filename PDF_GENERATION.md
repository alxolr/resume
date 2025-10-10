# Resume PDF Generation

This repository contains Alexandru Olaru's resume and tools to generate professional PDF versions.

## Generated Files

- `Alexandru_Olaru_Resume.pdf` - The final PDF resume
- `resume.html` - Professional HTML version with print-optimized styling

## How to Generate PDF

### Method 1: Automated (Recommended)
```bash
# Install dependencies
npm install

# Generate HTML version
npm run build

# Generate PDF (requires wkhtmltopdf)
./generate-pdf.sh
```

### Method 2: Manual Browser Print
1. Generate HTML: `npm run build`
2. Open `resume.html` in your browser
3. Print to PDF (Ctrl+P → Save as PDF)

### Method 3: Using Local Server
```bash
# Start local server
python3 -m http.server 8000

# Open in browser: http://localhost:8000/resume.html
# Print to PDF from browser
```

## Prerequisites

### For automated PDF generation:
```bash
# Ubuntu/Debian
sudo apt-get install wkhtmltopdf

# macOS
brew install wkhtmltopdf

# Windows
# Download from: https://wkhtmltopdf.org/downloads.html
```

## Features

✅ **Professional Layout** - Clean, modern design optimized for ATS systems  
✅ **PDF Optimized** - Perfect formatting for A4 printing  
✅ **Icon Integration** - Unicode icons for contact information  
✅ **Print Styles** - Optimized CSS for high-quality PDF output  
✅ **Responsive** - Works on all screen sizes  
✅ **Fast Generation** - Builds in seconds  

## File Structure

```
├── README.md                    # Source resume in Markdown
├── package.json                 # Node.js dependencies
├── generate-html.js             # HTML generator script
├── generate-pdf.sh              # PDF generation script
├── resume.html                  # Generated HTML (built)
└── Alexandru_Olaru_Resume.pdf   # Generated PDF (built)
```

## Customization

### Updating Content
Edit `README.md` and run `npm run build` to regenerate.

### Styling Changes
Modify the CSS in `generate-html.js` and regenerate.

### PDF Settings
Adjust wkhtmltopdf parameters in `generate-pdf.sh`.

## Tips for Best Results

1. **Use Unicode Icons** - They print better than SVG in PDFs
2. **Test Print Preview** - Always check browser print preview
3. **A4 Format** - Optimized for standard A4 paper size
4. **High DPI** - wkhtmltopdf produces crisp, high-resolution PDFs

## Troubleshooting

### PDF generation fails
- Ensure wkhtmltopdf is installed: `wkhtmltopdf --version`
- Check HTML file exists: `ls -la resume.html`
- Try manual browser print as fallback

### Missing icons
- Icons should appear as Unicode characters (📧, 📞, etc.)
- If using custom icons, ensure they're web-safe fonts

### Layout issues
- Open `resume.html` in browser first to verify layout
- Adjust CSS margins in `generate-html.js` if needed

---

**Last updated:** October 2025  
**PDF Version:** Always regenerate from latest README.md