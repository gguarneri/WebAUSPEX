var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="nlopt.data";var REMOTE_PACKAGE_BASE="nlopt.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","nlopt",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","nlopt-2.7.0-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:335092,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1118,2437,3576,5180,6379,7715,8942,10304,11529,12690,13790,15022,16168,16986,17773,18778,20002,20957,22218,23469,24587,25845,27350,28840,30165,31680,32727,34284,35703,37372,38942,40309,41642,43153,44557,46209,47775,49146,50662,52143,53500,55009,56457,57846,59270,60577,62139,63637,65070,66351,67857,69151,70586,72120,73584,74983,76375,77589,79045,80653,82106,83602,85190,86697,87984,89453,90965,92443,93735,95235,96675,97727,99025,100480,102114,103681,105163,106663,108234,109756,111349,112749,114267,115652,117057,118499,120009,121399,122817,124041,125534,126889,128484,130021,131520,132887,134350,135743,137171,138562,140070,141512,142940,144364,145715,147223,148894,150354,151707,152871,154286,155886,157173,158488,159890,161299,162764,164159,165547,167031,168553,169983,171461,172614,173989,175181,176517,177987,179404,180954,182233,183777,185018,185958,187081,188247,189645,191089,192196,193336,194486,195645,196909,198185,199757,200438,201659,202745,203426,204415,205608,207077,208551,210153,211514,212733,213686,214829,216237,217553,218842,220278,221416,223014,224289,225450,226914,228230,229427,230407,231574,232780,234035,235514,236837,238228,239708,241167,241973,243385,244833,246265,247071,248097,249564,250942,252421,254103,255537,256759,257641,258927,260200,261324,262663,263803,265186,266585,267832,269e3,269178,269464,269788,270106,270474,271475,272774,273603,274571,275006,275775,276388,276960,277568,278068,278720,279413,280001,280496,281068,281606,282215,282860,283657,285014,287062,288940,288968,288996,289721,290519,291608,292697,293969,295336,296728,298176,299599,301088,302532,304050,305561,306970,308477,309845,311397,312742,314417,315628,317423,318832,320010,321787,322097,324089,325385,326448,327120,327166,327875,328915,329720,330335,331065,332059,332754,333280,333869,334899],sizes:[1118,1319,1139,1604,1199,1336,1227,1362,1225,1161,1100,1232,1146,818,787,1005,1224,955,1261,1251,1118,1258,1505,1490,1325,1515,1047,1557,1419,1669,1570,1367,1333,1511,1404,1652,1566,1371,1516,1481,1357,1509,1448,1389,1424,1307,1562,1498,1433,1281,1506,1294,1435,1534,1464,1399,1392,1214,1456,1608,1453,1496,1588,1507,1287,1469,1512,1478,1292,1500,1440,1052,1298,1455,1634,1567,1482,1500,1571,1522,1593,1400,1518,1385,1405,1442,1510,1390,1418,1224,1493,1355,1595,1537,1499,1367,1463,1393,1428,1391,1508,1442,1428,1424,1351,1508,1671,1460,1353,1164,1415,1600,1287,1315,1402,1409,1465,1395,1388,1484,1522,1430,1478,1153,1375,1192,1336,1470,1417,1550,1279,1544,1241,940,1123,1166,1398,1444,1107,1140,1150,1159,1264,1276,1572,681,1221,1086,681,989,1193,1469,1474,1602,1361,1219,953,1143,1408,1316,1289,1436,1138,1598,1275,1161,1464,1316,1197,980,1167,1206,1255,1479,1323,1391,1480,1459,806,1412,1448,1432,806,1026,1467,1378,1479,1682,1434,1222,882,1286,1273,1124,1339,1140,1383,1399,1247,1168,178,286,324,318,368,1001,1299,829,968,435,769,613,572,608,500,652,693,588,495,572,538,609,645,797,1357,2048,1878,28,28,725,798,1089,1089,1272,1367,1392,1448,1423,1489,1444,1518,1511,1409,1507,1368,1552,1345,1675,1211,1795,1409,1178,1777,310,1992,1296,1063,672,46,709,1040,805,615,730,994,695,526,589,1030,193],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_nlopt.data")}Module["addRunDependency"]("datafile_nlopt.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/nlopt/_nlopt.so",start:0,end:531666,audio:0},{filename:"/lib/python3.9/site-packages/nlopt/__init__.py",start:531666,end:531710,audio:0},{filename:"/lib/python3.9/site-packages/nlopt/nlopt.py",start:531710,end:549653,audio:0},{filename:"/lib/python3.9/site-packages/nlopt-2.7.0-py3.9.egg-info/dependency_links.txt",start:549653,end:549654,audio:0},{filename:"/lib/python3.9/site-packages/nlopt-2.7.0-py3.9.egg-info/not-zip-safe",start:549654,end:549655,audio:0},{filename:"/lib/python3.9/site-packages/nlopt-2.7.0-py3.9.egg-info/top_level.txt",start:549655,end:549661,audio:0},{filename:"/lib/python3.9/site-packages/nlopt-2.7.0-py3.9.egg-info/SOURCES.txt",start:549661,end:550986,audio:0},{filename:"/lib/python3.9/site-packages/nlopt-2.7.0-py3.9.egg-info/requires.txt",start:550986,end:550998,audio:0},{filename:"/lib/python3.9/site-packages/nlopt-2.7.0-py3.9.egg-info/PKG-INFO",start:550998,end:551172,audio:0}],remote_package_size:339188,package_uuid:"3803d10c-1f41-42be-a7e8-1eb4c1039b33"})})();