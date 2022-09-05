/* let log1 = `[1.145.199.214] [07/Apr/2022:23:59:00 +0000] ["GET http://www.realestateview.com.au/real-estate/cnr-miller-road-bendigo-murchison-road-rushworth-vic/property-details-buy-residential-14049001/[logo]/ HTTP/:1.1"] [301] [98] - [46.460] ms[[Mozilla/5.0 [Macintosh; Intel Mac OS X 10_13_6] AppleWebKit/605.1.15 [KHTML, like Gecko] Version/13.1.2 Safari/605.1.15]][Datadome: 0-human-Humans] [pdp-buy] [4ee042d2-0ef3-4549-a187-e28ad1426837]`; */

function logsConvertToObject(log) {
  let logPropArr = log.split("] ");

  for (let i = 0; i < logPropArr.length; i++) {
    logPropArr[i] = logPropArr[i].replace(/[\[\]]/g, "");
    if (logPropArr[i].includes("Datadome:")) {
      logPropArr[i] = logPropArr[i].replace(/Datadome: /g, "");
    }
  }

  let logPropObj = {};
  logPropObj.ip = logPropArr[0];
  logPropObj.date = logPropArr[1];
  logPropObj.resCode = logPropArr[2];
  logPropObj.byteSize = logPropArr[3];
  logPropObj.time = `${logPropArr[4]} ${logPropArr[5]}`;
  logPropObj.dataDom = logPropArr[6];
  logPropObj.promLabel = logPropArr[7];
  logPropObj.uuid = logPropArr[8];
  logPropObj.reqMethod = logPropArr[9];
  logPropObj.reqUrl = logPropArr[10];
  logPropObj.httpVersion = logPropArr[11];
  logPropObj.userAgent = logPropArr[12];
  logPropObj.referrlUrl = logPropArr[13];

  return logPropObj;
}

let log2 = `[106.214.117.113] [04/Jul/2022:14:17:28 +0000] [301] [350] [0.570] [ms] [Datadome: 0-human-Humans] [redirect/zenu] [db1cc809-281a-420a-9bfa-244aa07dbc2d] [GET] [http://www.realestateview.com.au/real-estate/cnr-miller-road-bendigo-murchison-road-rushworth-vic/property-details-buy-residential-14049001/[logo] [HTTP/:1.1] [(Mozilla/5.0 (Linux; Android 10; Redmi Note 7S) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.101 Mobile Safari/537.36)] [undefined]`;
