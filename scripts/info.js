//News

var getNews = $.getJSON('http://private-anon-161c10f24-restaurantapi.apiary-mock.com/news/latest');
var newsTemplate = $('#news').html();
var templateFuncNews = _.template(newsTemplate);

var divNews = $('#newsContainer');

getNews.done(function (data) {
  console.log(templateFuncNews(data));
  // divNews.append(templateFuncNews(data));
});



//Daily Special

var getDailySpecial = $.getJSON('http://private-anon-161c10f24-restaurantapi.apiary-mock.com/menu/special');
var dailySpecialTemplate = $('#dailySpecial').html();
var templateFuncDS = _.template(dailySpecialTemplate);

var divDS = $('#dailySpecContainer');

getDailySpecial.done(function (data) {
  divDS.append(templateFuncDS(data));
});
