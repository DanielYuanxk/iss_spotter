const {
  fetchMyIP,
  fetchCoordsByIp,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation,
} = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });
//
//
//
//
// fetchCoordsByIp("184.146.162.9", (error, data) => {
//   if (error) {
//     return console.log("It didn't work", error);
//   }
//   console.log("It worked! Returned coordinates:", data);
// });
// const mycoords = { latitude: "45.4215296", longitude: "-75.6971931" };
// fetchISSFlyOverTimes(mycoords, (error, body) => {
//   if (error) {
//     return console.log(error);
//   }
//   console.log(body);
// });

const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};
nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
