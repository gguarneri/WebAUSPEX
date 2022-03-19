var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="uncertainties.data";var REMOTE_PACKAGE_BASE="uncertainties.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","uncertainties-3.1.6-py3.9.egg-info",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","uncertainties",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/uncertainties","lib1to2",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/uncertainties/lib1to2","fixes",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/uncertainties","unumpy",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:131206,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1155,2124,3616,5214,6603,8131,9513,10930,12388,13788,15114,16395,17727,19151,20349,21559,22904,24181,25561,26680,27955,29195,30305,31658,32459,33930,35280,36735,38185,39635,40922,42164,43426,44554,45756,46859,48173,49337,50660,52045,53333,54701,55945,57402,58776,60169,61460,62758,63973,65139,66212,67369,68504,69698,71027,72353,73816,75157,76360,77507,78834,80282,81468,82587,83996,85391,86641,87993,89326,90596,92019,93357,94790,96115,97701,99175,100613,101987,103214,104496,105991,107157,108393,109238,110351,111708,113035,114019,115377,116653,117913,119121,120340,121689,122902,124201,125514,126862,128176,129498,130872],sizes:[1155,969,1492,1598,1389,1528,1382,1417,1458,1400,1326,1281,1332,1424,1198,1210,1345,1277,1380,1119,1275,1240,1110,1353,801,1471,1350,1455,1450,1450,1287,1242,1262,1128,1202,1103,1314,1164,1323,1385,1288,1368,1244,1457,1374,1393,1291,1298,1215,1166,1073,1157,1135,1194,1329,1326,1463,1341,1203,1147,1327,1448,1186,1119,1409,1395,1250,1352,1333,1270,1423,1338,1433,1325,1586,1474,1438,1374,1227,1282,1495,1166,1236,845,1113,1357,1327,984,1358,1276,1260,1208,1219,1349,1213,1299,1313,1348,1314,1322,1374,334],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_uncertainties.data")}Module["addRunDependency"]("datafile_uncertainties.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/uncertainties-3.1.6-py3.9.egg-info/dependency_links.txt",start:0,end:1,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties-3.1.6-py3.9.egg-info/top_level.txt",start:1,end:15,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties-3.1.6-py3.9.egg-info/SOURCES.txt",start:15,end:1163,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties-3.1.6-py3.9.egg-info/requires.txt",start:1163,end:1248,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties-3.1.6-py3.9.egg-info/PKG-INFO",start:1248,end:15206,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/umath.py",start:15206,end:16525,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/1to2.py",start:16525,end:16909,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/core.py",start:16909,end:144469,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/__init__.py",start:144469,end:153824,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/umath_core.py",start:153824,end:168635,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/lib1to2/__init__.py",start:168635,end:168635,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/lib1to2/fixes/fix_std_dev.py",start:168635,end:169672,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/lib1to2/fixes/fix_ufloat.py",start:169672,end:172713,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/lib1to2/fixes/fix_uarray_umatrix.py",start:172713,end:175269,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/lib1to2/fixes/__init__.py",start:175269,end:175269,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/lib1to2/fixes/fix_std_devs.py",start:175269,end:175759,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/unumpy/ulinalg.py",start:175759,end:176130,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/unumpy/core.py",start:176130,end:204386,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/unumpy/__init__.py",start:204386,end:207227,audio:0}],remote_package_size:135302,package_uuid:"162f5040-62d4-4ba2-990c-f962825688b8"})})();