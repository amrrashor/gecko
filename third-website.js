//THIRD WEBSITE ----------------> https://new.fekrafn.com/%d9%85%d8%aa%d9%89-%d9%85%d9%88%d8%b9%d8%af-%d8%a7%d8%ac%d8%a7%d8%b2%d8%a9-%d8%a7%d9%84%d8%aa%d8%b1%d9%85-%d8%a7%d9%84%d8%a7%d9%88%d9%84-1445-2023-%d9%81%d9%8a-%d8%a7%d9%84%d8%b3%d8%b9%d9%88%d8%af/

const title = /<title>(.*?)<\/title>/i 
const img = /<meta property="og:image" content="(.*?)"/
const date = /\d{4}-\d{2}-\d{2}/
const category = /\bcategory-name\w+/


const pageHTML = document.documentElement.innerHTML;

function extractText(pattern) {
    const match = pageHTML.match(pattern);
    return match? match[1] : "Not found";
}

function extractDate(pattern) {
    const match = pageHTML.match(pattern);
    return match? match[0] : "Not found";
}

function extractImg(pattern) {
    const match = pageHTML.match(pattern);
    return match ? match[1] : "Not found";
}

// Extract and display the information
console.log("Title", extractText(title));
console.log("Image", extractImg(img)); //replace double quotes with empty string to get the url
console.log("Category", extractText(category));
console.log("Date", extractDate(date));
