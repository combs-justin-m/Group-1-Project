//News

var getNews = $.getJSON('http://private-anon-161c10f24-restaurantapi.apiary-mock.com/news/latest');
var templateStringNews = $('#news').html();
var templateFuncNews = _.template(templateStringNews);

var divNews = $('#newsContainer');

getNews.done(function (data) {
  $('#newsContainer').html('<span>' + data.title + '</span><span>' + data.date_published + '</span><p>' + data.post + '</p>');
});


//Daily Special

var getDailySpecial = $.getJSON('http://private-anon-161c10f24-restaurantapi.apiary-mock.com/menu/special');
var templateStringDS = $('#dailySpecial').html();
var templateFuncDS = _.template(templateStringDS);

var divDS = $('#dailySpecContainer');

getDailySpecial.done(function (data) {

  _.each(data, function(r) {

    divDS.append(templateFuncDS(r));

  });

});
