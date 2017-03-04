$(document).ready(function(){
  console.log('Ready!')
})

var cities = ['NYC', 'SF', 'LA', 'ATX', 'SYD']
cities.forEach(function(item) {
  var option = $('<option>').attr('value', item).text(item)
  $('select').append(option)
})

$('select').change(function() {
  var city = $('select').val()
  if (city == 'NYC') {
    $('body').attr('class','nyc')
  }
  else if (city == 'SF') {
    $('body').attr('class','sf')
  }
  else if (city == 'LA') {
    $('body').attr('class','la')
  }
  else if (city == 'ATX') {
    $('body').attr('class','austin')
  }
  else if (city == 'SYD') {
    $('body').attr('class','sydney')
  }
})
