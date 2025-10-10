#!/bin/bash

# Check if wkhtmltopdf is installed
if command -v wkhtmltopdf &> /dev/null; then
    echo "📄 Generating PDF using wkhtmltopdf..."
    wkhtmltopdf --page-size A4 \
                --margin-top 15mm \
                --margin-right 15mm \
                --margin-bottom 15mm \
                --margin-left 15mm \
                --encoding UTF-8 \
                --print-media-type \
                --disable-smart-shrinking \
                resume.html Alexandru_Olaru_Resume.pdf
    
    if [ $? -eq 0 ]; then
        echo "✅ PDF generated successfully: Alexandru_Olaru_Resume.pdf"
    else
        echo "❌ Error generating PDF with wkhtmltopdf"
    fi
else
    echo "📄 wkhtmltopdf not found. Please:"
    echo "1. Install wkhtmltopdf: sudo apt-get install wkhtmltopdf"
    echo "2. Or open resume.html in your browser and print to PDF"
    echo "3. The HTML file is ready at: $(pwd)/resume.html"
fi