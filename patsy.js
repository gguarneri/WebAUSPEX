var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="patsy.data";var REMOTE_PACKAGE_BASE="patsy.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","patsy-0.5.2-py3.9.egg-info",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","patsy",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:234010,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1007,2369,3856,5419,6942,8390,9826,11268,12255,13137,14303,15285,16025,17419,18531,19570,20384,21770,23062,24289,25388,26512,27456,28455,29609,30942,32066,33090,33986,34894,35904,36931,38097,39489,40766,42137,43486,44487,45244,46040,47029,47944,48867,50051,51024,52035,53141,54356,55375,56735,58011,59047,60237,61676,63080,64318,65475,67089,68641,69886,71097,72142,73382,74892,75834,76852,78069,79447,80761,81864,83033,84216,85623,86957,87914,89142,90340,91669,92810,93787,94582,96030,97292,98519,99611,100961,102156,103293,104211,104922,105875,107197,108253,109231,110166,111214,112420,113871,114859,116120,117608,119092,120425,121885,123012,124052,125414,126496,127638,128500,129527,130690,132085,133339,134525,135928,137015,138295,139185,139925,140728,141595,142843,144266,145627,146884,147882,149034,150496,151588,152863,154087,155438,156910,158476,159786,160964,162065,162921,164095,165209,166312,167083,167929,169089,170435,171525,172479,173615,174794,175710,176661,177720,178573,179654,180841,181972,182789,183818,184761,185797,186890,188123,189615,191069,192230,193488,194315,195554,196983,198276,199412,200247,201697,202655,203996,204948,205952,206873,208022,209155,210592,211942,213205,214521,215654,216701,217799,218882,220203,221299,222707,223874,225026,226237,227603,228972,230217,231572,232867,233840],sizes:[1007,1362,1487,1563,1523,1448,1436,1442,987,882,1166,982,740,1394,1112,1039,814,1386,1292,1227,1099,1124,944,999,1154,1333,1124,1024,896,908,1010,1027,1166,1392,1277,1371,1349,1001,757,796,989,915,923,1184,973,1011,1106,1215,1019,1360,1276,1036,1190,1439,1404,1238,1157,1614,1552,1245,1211,1045,1240,1510,942,1018,1217,1378,1314,1103,1169,1183,1407,1334,957,1228,1198,1329,1141,977,795,1448,1262,1227,1092,1350,1195,1137,918,711,953,1322,1056,978,935,1048,1206,1451,988,1261,1488,1484,1333,1460,1127,1040,1362,1082,1142,862,1027,1163,1395,1254,1186,1403,1087,1280,890,740,803,867,1248,1423,1361,1257,998,1152,1462,1092,1275,1224,1351,1472,1566,1310,1178,1101,856,1174,1114,1103,771,846,1160,1346,1090,954,1136,1179,916,951,1059,853,1081,1187,1131,817,1029,943,1036,1093,1233,1492,1454,1161,1258,827,1239,1429,1293,1136,835,1450,958,1341,952,1004,921,1149,1133,1437,1350,1263,1316,1133,1047,1098,1083,1321,1096,1408,1167,1152,1211,1366,1369,1245,1355,1295,973,170],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_patsy.data")}Module["addRunDependency"]("datafile_patsy.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/patsy-0.5.2-py3.9.egg-info/dependency_links.txt",start:0,end:1,audio:0},{filename:"/lib/python3.9/site-packages/patsy-0.5.2-py3.9.egg-info/top_level.txt",start:1,end:7,audio:0},{filename:"/lib/python3.9/site-packages/patsy-0.5.2-py3.9.egg-info/SOURCES.txt",start:7,end:2260,audio:0},{filename:"/lib/python3.9/site-packages/patsy-0.5.2-py3.9.egg-info/requires.txt",start:2260,end:2307,audio:0},{filename:"/lib/python3.9/site-packages/patsy-0.5.2-py3.9.egg-info/PKG-INFO",start:2307,end:5404,audio:0},{filename:"/lib/python3.9/site-packages/patsy/version.py",start:5404,end:6227,audio:0},{filename:"/lib/python3.9/site-packages/patsy/builtins.py",start:6227,end:9358,audio:0},{filename:"/lib/python3.9/site-packages/patsy/splines.py",start:9358,end:26885,audio:0},{filename:"/lib/python3.9/site-packages/patsy/tokens.py",start:26885,end:35048,audio:0},{filename:"/lib/python3.9/site-packages/patsy/eval.py",start:35048,end:67234,audio:0},{filename:"/lib/python3.9/site-packages/patsy/state.py",start:67234,end:74103,audio:0},{filename:"/lib/python3.9/site-packages/patsy/build.py",start:74103,end:116861,audio:0},{filename:"/lib/python3.9/site-packages/patsy/missing.py",start:116861,end:128441,audio:0},{filename:"/lib/python3.9/site-packages/patsy/infix_parser.py",start:128441,end:138221,audio:0},{filename:"/lib/python3.9/site-packages/patsy/compat_ordereddict.py",start:138221,end:147391,audio:0},{filename:"/lib/python3.9/site-packages/patsy/categorical.py",start:147391,end:166417,audio:0},{filename:"/lib/python3.9/site-packages/patsy/mgcv_cubic_splines.py",start:166417,end:211522,audio:0},{filename:"/lib/python3.9/site-packages/patsy/design_info.py",start:211522,end:262214,audio:0},{filename:"/lib/python3.9/site-packages/patsy/redundancy.py",start:262214,end:272872,audio:0},{filename:"/lib/python3.9/site-packages/patsy/compat.py",start:272872,end:274861,audio:0},{filename:"/lib/python3.9/site-packages/patsy/desc.py",start:274861,end:297336,audio:0},{filename:"/lib/python3.9/site-packages/patsy/constraint.py",start:297336,end:317616,audio:0},{filename:"/lib/python3.9/site-packages/patsy/util.py",start:317616,end:346094,audio:0},{filename:"/lib/python3.9/site-packages/patsy/contrasts.py",start:346094,end:370255,audio:0},{filename:"/lib/python3.9/site-packages/patsy/__init__.py",start:370255,end:373762,audio:0},{filename:"/lib/python3.9/site-packages/patsy/origin.py",start:373762,end:378352,audio:0},{filename:"/lib/python3.9/site-packages/patsy/parse_formula.py",start:378352,end:388096,audio:0},{filename:"/lib/python3.9/site-packages/patsy/highlevel.py",start:388096,end:402812,audio:0},{filename:"/lib/python3.9/site-packages/patsy/user_util.py",start:402812,end:411894,audio:0}],remote_package_size:238106,package_uuid:"18d4ac0e-0148-427f-98d1-73b029903497"})})();