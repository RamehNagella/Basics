const airLine = "TAP AIR PORTUGAL";
const plane = "A320";

console.log(airLine.length);
console.log(airLine[0]);
console.log(airLine[4]);
console.log(airLine[10]);

// console.log(airLine.indexOf[T]); reference error

console.log(airLine.indexOf("A"));
console.log(airLine.indexOf("AIR"));
console.log(airLine.indexOf("RTUGAL"));

console.log(airLine.slice(4));
console.log(airLine.slice(-4));
console.log(airLine.slice(-7));

console.log(airLine.slice(4, 7));
console.log(airLine.slice(0, airLine.indexOf(" ")));
console.log(airLine.slice(8, airLine.indexOf(-1)));
console.log(airLine.slice(8, airLine.indexOf(-2)));
console.log(airLine.slice(8, airLine.lastIndexOf("")));
console.log(airLine.slice(airLine.lastIndexOf()));

function checkMiddleSeat(seat) {
  let s = seat.slice(-1);
  if (s === "W") return "YOu got window seat";
  else return " You got middle seats";
}
console.log(checkMiddleSeat("11B"));
console.log(checkMiddleSeat("11W"));
console.log(checkMiddleSeat("1132W"));

const passenger = "JONas";
const passengerCorrect =
  passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();
console.log(passengerCorrect);

const email = " HEllo@JonSa.Io ";
console.log(email.toLowerCase());
const normalisedEmail = email.toLowerCase().trim();
console.log(normalisedEmail);

function capitalizeName(name) {
  const names = name.split(" ");
  const capitalCaseName = [];

  for (let n of names) {
    capitalCaseName.push(n[0].toUpperCase() + n.slice(1));
  }
  return capitalCaseName.join(" ");
}
console.log(capitalizeName("ramesh nagella"));
console.log(capitalizeName("ramesh nagella 272 gamil com"));

console.log(passenger.padStart(15, "*"));

const maskCreditScrd = (creditNum) => {
  const str = creditNum + "";
  const last = str.slice(-4);
  return last.padStart(12, "*");
};

console.log(maskCreditScrd(1234567890));
console.log(maskCreditScrd(2345));

const message = "Bad wether...";
console.log(message.repeat(3));

console.log(
  message
    .replace(message, "due to bad wether all flights are delayed...")
    .repeat(2)
);
const replaceString = "rameshnagella";
console.log(replaceString.replaceAll("a", "g"));
// console.log(replaceString.replace(|replaceString|g, "g"));
