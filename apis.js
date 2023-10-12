/*
//synchronous code:
const p = 23;
console.log(p);
console.log(p + 23);

//asynchrnous code: coorinating behavior of a proh=gramme  over a period  of time is called asynchronous

setTimeout(() => {
  const a = 2;
  const sum = a + 2;
  console.log("settimeout>", sum);
}, 1000);

console.log("first");
const mapFun = [1, 2].map((el) => {
  //   console.log(el * 3);
  return el * 3;
});
console.log(mapFun);
setTimeout(() => {
  console.log("asynchrnous code");
}, 1);
console.log("last");

console.log("Tesing HOIST");
console.log(a); //undefined
var a = 1;

// console.log(b); //ReferenceError: Cannot access 'b' before initialization
let b = 2;

// console.log(c);// ReferenceError: Cannot access 'c' before initialization
const c = 3;

//in synchrnous code error is there, its bloa=king next line of code and ALSO ITS BLOCKING TO DOT NOT PRINT THE PREVIOUS ASYNCH CODE OUTPUT IF IT TAKECS TIME TO PRINT

// API : APPLICATION PROGRAMMING INTERFACE : A piece of softeware tht can be use by another piece of softeware in order to
// allow application to interact to each other
/*
const request = fetch("https://restcountries.com/v2/name/protugal");
console.log("requst>> ", request); //>>>>>> this will give you Promise in the output
// request.then((result) => {
//   console.log(result);
// });
const countryName = "united states";
const request1 = fetch(`https://restcountries.com/v2/name/${countryName}`);
request1
  .then((res) => {
    console.log("res>>> ", res); // >>this will give response with 200 status code
    // to read the response of promise we need to use json() method on optained promise object
    return res.json();
  })
  .then((data) => {
    console.log("data>> ", data);
  })
  .catch((err) => {
    console.log(err);
  });
  

//   if you dont use json() method on obtained promise how many then() used you wont get original data of promises
//
//callback hell
//
setTimeout(() => {
  console.log("callback hell output");
  console.log("2 second passed");
  setTimeout(() => {
    console.log("3 seconds passed");
    setTimeout(() => {
      console.log("4 seconds passed");
    }, 1000);
  }, 1000);
}, 2000);
//

//PROMISE:  Promise is an object tha is used as a placeholder for the future result of an asynchronous operation
//it a container for asynchronusly delivered value
//a container for future value
const getcountryData = function (countryName) {
  fetch(`https://restcountries.com/v2/name/${countryName}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("111111>> ", data);
      const neighbour = data[0].borders[1];
      return fetch(`https://restcountries.com/v2/name/${neighbour}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("2222>>", data);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};
// const country1 = getcountryData("Argentina");
// console.log(country1);

//callbacks will excute in the event loop they were sent to special queue in the stack to excute
// promises also excuted in event loop
// promises have special priority iver callbacks they will be sent to special que call micritask que
// promises excutes first than callback
// ALL ASYNCHRONOUS FETCH() APIs ARE RUN IN WEB API ENVIRONMENTOTHERWISE WE WILL BE CREATING CALLSTCK A HIGE BLOCKING

//CODE EXCUTION FLOW

//1. THE CODE OUTSIDE OF ANY CALLBACK FUNCTION WILL EXCUTE FIRST
//2. PROMISES WILL EXCUTED AFTER SYNCHRONOUS CODE
//3. CALLBACKs WILL EXCUTED AFTER PROMISES
console.log("TESTING CODE EXCUTION");
console.log(
  "0. ",
  [1, 2, 3].filter((el) => el > 2)
);
console.log("1. code outside of callback and promise ");

fetch(`https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid={API_KEY}
`)
  .then((res) => res.json())
  .then((data) => {
    console.log("fetchapi: ", data);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.resolve("2. code inside of promise").then((res) => {
  console.log(res);
});

setTimeout(() => {
  console.log("3. code in the callback");
}, 0);

function add(a, b) {
  console.log("4. ", a + b);
}
add(2, 3);

console.log(
  "5. ",
  [1, 2].map((el) => el * 2)
);

// TESTING CODE EXCUTION
// code outside of callback and promise
// 5
// code inside of promise
// code in the callback

//TESTING CODE EXCUTION
// 0.  [ 3 ]
// 1. code outside of callback and promise
// 4.  5
// 5.  [ 2, 4 ]
// 2. code inside of promise
// 3. code in the callback
// fetchapi:  {
//   cod: 401,
//   message: 'Invalid API key. Please see https://openweathermap.org/faq#error401 for more info.'
// }

//built a simple promise
const lotteryPromise = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    resolve("You win");
  } else {
    reject("try next time");
  }
});

lotteryPromise
  .then((data) => {
    console.log("1. ", data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log(10);
const timeoutPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("resolved promise after 1 sec");
  }, 1000);
});
// timeoutPromise(); //TypeError: timeoutPromise is not a function
setTimeout(() => {
  console.log("2. print after 1 sec(outside of promise)");
}, 1000);

timeoutPromise
  .then((data) => {
    console.log("3. timeOutPromise: ", data);
  })
  .catch((err) => {
    console.log("err", err);
  });

setTimeout(() => {
  console.log("4. print after 1 sec(outside of promise)");
}, 1000);

function add(a, b) {
  console.log("5.", a + b);
}
add(1, 3);

//10
// 5. 4
// 1.  You win
// 3. timeOutPromise:  resolved promise after 1 sec
// 2. print after 1 sec(outside of promise)
// 4. print after 1 sec(outside of promise)

//async/await

const renderCountryDatawithoutAsync = function (country) {
  return fetch(`https://restcountries.com/v2/name/${country}`);
};
renderCountryDatawithoutAsync("India")
  .then((res) => res.json())
  .then((data) => {
    // console.log(">> ", data);
  });

const renderCountryData = async function (country) {
  const response = await fetch(`https://restcountries.com/v2/name/${country}`);
  const data = await response.json();
  //   console.log(data);
  return data;
};
// renderCountryData("India");

//handling the rejcted promises
// we can handle the rejected promise using try-catch() block

const whereAmI = async function (country) {
  try {
    const position = await renderCountryData(country);
    // console.log("...", position);
    // console.log(position[1].latlng);
    const [lat, lng] = position[1].latlng;
    // console.log(lat, lng);
    const geoRes = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const myPlace = await geoRes.json();
    console.log("////", myPlace);
  } catch (err) {
    console.error(err);
  }
};
// whereAmI("India");
//have doubt with output

const geolocation = require("node-geolocation");
const getPostion = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (err) => reject(err)
    );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
getPostion().then((pos) => {
  console.log(pos);
});
*/
const data = 1;

function add(a) {
  console.log(data + a);
}
add(1);

const add1 = function (a) {
  console.log(">>", data + a);
};
add1(2);

//running  promises in parallel

// const fetch = require("node-fetch");

const genderApi = "https://api.genderize.io?name=ramesh";
const countryDataApi = "https://restcountries.com/v2/name/usa";
const chuckApi = "https://api.chucknorris.io/jokes/random";
const genderFApi = "https://api.genderize.io?name=ramya";

const apiPromises = [
  fetch(genderApi),
  fetch(countryDataApi),
  fetch(chuckApi),
  fetch(genderFApi)
];
// Promise.all(apiPromises)
//   .then((res) => res.json)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//which is wrong

//correct code is

// Promise.all(apiPromises).then((res) => {
//   //   console.log(res);
//   return Promise.all(res.map((res) => res.json())).then((data) => {
//     console.log(data);
//     console.log(data[0]);
//     console.log(data[1][1].population);
//     console.log(data[2].value);
//     console.log(data[3]);
//   });
// });

//using async/await
// const runAllApis = async function (apis) {
//   try {
//     const response = await Promise.all(apis);
//     const data = await Promise.all(response.map((el) => el.json()));
//     console.log(">>", data);
//     console.log(data[0]);
//     console.log(data[1][1].population);
//     console.log(data[2].value);
//     console.log(data[3]);
//   } catch (err) {
//     console.error(err);
//   }
// };

//TypeError: Body is unusable
//this errror because
//The error message "TypeError: Body is unusable" typically occurs when trying to call .json() on a response that does not have a valid JSON body.
//to trouble shoot this issue
const runAllApis = async function (apis) {
  try {
    const response = await Promise.all(apis);
    const data = await Promise.all(
      response.map((el, index) => {
        try {
          return el.json();
        } catch (err) {
          console.error(`Error parsing Json for ${index}:`, err);
          return null;
        }
      })
    );
    // console.log(">>", data);
    console.log(data[0]);
    console.log(data[1].population);
    console.log(data[2].value);
    console.log(data[3]);
  } catch (err) {
    console.error(err);
  }
};
runAllApis(apiPromises);

//output

//{ count: 106446, name: 'ramesh', gender: 'male', probability: 1 }
// 1380004385
// Chuck Norris went cliff diving off the coast of Sumatra in 2004. The rest is history.
// { count: 26042, name: 'ramya', gender: 'female', probability: 1 }

const promiseRace = async function (apis) {
  try {
    const response = await Promise.race(apis);
    // const data = await Promise.all(response.map((el) => el.json()));
    const data = await response.json();
    console.log("111", data);
  } catch (err) {
    console.error(err);
  }
};
// promiseRace(apiPromises);
