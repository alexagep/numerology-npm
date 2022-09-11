const moment = require("jalali-moment");

function calculateNumerology(date) {
  if (typeof date == "number") {
    date = date.toString();
  }
  date = date.split("-").join("").split("/").join("").split("");

  const birthNumber = date.reduce((acc, ret) => {
    return (+acc)+ (+ret);
  });

  if (
    birthNumber > 9 &&
    birthNumber !== 11 &&
    birthNumber !== 22 &&
    birthNumber !== 33
  ) {
    return calculateNumerology(birthNumber);
  }

  return birthNumber;
}


function inPersian(input) {
  input = input.split("/").join("-");

  const convertedBirthDate = moment
    .from(input, "fa", "YYYY/MM/DD")
    .locale("en")
    .format("YYYY/MM/DD");

    return calculateNumerology(convertedBirthDate)
};


module.exports = {
  inPersian,
  calculateNumerology
}