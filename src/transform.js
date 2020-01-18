const categories = {
  "20 and younger": [],
  "21-30": [],
  "31-40": [],
  "41-50": [],
  "51 and older": []
};

const groupAdultsByAgeRange = adults =>
  adults
    .filter(element => element.age >= 18)
    .reduce((acc, item) => {
      if (item.age <= 20) {
        if (!acc["20 and younger"]) {
          acc["20 and younger"] = [];
        }
        acc["20 and younger"].push(item);
      }
      if (item.age >= 21 && item.age <= 30) {
        if (!acc["21-30"]) {
          acc["21-30"] = [];
        }
        acc["21-30"].push(item);
      }
      if (item.age >= 31 && item.age <= 40) {
        if (!acc["31-40"]) {
          acc["31-40"] = [];
        }
        acc["31-40"].push(item);
      }
      if (item.age >= 41 && item.age <= 50) {
        if (!acc["41-50"]) {
          acc["41-50"] = [];
        }
        acc["41-50"].push(item);
      }
      if (item.age >= 51) {
        if (!acc["51 and older"]) {
          acc["51 and older"] = [];
        }
        acc["51 and older"].push(item);
      }
      return acc;
    }, {});

// adults.reduce((acc, item) => {
//     if (item.age <= 20) {
//       acc["20 and younger"].push(item);
//     }
//     if (item.age > 20 && item.age <= 30) {
//       acc["21-30"].push(item);
//     }
//     if (item.age > 31 && item.age <= 40) {
//       acc["31-40"].push(item);
//     }
//     if (item.age > 41 && item.age <= 50) {
//       acc["41-50"].push(item);
//     }
//     if (item.age > 50) {
//       acc["51 and older"].push(item);
//     }
//     return acc;
//   }, {});

module.exports = { groupAdultsByAgeRange };
