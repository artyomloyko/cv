import path from 'path';

export async function toPDF() {
	console.log('GENERATING PDF...');

	const puppeteer = await import('puppeteer');
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	const url = 'http://localhost:5173';
	await page.goto(url, { waitUntil: 'networkidle2' });

	const pdfPath = path.resolve('static/cv.pdf');

	await page.pdf({
		path: pdfPath,
		format: 'A4',
		printBackground: true
	});

	await browser.close();
}

toPDF();
