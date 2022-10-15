const request = require("request");
const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1Ijoicml0ZWVzaC1wYWkiLCJhIjoiY2t3ZDl5YTFuMjUzcjJvcGF3YmsxM2FmMSJ9.zDNq94rR-zd2HA1rMXInRg&limit=1";

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("UNABLE TO CONNECT TO WEB SERVICES", undefined);
    } else if (body.features.length === 0) {
      callback("UNABLE TO FIND THE LOCATION", undefined);
    } else {
      const latitude = body.features[0].center[1];
      const longitude = body.features[0].center[0];
      callback(undefined, {
        latitude,
        longitude,
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = { geocode: geocode };
