(function() {
    function filter(e) {
    let  filteredList = cities.filter(item => item.indexOf(e.target.value) == -1); //нет подстроки

    let source = document.querySelector('#citiesItem').innerHTML;
    let templateFn = Handlebars.compile(source);
    let template = templateFn({list: filteredList});
    results.innerHTML = template;
    }

    module.exports = filter;
})();