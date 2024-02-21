document.addEventListener("DOMContentLoaded", function () {
    const newsResultsContainer = document.getElementById("newsResults");

    // Get the encoded data from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const encodedData = urlParams.get('data');

    // Decode and parse the data
    const data = JSON.parse(decodeURIComponent(encodedData));

    // Display the results on the page
    newsResultsContainer.innerHTML = generateNewsHTML(data);
});

function generateNewsHTML(data) {
    // Customize this function based on the structure of your News API response
    // For example, if your data is an array of articles, you might loop through them
    // and create HTML elements for each article
    let html = "<ul>";
    data.forEach(article => {
        html += `<li><a href="${article.url}" target="_blank">${article.title}</a></li>`;
    });
    html += "</ul>";
    return html;
}
