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
