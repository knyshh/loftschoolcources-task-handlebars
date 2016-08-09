function getAjax(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
       // xhr.responseType = 'json';
        xhr.addEventListener('load', () => {resolve(xhr.response); });
        xhr.addEventListener('error', () => { reject(); });
        xhr.send();
    });
};

module.exports = getAjax;
