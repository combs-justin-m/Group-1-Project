// Tab cycle //
$('.menuButton').on('click', function (){
  $('.menuButton').removeClass('activeButton');
  $(this).addClass('activeButton');

});

// Reserve table btn message //
$('#reserveTable').on('click', function (){
  $('#reservationForm').html('<h2>Table Reserved!</h2>');
});