const request = require("request");

const forecast = (latitude, longitude, callback) => {
  url =
    "http://api.weatherstack.com/current?access_key=6985469202007f5e418aad0c48bf8e5f&query=" +
    latitude +
    "," +
    longitude;
  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("UNABLE TO CONNECT TO WEATHER SERVICES", undefined);
    } else if (body.error) {
      callback("UNABLE TO FIND THE LOCATION", undefined);
    } else {
      callback(
        undefined,
        " " +
          body.current.weather_descriptions[0] +
          " with wind speed of " +
          body.current.wind_speed +
          "rpm . It is currently " +
          body.current.temperature +
          " degrees out.It feels like " +
          body.current.feelslike +
          " degrees out."
      );
    }
  });
};

module.exports = {
  forecast: forecast,
};
