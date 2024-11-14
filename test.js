const downloadMedia = require('x-noobs');

(async () => {
    try {
        const media = await downloadMedia("https://vt.tiktok.com/ZSjfV8LrN/");
        console.log(media);
    } catch (error) {
        console.error(error.message);
    }
})();