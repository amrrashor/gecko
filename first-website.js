//THE FIRST WEBSITE REGEX -----> https://www.viewdubai.net/%D8%A3%D8%AC%D9%85%D9%84-%D8%AD%D8%AF%D8%A7%D8%A6%D9%82-%D8%AF%D8%A8%D9%8A/
// Define regex patterns
const title =  /<title>(.*?)<\/title>/i  
const img = /<\s*meta\s+name=["']?(.*?)?["']?\s+content=["']?(https:\/\/([^"\s]+))[^>]*>/
const date = /<meta property="article:published_time" content="(.*?)"/
const category = /<meta property="article:section" content="(.*?)"/


const pageHTML = document.documentElement.innerHTML;

function extractText(pattern) {
    const match = pageHTML.match(pattern);
    return match? match[1] : "Not found";
}

function extractImg(pattern) {
    const match = pageHTML.match(pattern);
    return match ? match[2] : "Not found";
}

// Extract and display the information
console.log("Title", extractText(title));
console.log("Image", extractImg(img));
console.log("Category", extractText(category));
console.log("Date", extractText(date));

