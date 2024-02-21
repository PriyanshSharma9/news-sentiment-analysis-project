document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("searchForm");
    const input = document.getElementById("searchInput");

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

                    // Encode the data as a URL parameter
                    const encodedData = encodeURIComponent(JSON.stringify(data.articles));

                    // Redirect to results.html with the encoded data as a parameter
                    window.location.href = `results.html?data=${encodedData}`;
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                });
        }
    });
});
