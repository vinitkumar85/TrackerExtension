var $form = $('form#dt-test-form'),
    url = 'https://script.google.com/macros/s/AKfycbw-Df8t9RUX0P6CPavNCsoRdDupb_SaIKQMLndkshN31aaJNx8/exec';

var countryList = ["Afghanistan", "Albania", "Algeria"/*... and so on*/];

// Set the autocomplete for the countries input
$('.dt-name').autocomplete({
    source: countryList
});

$('#dt-submit-form').on('click', function(e) {
  e.preventDefault();
  var dtname = $('.dt-name').val();


  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize()
  }).done(
    function(){
      $('.dt-results').text("Successfully updated");
    }
  );
})