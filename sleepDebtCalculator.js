function getSleepHours(day) {
  day = day.toLowerCase();
  switch (day) {
    case "monday":
      return 9;
      break;
    case "tuesday":
      return 6;
      break;
    case "wednesday":
      return 8;
      break;
    case "thursday":
      return 4;
      break;
    case "friday":
      return 9;
      break;
    case "saturday":
      return 10;
      break;
    case "sunday":
      return 10;
      break;
  }
}

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

function getIdealSleepHours() {
  let idealHours = 8;
  return idealHours * 7;
}

function calculateSleepDebt() {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log(
      `${actualSleepHours} hours of sleep. You are doing great! You got the perfect amount of sleep this week.`
    );
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `${actualSleepHours} hours of sleep. Hey Sleeping Beauty, you got too much sleep this week. Stay awake!`
    );
  } else {
    console.log(
      `${actualSleepHours} hours of sleep. I can see those dark circles from here. You should sleep more.`
    );
  }
}

calculateSleepDebt();
