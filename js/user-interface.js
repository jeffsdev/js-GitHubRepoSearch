var getUserInfo = require('./../js/github.js').getUserInfo;
var getRepos = require('./../js/github.js').getRepos;


$(document).ready(function() {

  $('.gh-form').submit(function(event) {
    event.preventDefault();
    userInput = $('.user-input').val();
    getUserInfo();
    getRepos();
    $('main').addClass("flex");


  });



});
