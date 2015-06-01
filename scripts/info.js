//News

var getNews = $.getJSON('http://private-anon-161c10f24-restaurantapi.apiary-mock.com/news/latest');
var templateFuncNews = _.template($('#news').html());

var divNews = $('#newsContainer');

getNews.done(function (data) {
  divNews.append(templateFuncNews(data));
});

//Daily Special

var getDailySpecial = $.getJSON('http://private-anon-161c10f24-restaurantapi.apiary-mock.com/menu/special');
// var templateFuncDS = _.template($('#dailySpecial').html());

var specialId;

getDailySpecial.done(function (data) {
  specialId = data.menu_item_id;
});

$.getJSON('http://private-anon-161c10f24-restaurantapi.apiary-mock.com/menu-1', function(menuItem) {
  menuItem.entrees.forEach(function (dish) {
    if (dish.id == specialId) {

      $('#dailySpecContainer').append('<div class="itemBorder">' + '<p class="item"><b>' + dish.item + '</b></p><p class="price">' + dish.price +
        '</p>' + '</div>' + '<p class="specialDescription">' + dish.description + '</p>');
    }
  });
});

//Flickr

var userID = '114746115@N04';
var apiKey = '31d10d544b54eb5275e4c44a483bf790';

function getFlickrLink(galleryID) {
  return 'https://api.flickr.com/services/rest/?&method=flickr.galleries.getPhotos&api_key=' +
  apiKey + '&gallery_id=114713976-' + galleryID + '&format=json&nojsoncallback=1';
}

//Jumbotron

// var jumbotronPicsGallery = '72157651341370473';
// var jumbotronUrl = getFlickrLink(jumbotronPicsGallery);

// $.getJSON(jumbotronUrl, function(data) {

//   $.each(data.photos.photo, function (i, elem) {
//     var farmID = elem.farm;
//     var serverID = elem.server;
//     var picID = elem.id;
//     var secret = elem.secret;

//     $(".jumbotron").append('<img src="https://farm' + farmID + '.staticflickr.com/' +
//       serverID + "/" + picID + '_' + secret + '.jpg">');
//   });
// });

//Daily Special

var dailySpecPicGallery = '72157651331687144';
var dailySpecUrl = getFlickrLink(dailySpecPicGallery);

$.getJSON(dailySpecUrl, function(data) {

  $.each(data.photos.photo, function (i, elem) {
    var farmID = elem.farm;
    var serverID = elem.server;
    var picID = elem.id;
    var secret = elem.secret;

    $("#dailySpecPic").append('<img src="https://farm' + farmID + '.staticflickr.com/' +
      serverID + "/" + picID + '_' + secret + '.jpg" height="100">');
    });
});

//Food Gallery

var foodPicsGallery = '72157651327905384';
var foodPicsUrl = getFlickrLink(foodPicsGallery);

$.getJSON(foodPicsUrl, function(data) {

  $.each(data.photos.photo, function (i, elem) {
    var farmID = elem.farm;
    var serverID = elem.server;
    var picID = elem.id;
    var secret = elem.secret;

    $(".foodPics").append('<li><img src="https://farm' + farmID + '.staticflickr.com/' +
      serverID + "/" + picID + '_' + secret + '.jpg"></li>');
  });
});

// Read More //

$('.readmore').on('click', function(){
  $('.readmore').remove();
  $('.newsPost').addClass('showPost');
});