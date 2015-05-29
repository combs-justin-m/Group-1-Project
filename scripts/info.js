//News//

var getNews = $.getJSON('http://private-anon-161c10f24-restaurantapi.apiary-mock.com/news/latest');
var newsTemplate = $('#news').html();
var templateFuncNews = _.template(newsTemplate);

var divNews = $('#newsContainer');

getNews.done(function (data) {
  divNews.append(templateFuncNews(data));
});

//Daily Special//

var getDailySpecial = $.getJSON('http://private-anon-161c10f24-restaurantapi.apiary-mock.com/menu/special');
var dailySpecialTemplate = $('#dailySpecial').html();
var templateFuncDS = _.template(dailySpecialTemplate);

var divDS = $('#dailySpecContainer');

var specialID;
getDailySpecial.done(function (data) {
  specialID = data.menu_item_id;
});

$.getJSON('http://private-anon-161c10f24-restaurantapi.apiary-mock.com/menu-1').done(function(data) {
  data.entrees.filter(function(menuItem) {
    if(menuItem.id == specialID) {
      divDS.append(templateFuncNews(menuItem));
    }
  });
});
