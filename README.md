<h3 align="center">

  <p align="center"><img src="https://img.shields.io/badge/𝗪𝗟𝗖𝗠 𝗧𝗢 𝗠𝗘𝗗𝗜𝗔 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥-green?colorA=%23ff0000&colorB=%23017e40&style=flat-square">

</h3>

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Neuton&size=25&color=30FF40&background=000000&center=true&vCenter=true&width=360&height=60&lines=Hello+Worl+I'm+MOSTAKIM+Here+🥵;𝙸𝚃'𝚜+𝙽𝙾𝚃+𝙰+𝙹𝚄𝚂𝚃+𝙽𝙰𝙼𝙴+𝙱𝚁𝙾+😼;𝙸𝚃'𝚜+𝙰+𝙱𝚁𝙰𝙽𝙳+🔥;Respect+Alif-Hosson+🥀;Thanks+My+All+Friend+😙+😌)](https://git.io/typing-svg)

[![npm version](https://img.shields.io/npm/v/x-noobs.svg?style=flat-square)](https://www.npmjs.com/package/x-noobs)
[![GitHub package version](https://img.shields.io/github/package-json/v/Alifhosson/x-noobs?label=GitHub&style=flat-square)](https://github.com/Alifhosson/x-noobs)
[![npm downloads](https://img.shields.io/npm/dm/x-noobs.svg?style=flat-square)](https://www.npmjs.com/package/x-noobs)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/x-noobs/badge)](https://www.jsdelivr.com/package/npm/x-noobs)

## Instalation 

Install the package using npm:

```bash
npm i x-noobs
```

# x-noobs

A simple Node.js package for downloading media files via the [x-noobs API](https://www.x-noobs-api.000.pe). This package allows you to fetch downloadable media links from a given URL, making it easier to access media files from supported sources.

---

## Features

- Fetch downloadable media links from a provided URL.
- Simple to use and lightweight.
- Returns detailed response data with title, thumbnail, and download links.

---

## Usage

Below is an example of how to use `x-noobs` to fetch download links from a URL.

### Example

```javascript
const downloadMedia = require('x-noobs');

(async () => {
    try {
        const mediaData = await downloadMedia("https://example.com/media-url");
        console.log(mediaData);
    } catch (error) {
        console.error("Error:", error.message);
    }
})();
```

---

## API Reference

The `downloadMedia` function accepts a single parameter:

- `url` (string) - The URL of the media you want to download.

### Example Request

```javascript
const mediaData = await downloadMedia("https://example.com/media-url");
```

### Example Response

A successful response will include an object with the following structure:

```json
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
```

- `success`: Indicates whether the request was successful.
- `data`: Contains details about the media:
  - `title`: Title of the media.
  - `thumbnail`: URL of the media's thumbnail.
  - `downloadLinks`: An array of objects, each containing:
    - `format`: The format of the media (e.g., mp4, mp3).
    - `quality`: The quality of the media (e.g., 720p, 128kbps).
    - `url`: The direct download URL.

---

## Error Handling

If the API request fails, the function will throw an error. Use a `try-catch` block to handle errors gracefully.

### Example

```javascript
try {
    const mediaData = await downloadMedia("https://example.com/media-url");
    console.log(mediaData);
} catch (error) {
    console.error("Error:", error.message);
}
```
----
[![WhatsApp](https://img.shields.io/badge/WhatsApp-green?style=for-the-badge&logo=whatsapp)](https://wa.me/+8801978589341)
[![Facebook](https://img.shields.io/badge/Facebook-green?style=for-the-badge&logo=facebook)]([https://www.facebook.com/100075421394195](https://www.facebook.com/starboy.mostakim?mibextid=ZbWKwL))
[![Messenger](https://img.shields.io/badge/Chat-Messenger-blue?style=for-the-badge&logo=messenger)](https://m.me/100003323319575)
[![Github](https://img.shields.io/badge/Github-MrDarkYTgreen?style=for-the-badge&logo=github)](https://github.com/Mostakim0978)