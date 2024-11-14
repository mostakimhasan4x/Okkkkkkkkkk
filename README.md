---

x-noobs

A simple Node.js package for downloading media files via the https://www.x-noobs-api.000.pe API. This package takes a URL and retrieves downloadable media links, making it easier to access media files from supported sources.

Features

Fetch downloadable media links from a provided URL

Simple to use and lightweight

Returns detailed response data


Installation

Install the package using npm:

npm install x-noobs

Usage

Below is a quick example of how to use x-noobs to fetch download links from a given URL.

Example

const downloadMedia = require('x-noobs');

(async () => {
    try {
        const mediaData = await downloadMedia("https://example.com/media-url");
        console.log(mediaData);
    } catch (error) {
        console.error("Error:", error.message);
    }
})();

Response Structure

The API response will be an object containing media details. An example response may look like this:

{
    "success": true,
    "data": {
        "title": "Sample Media Title",
        "thumbnail": "https://example.com/thumbnail.jpg",
        "downloadLinks": [
            {
                "format": "mp4",
                "quality": "720p",
                "url": "https://example.com/media.mp4"
            },
            {
                "format": "mp3",
                "quality": "128kbps",
                "url": "https://example.com/audio.mp3"
            }
        ]
    }
}

API Reference

The downloadMedia function accepts a single parameter:

url (string) - The URL of the media you want to download.


Example Request

await downloadMedia("https://example.com/media-url");

Example Response

A successful response will include the following:

success: Boolean indicating whether the request succeeded

data: An object containing:

title: The title of the media

thumbnail: URL of the media's thumbnail image

downloadLinks: Array of objects, each containing:

format: Format of the media (e.g., mp4, mp3)

quality: Quality of the media (e.g., 720p, 128kbps)

url: Direct download URL for the media




Error Handling

If the API request fails, the function will throw an error. Make sure to use a try-catch block to handle potential errors gracefully:

try {
    const mediaData = await downloadMedia("https://example.com/media-url");
    console.log(mediaData);
} catch (error) {
    console.error("Error:", error.message);
}

License

This project is licensed under the MIT License.


---

Contributing

Contributions are welcome! If you'd like to improve this package, please fork the repository and submit a pull request.


---