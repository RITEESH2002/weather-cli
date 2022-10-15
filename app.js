const geocode = require("./utility/geocode");
const forecast = require("./utility/forecast");
// const url = "http://api.weatherstack.com/current?access_key=6985469202007f5e418aad0c48bf8e5f&query=37.8267,-122.4233&units=s"

// request({url : url,json : true},(error,response)=>{
//    if(error){
//        console.log("UNABLE TO CONNECT TO WEB SERVICES");
//    }
//    else if(response.body.error){
//        console.log("UNABLE TO FIND THE LOCATION");
//    }
//    else{
//     console.log(" " + response.body.current.weather_descriptions[0] + " with wind speed of " + response.body.current.wind_speed + "rpm . It is currently " + response.body.current.temperature + " KELVIN out.It feels like " + response.body.current.feelslike + " KELVIN out.")
//    }
// })

// const geocode = "https://api.mapbox.com/geocoding/v5/mapbox.places/Philadelphia.json?access_token=pk.eyJ1Ijoicml0ZWVzaC1wYWkiLCJhIjoiY2t3ZDl5YTFuMjUzcjJvcGF3YmsxM2FmMSJ9.zDNq94rR-zd2HA1rMXInRg&limit=1"

// request({url:geocode , json:true},(error,response) => {
//     //console.log(error);
//     if(error)
//     {
//         console.log("UNABLE TO CONNECT TO WEB SERVICES");
//     }
//     else if(response.body.features.length===0)
//     {
//         console.log("UNABLE TO FIND THE COORDINATES");
//     }
//     else{
//     console.log(response.body.features[0].center[1] + " is the longitude " + response.body.features[0].center[0] + " is the latitude");
//     }
// })
const address = process.argv[2];
if (address) {
  geocode.geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) return console.log("ERROR :", error);

    forecast.forecast(latitude, longitude, (error, Forecastresponse) => {
      if (error) {
        console.log("ERROR :", error);
      }
      console.log("LOCATION :", location);
      console.log("FORECAST :", Forecastresponse);
    });
  });
} else {
  return console.log("Provide an Address!");
}
