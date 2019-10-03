$(document).ready(function() {

  /* JSON */
  $('form').on('submit', function() {
    event.preventDefault()

    $('.sub-footer').css('position', 'absolute').css('top', '89%').css('left', '50%').css('transform', 'translate(-50%, -50%)')
    $('.back, .name, .temp, .weather, .wind, .clouds, .weathericon').fadeIn(2000);
    $('.output').fadeIn(2000)

    var input = document.getElementById("inputOn");

    if (input.value == "") {
      $('.output').hide()
      $('h2').fadeIn(2000)
      $('.back, .for_show').fadeTo('slow', '1')
      $('.sub-footer').css('position', 'absolute').css('top', '89%').css('left', '50%').css('transform', 'translate(-50%, -50%)')
    };

    var api = '6c2fca038cb29c94221eadf5626e61e5'
    var city = $('input').val()

    $.get('https://api.openweathermap.org/data/2.5/weather?units=metric&q='+city+'&appid='+ api, function(data) {
     console.log(data);

        var name = data.name;
        var temp = data.main.temp;
        var weather = data.weather[0].description;
        var wind = data.wind.speed;
        var clouds = data.clouds.all;
        var weatherIcon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + ".png";

        $('.name').text(name + ", " + data.sys.country);
        $('.temp').text(temp  + "°C " + "temperature from " + data.main.temp_min + " to " + data.main.temp_max + "°C");
        $('.weather').text(weather);
        $('.wind').text("Wind " + wind + " m/s");
        $('.clouds').text("Clouds " + clouds + "%");
        $('.weathericon').attr("src", weatherIcon);

    })
  });


  /* prevent browser to Load */
  $('form').on('submit', function(event) {
    event.preventDefault()
  });

  /* Links&inputs fadeIn&Out */
  $('form').on('submit', function() {
    event.preventDefault()
    $('main').hide()
  });

  /* Links show&hide */
  $(document).on('click', function() {
    $('footer').show(2000)
  });
  $('footer').on('mouseleave', function() {
    $(this).hide(1000)
  });

  /* location.reload */
  $('h1').on('click', function() {
    location.reload()
  });

  $('header, h1').on('mouseleave', function() {
    $(this).css('transition', '.5s')
  });

  /* input focus */
  $('input').focus('mousenter', function() {
    $(this).css('font-size', '25px').css('color', '#eaeaea').css('transition', '.5s').css('background-color', 'black')
  });
  $('input').on('mouseleave', function() {
    $(this).css('font-size', '20px').css('transition', '.5s').css('background-color', '#2D2C2B')
  });

  /* hides*/
  $('h2, .back, .name, .temp, .weather, .wind, .clouds').hide(this);

  /* add html, APPEND AND PREPEND */
  $('h2').append("location..")
  $('h2').prepend("Hello! ")
});
