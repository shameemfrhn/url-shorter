document.addEventListener("DOMContentLoaded", function () {
    const shortenButton = document.getElementById("shorten-button");
    const originalUrlInput = document.getElementById("original-url");
    const resultDiv = document.getElementById("result");

    shortenButton.addEventListener("click", () => {
        const originalUrl = originalUrlInput.value.trim();

        if (originalUrl === "") {
            resultDiv.textContent = "Please enter a valid URL.";
        } else {
            // In a real application, you would send the URL to a server to generate the shortened version.
            // For this example, we'll just display a placeholder shortened URL.
            const shortenedUrl = "https://short.ly/abcd123";
            resultDiv.textContent = `Shortened URL: ${shortenedUrl}`;
        }
    });
});
