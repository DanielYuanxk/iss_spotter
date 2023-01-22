const request = require("request-promise-native");
const fetchMyIP = function () {
  // use request to fetch IP address from JSON API
  return request("https://api.ipify.org?format=json");
};

const fetchCoordsByIP = function (body) {
  const IP = JSON.parse(body).ip;
  return request(`https://ipwho.is/${IP}`);
};
const fetchISSFlyOverTimes = function (body) {
  const { latitude, longitude } = JSON.parse(body);
  return request(
    `https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`
  );
};
const nextISSTimesForMyLocation = function () {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((body) => {
      const { response } = JSON.parse(body);
      return response;
    });
};

module.exports = { nextISSTimesForMyLocation };
