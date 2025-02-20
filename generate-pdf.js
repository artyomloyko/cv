import puppeteer from 'puppeteer';
import path from 'path';

async function generatePDF() {
  console.log('GENERATING PDF...')
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Load your SvelteKit page (Change the URL as needed)
  const url = 'http://localhost:5173'; // Adjust to your dev/build URL
  await page.goto(url, { waitUntil: 'networkidle2' });

  // Define PDF path in static directory
  const pdfPath = path.resolve('static/output.pdf');

  // Generate PDF
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true
  });

  await browser.close();
}

generatePDF();
