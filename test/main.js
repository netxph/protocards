var cardsApp = angular.module('cardsApp',['ngRoute']);

var tests = [];

for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/spec.*js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: function() {

        require(['/base/app/scripts/controllers/areaList.js', '/base/app/scripts/services/areaService.js'], function() {
            window.__karma__.start();
        });
    }
});
