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
      console.log(dish.item + "," + dish.price + "," + dish.description);
      $('#dailySpecContainer').append('<span><b>' + dish.item + '</b></span><span>' + dish.price +
        '</span><span>' + dish.description + '</span>');
    }
  });
});

//Flickr

var userID = '114746115@N04';
var apiKey = '31d10d544b54eb5275e4c44a483bf790';

function getFlickrLink(galleryID) {
  return 'https://api.flickr.com/services/rest/?&method=flickr.galleries.getPhotos&api_key=' +
  apiKey + '&gallery_id=5704-' + galleryID + '&format=json&nojsoncallback=1';
}

// function getFlickrLink(galleryID) {
//   return 'https://api.flickr.com/services/rest/?&method=flickr.galleries.getPhotos&api_key=' + apiKey + '&gallery_id=5704-' + galleryID + '&format=json&extras=url_m&callback=jsonFlickrApi';
// }

//Jumbotron

var jumbotronPicsGallery = '72157651341370473';
var jumbotronUrl = getFlickrLink(jumbotronPicsGallery);
var getJumboGallery = $.getJSON(jumbotronUrl);

$.getJSON(jumbotronUrl, function(data) {

  $.each(data.photos.photo, function (i, elem) {
    var farmID = elem.farm;
    var serverID = elem.server;
    var picID = elem.id;
    var secret = elem.secret;

    $(".jumbotron").append('<img src="https://farm' + farmID + '.staticflickr.com/' +
      serverID + "/" + picID + '_' + secret + '.jpg">');
  });
});

//Daily Special

var dailySpecPicGallery = '72157651331687144';
var dailySpecUrl = getFlickrLink(dailySpecPicGallery);

console.log(dailySpecUrl);
var getDailySpecGallery = $.getJSON(dailySpecUrl);

$.getJSON(foodPicsUrl, function(data) {

  $.each(data.photos.photo, function (i, elem) {
    var farmID = elem.farm;
    var serverID = elem.server;
    var picID = elem.id;
    var secret = elem.secret;

    $("#dailySpecPic").append('<li><img src="https://farm' + farmID + '.staticflickr.com/' +
      serverID + "/" + picID + '_' + secret + '.jpg"></li>');
  });
});

//Food Gallery

var foodPicsGallery = '72157651327905384';
var foodPicsUrl = getFlickrLink(foodPicsGallery);
var getFoodGallery = $.getJSON(foodPicsUrl);

console.log(foodPicsUrl);

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


// $.getJSON(foodPicsUrl, function (data) {
//   console.log(data);
//   $.each(data.photos.photo, function(i, elem) {
//     var picURL = elem.url_m;
//     // console.log(picURL);
//     $("#foodContainer").append('<li><img src="' + picURL + '"/></li>');
//   });
// });





// getGallery.done(function (data) {
//   _.each(data, function(img) {
//     divJumbo.append(templateFunc(img));
//   });
// });

// $.ajax(flickrLink(foodPicsGallery) {
//   dataType: 'jsonp',
//   jsonpCallback: apiKey,
//   success: function(item) {
//     var pics = item.pics.photo;
//     foodPic(pics);
//   }
// });

// function jumbotronPic(pics) {
//   pics.forEach(function(pic) {
//     $('.jumbotron').append($element);
//   });
// };
