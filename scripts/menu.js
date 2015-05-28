// Tab cycle //
$('.menuButton').on('click', function (){
  $('.menuButton').removeClass('activeButton');
  $(this).addClass('activeButton');
  $('.menuSection').addClass('hideMenu');
  if ($(this).attr('id') === 'menuBtn') {
    $('#menu').removeClass('hideMenu')
  } else if ($(this).attr('id') === 'reserveBtn') {
    $('#reservation').removeClass('hideMenu')
  } else if ($(this).attr('id') === 'storyBtn') {
    $('#story').removeClass('hideMenu')
  }
});

// Reserve table btn message //
$('#reserveTable').on('click', function (){
  $('#reservationForm').html('<h2>Table Reserved!</h2>');
});

// Menu-1 data //
var menuString, menuFunc;

$.getJSON('http://private-anon-f64b0c0cc-restaurantapi.apiary-mock.com/menu-1', function(data){

menuString = $('#menuData').html();
menuFunc = _.template(menuString);

  _.each(data, function (arr){
    _.each(arr, function(a){
      $('.menuList').append(menuFunc(a));
    })
  });
});