const fs = require('fs');
const { marked } = require('marked');

// Custom renderer to handle the resume content
const renderer = new marked.Renderer();

// Override list item rendering for contact items with icons
renderer.listitem = function(text) {
  if (text.includes('<svg')) {
    // Replace SVG icons with Unicode equivalents for better PDF compatibility
    let cleanText = text
      .replace(/<svg[^>]*>.*?<\/svg>/gs, '')
      .replace(/`([^`]+)`/g, '$1')
      .trim();
    
    // Check for email
    if (text.includes('alxolr@gmail.com') || cleanText.includes('alxolr@gmail.com')) {
      return `<li style="list-style: none; margin: 8px 0;">📧 ${cleanText}</li>`;
    } 
    // Check for phone
    else if (text.includes('+373') || cleanText.includes('+373')) {
      return `<li style="list-style: none; margin: 8px 0;">📞 ${cleanText}</li>`;
    }
    else {
      // For other SVG items, just remove SVG and keep text
      return `<li style="list-style: none; margin: 8px 0;">${cleanText}</li>`;
    }
  }
  return `<li style="margin: 4px 0;">${text}</li>`;
};

// Override paragraph rendering for social links
renderer.paragraph = function(text) {
  if (text.includes('[alxolr.com]') && text.includes('[github]')) {
    // Handle the social links paragraph
    let socialText = text
      .replace(/<svg[^>]*>.*?<\/svg>/gs, '')
      .replace(/\[alxolr\.com\]/g, '🌐 [alxolr.com]')
      .replace(/\[github\]/g, '🔗 [github]')
      .replace(/\[youtube\]/g, '📺 [youtube]')
      .replace(/\[stackoverflow\]/g, '💻 [stackoverflow]')
      .replace(/\[twitter\]/g, '🐦 [twitter]')
      .replace(/\|\s*/g, '| '); // Clean up spacing
    
    return `<p style="text-align: center; margin: 16px 0; font-size: 10pt;">${socialText}</p>`;
  }
  return `<p>${text}</p>`;
};

marked.setOptions({
  renderer: renderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

function generateHTML() {
  try {
    // Read the markdown file
    const markdownContent = fs.readFileSync('README.md', 'utf-8');
    
    // Convert markdown to HTML
    const htmlContent = marked(markdownContent);
    
    // Create the complete HTML document with CSS
    const fullHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alexandru Olaru - Resume</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            width: 100%;
            margin: 0;
            padding: 20mm;
            font-size: 11pt;
            background: white;
            text-align: left;
        }
        
        /* Container for centered content */
        .container {
            max-width: 200mm;
            margin: 0 auto;
            width: 100%;
        }
        
        /* Header */
        h1 {
            font-size: 28pt;
            font-weight: 700;
            color: #1a1a1a;
            margin-bottom: 8px;
            text-align: center;
        }
        
        h2 {
            font-size: 16pt;
            font-weight: 500;
            color: #4a5568;
            margin-bottom: 4px;
            text-align: center;
        }
        
        h3 {
            font-size: 14pt;
            font-weight: 600;
            color: #2d3748;
            margin: 20px 0 12px 0;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 4px;
        }
        
        h4 {
            font-size: 12pt;
            font-weight: 600;
            color: #2d3748;
            margin: 16px 0 8px 0;
        }
        
        /* Age styling */
        body > p:first-of-type {
            text-align: center;
            color: #666;
            font-size: 10pt;
            margin-bottom: 16px;
        }
        
        /* Quote/Summary */
        blockquote {
            background: #f7fafc;
            border-left: 4px solid #4299e1;
            padding: 16px 20px;
            margin: 20px 0;
            font-style: italic;
            font-size: 11pt;
            color: #4a5568;
            text-align: center;
        }
        
        /* Contact section */
        h3:first-of-type + ul {
            list-style: none;
            margin: 16px 0;
        }
        
        h3:first-of-type + ul li {
            margin: 8px 0;
            font-size: 10pt;
        }
        
        /* Links */
        a {
            color: #3182ce;
            text-decoration: none;
        }
        
        a:hover {
            text-decoration: underline;
        }
        
        /* Tables */
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 16px 0;
            font-size: 10pt;
        }
        
        th {
            background: #edf2f7;
            padding: 12px 8px;
            text-align: left;
            font-weight: 600;
            color: #2d3748;
            border: 1px solid #e2e8f0;
        }
        
        td {
            padding: 8px;
            border: 1px solid #e2e8f0;
            vertical-align: top;
        }
        
        /* Lists */
        ul {
            margin: 8px 0;
            padding-left: 20px;
        }
        
        li {
            margin: 4px 0;
        }
        
        /* Work Experience */
        hr {
            border: none;
            border-top: 1px solid #e2e8f0;
            margin: 20px 0;
        }
        
        /* Italic text for dates and positions */
        em {
            color: #666;
            font-style: italic;
            font-size: 10pt;
        }
        
        strong {
            font-weight: 600;
            color: #2d3748;
        }
        
        /* Paragraphs */
        p {
            margin: 8px 0;
            text-align: justify;
        }
        
        /* Code styling */
        code {
            background: #f1f5f9;
            padding: 2px 4px;
            border-radius: 3px;
            font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
            font-size: 9pt;
            color: #0f172a;
        }
        
        /* Print optimizations */
        @media print {
            body {
                margin: 0;
                padding: 0;
                font-size: 10pt;
                width: 100%;
            }
            
            .container {
                max-width: none;
                margin: 15mm auto;
                padding: 0 15mm;
                width: auto;
            }
            
            h1 {
                font-size: 24pt;
            }
            
            h2 {
                font-size: 14pt;
            }
            
            h3 {
                font-size: 12pt;
                page-break-after: avoid;
            }
            
            h4 {
                font-size: 11pt;
                page-break-after: avoid;
            }
            
            ul, ol {
                page-break-inside: avoid;
            }
            
            li {
                page-break-inside: avoid;
            }
            
            a {
                color: #333 !important;
            }
        }
        
        /* Button for printing */
        .print-button {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4299e1;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-family: inherit;
            font-size: 14px;
            z-index: 1000;
        }
        
        .print-button:hover {
            background: #3182ce;
        }
        
        @media print {
            .print-button {
                display: none;
            }
        }
    </style>
</head>
<body>
    <button class="print-button" onclick="window.print()">Print to PDF</button>
    <div class="container">
        ${htmlContent}
    </div>
    
    <script>
        // Auto-print when page loads (optional)
        // window.onload = function() { window.print(); }
    </script>
</body>
</html>`;
    
    // Write the HTML file
    fs.writeFileSync('resume.html', fullHTML);
    
    console.log('✅ HTML generated successfully: resume.html');
    console.log('📄 Open resume.html in your browser and use "Print to PDF" to generate the PDF');
    console.log('💡 Or click the "Print to PDF" button in the top-right corner');
    
  } catch (error) {
    console.error('❌ Error generating HTML:', error);
    process.exit(1);
  }
}

generateHTML();