let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = false;
let call = "";
const runnerAge = 18;

if (earlyRegister === true && runnerAge > 18) {
  raceNumber += 1000;
  call = `You will race at 9h30 am. Your race number is ${raceNumber}`;
} else if (earlyRegister === false && runnerAge > 18) {
  call = `You will race at 11h am. Your race number is ${raceNumber}`;
}

if (earlyRegister === true && runnerAge < 18) {
  call = `You will race at 9h30 am. Your race number is ${raceNumber}`;
}

if (runnerAge < 18) {
  call = `You will race at 12h30 pm. Your race number is ${raceNumber}`;
} else if (runnerAge === 18) {
  call = "Please check the registration desk";
}

console.log(call);
