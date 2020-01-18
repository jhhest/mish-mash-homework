function groupAdultsbyRange(people) {
  const categories = {
    "20 and younger": [],
    "21-30": [],
    "31-40": [],
    "41-50": [],
    "51 and older": []
  };
  // const result = (people) => {
  //     return "test"
  // };
  const result = people.reduce(function(acc, cv) {
    if (cv.age <= 20) {
      categories["20 and younger"].push(cv);
    } else if (cv.age > 21 && cv.age <= 30) {
      categories["21-30"].push(cv);
    } else if (cv.age > 31 && cv.age <= 40) {
      categories["41-50"].push(cv);
    } else {
      categories["51 and older"].push(cv);
    }
  }, categories);
  console.log("result:\n", result);
  console.log("categories:\n", categories);
  return categories;
}

module.exports = groupAdultsbyRange;
