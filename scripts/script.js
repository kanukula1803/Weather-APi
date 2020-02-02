$(function() {
  $("#getWeather").on("click", function() {
    var weatherLocation = $("#location").val();
    const API_KEY = "d59509dce074473fbd061434202701";
    $.ajax({
      method: "GET",
      url:
      'http://api.weatherapi.com/v1/current.json?key=' +
        API_KEY +
        "&q=" +
        weatherLocation,
      dataType: "json"
    }).done(function(data) {
      // var dataJson = data.json();
      console.log(data);
      $("#currentLocation").text(
        data.location.name + "," + data.location.country
      );
      $("#latLon").html(
        "<h3> Latitude : " +
          data.location.lat +
          ", Longitude : " +
          data.location.lon +
          "</h3>"
      );
      $("#currentTemperature").html(
        "<h1>" +
          data.current.temp_c +
          "&#8451; / " +
          data.current.temp_f +
          "&#8457;</h1>"
      );
      $("#condition").html(
        "<h3> Condition : " + data.current.condition.text + "</h3>"
      );
      $("#today").html("<h3> Today : " + data.location.localtime + "</h3>");
      $("#weatherImage").html("<img src=" + data.current.condition.icon + ">");
    });
  });
  $("#newQuote").on("click", function() {
    $.ajax({
      method: "GET",
      url: "https://thesimpsonsquoteapi.glitch.me/quotes",
      dataType: "json"
    }).done(function(data) {
      console.log(data[0].quote);
      $("#result").html(
        "<h3><q>" + data[0].quote + "</q></h3><br>~" + data[0].character
      );
      $("#quoteImage").html("<img src=" + data[0].image + ">");
    });
  });
});
