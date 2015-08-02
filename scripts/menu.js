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
var menuString, menuFunc, menuContainerString, menuContainerFunc;

$.getJSON('http://private-anon-d5db185d3-restaurantapi.apiary-mock.com/menu-1', function(data){

  $.getJSON('http://private-anon-d5db185d3-restaurantapi.apiary-mock.com/menu/special', function(data2){


menuContainerString = $('#menuContainerData').html()
menuString = $('#menuData').html();

menuContainerFunc = _.template(menuContainerString);
menuFunc = _.template(menuString);


  ////////////////
    data.entrees.forEach(function (dish) {
      if (dish.id == data2.menu_item_id) {

        $('#dailySpecContainer').append('<div class="itemBorder">' + '<p class="item"><b>' + dish.item + '</b></p><p class="price">' + dish.price +
          '</p>' + '</div>' + '<p class="specialDescription">' + dish.description + '</p>');
      }
    });
  /////////////

    _.each(data, function (arr, key){

      var $menuContainer = $(menuContainerFunc({title: key}));

      _.each(arr, function(a){
        $menuContainer.find('.menuList').append(menuFunc(a));
      });

      $('#menu').append($menuContainer);
      $(".itemInfo").remove( ":contains('0')" );

    });
  })
});
