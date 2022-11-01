// jshint esversion:6

module.exports.getDate = getDate;
function getDate() {
  const today = new Date();

  options = {
    weekday: "long",
    day:"numeric",
    month: "long",
    year: "numeric"
  };

  return today.toLocaleDateString("en-US", options);

};

module.exports.getDay = getDay
function getDay() {
  const today = new Date();

  options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);
};
