(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
  let
      getAjax = require('./module/getAjax'),
      // filter = require('./module/filter'),
      container = document.getElementById('citiesWrap'),
      filterField = document.getElementById('citiesFiled');

    function getCitiesName(array) {  //get sorted city name
        return array.map(object=>object.name).sort();
    }

    getAjax('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json').then((response) => {
        let cities = getCitiesName(JSON.parse(response));

        let source = citiesItem.innerHTML;
        let templateFn = Handlebars.compile(source);
        let template = templateFn({ list: cities });
        results.innerHTML = template;  //вывод сортированого списка

        function filter(e) {
            let  filteredList = cities.filter(item => item.indexOf(e.target.value) == -1); //нет подстроки

            let source = document.querySelector('#citiesItem').innerHTML;
            let templateFn = Handlebars.compile(source);
            let template = templateFn({list: filteredList});
            results.innerHTML = template;
        }

        filterField.addEventListener('keyup', filter);



    },
        () => {
            console.log('error');
    });


})();

},{"./module/getAjax":2}],2:[function(require,module,exports){
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

},{}]},{},[1])