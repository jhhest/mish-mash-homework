const categories = {
  "20 and younger": [],
  "21-30": [],
  "31-40": [],
  "41-50": [],
  "51 and older": []
};
const groupAdultsByAgeRange = adults =>
  adults
    .reduce((acc, item) => {
      if (item.age <= 20) {
        console.log("push the itemmmm");
        acc["20 and younger"].push(item);
      }
      if (item.age > 20 && item.age <= 30) {
        acc["21-30"].push(item);
      }
      if (item.age > 31 && item.age <= 40) {
        acc["31-40"].push(item);
      }
      if (item.age > 41 && item.age <= 50) {
        acc["41-50"].push(item);
      }
      if (item.age > 50) {
        acc["51 and older"].push(item);
      }
      return acc;
    }, categories)

module.exports = groupAdultsByAgeRange;
