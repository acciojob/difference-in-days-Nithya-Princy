var dateDiffInDays = function (date1, date2) {
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);

  // Calculate the time difference in milliseconds
  const timeDifference = secondDate - firstDate;

  // Calculate the number of days by dividing the time difference by the number of milliseconds in a day
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
