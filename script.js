document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("searchForm");
    const input = document.getElementById("searchInput");
    const newsResultsContainer = document.getElementById("newsResults");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get the value from the input
        const searchTerm = input.value;

        // Check if the search term is not empty
        if (searchTerm.trim() !== "") {
            // Replace 'YOUR_API_KEY' with your actual News API key
            const apiKey = '86a88000407d4843b2737efdfe195c26';

            // Replace this placeholder URL with the actual API endpoint
            const apiUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(searchTerm)}&apiKey=${apiKey}`;

            // Make a GET request to the News API
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    // Handle the API response data
                    console.log(data);

                    // You can update the page with the API results here
                    // For example, update the innerHTML of newsResultsContainer
                    newsResultsContainer.innerHTML = generateNewsHTML(data);
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                });
        }
    });

    function generateNewsHTML(data) {
        // Customize this function based on the structure of your News API response
        // For example, if your data is an array of articles, you might loop through them
        // and create HTML elements for each article
        let html = "<ul>";
        data.articles.forEach(article => {
            html += `<li><a href="${article.url}" target="_blank">${article.title}</a></li>`;
        });
        html += "</ul>";
        return html;
    }
});
