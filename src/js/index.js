var utils = require('./utils');
var axios = require('axios');
var $ = require('jquery');
var _u = require('underscore');

var App = {
    init: function() {
        console.log("Init...");
        // console.log(utils.matchMedia());
        // $(window).on('resize', function(){
        //     console.log(utils.matchMedia());
        // });
    }
}
$(function(){
    App.init();
});