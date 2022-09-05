let log1 = `[1.145.199.214] [07/Apr/2022:23:59:00 +0000] ["GET http://www.realestateview.com.au/real-estate/cnr-miller-road-bendigo-murchison-road-rushworth-vic/property-details-buy-residential-14049001/[logo]/ HTTP/:1.1"] [301] [98] - [46.460] ms[[Mozilla/5.0 [Macintosh; Intel Mac OS X 10_13_6] AppleWebKit/605.1.15 [KHTML, like Gecko] Version/13.1.2 Safari/605.1.15]][Datadome: 0-human-Humans] [pdp-buy] [4ee042d2-0ef3-4549-a187-e28ad1426837]`;

function logsConvertToObject(log) {
  let logPropArr = [];
  for (let i = 0; i < log.length; i++) {
    if (log[i] === "[") {
      let count = 0;
      for (let j = i; j < log.length; j++) {
        if (log[j] === "[") {
          count++;
        }
        if (count !== 0 && log[j] === "]") {
          count--;
        }
        if (count === 0 && log[j] === "]") {
          for (let k = j; k < log.length; k++) {
            if (log[k] === "[" || k === log.length - 1) {
              logPropArr.push(log.slice(i, k));
              i = k - 1;
              break;
            }
          }
          break;
        }
      }
    }
  }
  // upto this point we are only taking the log properties and converting it to an array of strings more explanation is at the bottom of the code

  // now start the clean up of the log properties
  for (let i = 0; i < logPropArr.length; i++) {
    logPropArr[i] = logPropArr[i].replace(/[\[\]]/g, ""); // removing the brackets
    logPropArr[i] = logPropArr[i].replace(/\s+$/, ""); // removing the trailing spaces
    if (logPropArr[i].includes("HTTP") || (logPropArr[i].includes("http") && logPropArr[i][0] === `"`)) {
      logPropArr[i] = logPropArr[i].slice(1, logPropArr[i].length - 1); // removing the quotes from the http request
    }
    if (logPropArr[i][logPropArr[i].length - 1] === "-") {
      logPropArr[i] = logPropArr[i].slice(0, logPropArr[i].length - 1); // removing the trailing - from the time
      logPropArr[i] = logPropArr[i].replace(/\s+$/, ""); // removing the trailing spaces
    }
    if (logPropArr[i].includes("Datadome:")) {
      logPropArr[i] = logPropArr[i].replace(/Datadome: /g, "");
    }
  }

  // now we have an array of strings with the log properties
  // now we need to convert the strings to objects
  let logPropObj = {};
  logPropObj.ip = logPropArr[0];
  logPropObj.date = logPropArr[1];
  logPropObj.req = logPropArr[2];
  logPropObj.resCode = logPropArr[3];
  logPropObj.byteSize = logPropArr[4];
  logPropObj.time = logPropArr[5];
  logPropObj.userAgent = logPropArr[6];
  logPropObj.dataDom = logPropArr[7];
  logPropObj.promLabel = logPropArr[8];
  logPropObj.uuid = logPropArr[9];

  return logPropObj;
}

/* we will start the search on the log string and whenever we discover a `[` (position-1) bracket we will start another loop and start counter and when we reach another [ the we'll raise the counter or if we discover ] then we'll decrease the counter and if the counter is 0 and we find ] the we'll start another loop and search for `[` (position-2) and after finding the `[`(position-2) we will slice the string `(slice(position-1, position-2))` and place it in the logPropArr*/
