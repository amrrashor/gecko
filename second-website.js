//SECOND WEBSITE ---------> https://www.360moms.net/article/3319/maalm-kndy-tonb-talb-mslm-laadm-daamh-llshoath


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
