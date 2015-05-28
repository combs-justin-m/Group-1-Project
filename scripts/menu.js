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