var apiKey = require('./../.env').apiKey;

// Get GitHub User Information
exports.getUserInfo = function(){
  $.get('https://api.github.com/users/' + userInput + '?access_token=' + apiKey).then(function(response){
    console.log(response);

    userAvatar = response.avatar_url;

    userName = response.login;
    userRealName = response.name;
    userLocation = response.location;

    $('.gh-avatar').attr("src", userAvatar);
    $('.gh-username').text(userName);
    $('.gh-realname').text(userRealName);
    $('.gh-location').text(userLocation);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


// Get Repository Names and Details
exports.getRepos = function(){
  $.get('https://api.github.com/users/jeffsdev/repos?access_token=' + apiKey + '&per_page=9999;sort="updated"').then(function(response){
    console.log(response);

    response.forEach(function(repository, i) {
      $('.user-repo-list ul').append("<li class='gh-reponame' id='repo" + i + "'>" + "<a href='"+ repository.html_url +"' target='_blank'>" + repository.name + "</a></li>");
      $('#repo' + i).append("<div class='gh-repodesc' id='repo-desc" + i + "'>" + repository.description + "</div>");
    });




  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
