var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="pyrsistent.data";var REMOTE_PACKAGE_BASE="pyrsistent.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","pyrsistent",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","pyrsistent-0.18.0-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:114159,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1453,2790,4178,5525,6857,8353,9791,11152,11572,11597,12265,13492,14800,16009,16976,18100,19392,20561,21831,23151,24085,25123,26324,27598,28894,30169,31458,32624,33705,35162,36278,37222,38483,39469,40583,41950,43155,44156,45511,46829,48174,49187,50368,51465,52570,53557,54759,55903,57018,58004,58892,59840,60954,62149,63438,64558,65394,66492,67570,68766,70191,71370,72564,73701,74860,75956,77168,78008,78657,79518,80419,81527,82489,83353,84598,85626,87260,88542,89701,90825,91996,92929,94092,95294,96521,97849,99264,100495,101829,103079,104437,105640,106764,107967,109452,110818,112225,113651],sizes:[1453,1337,1388,1347,1332,1496,1438,1361,420,25,668,1227,1308,1209,967,1124,1292,1169,1270,1320,934,1038,1201,1274,1296,1275,1289,1166,1081,1457,1116,944,1261,986,1114,1367,1205,1001,1355,1318,1345,1013,1181,1097,1105,987,1202,1144,1115,986,888,948,1114,1195,1289,1120,836,1098,1078,1196,1425,1179,1194,1137,1159,1096,1212,840,649,861,901,1108,962,864,1245,1028,1634,1282,1159,1124,1171,933,1163,1202,1227,1328,1415,1231,1334,1250,1358,1203,1124,1203,1485,1366,1407,1426,508],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_pyrsistent.data")}Module["addRunDependency"]("datafile_pyrsistent.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/_pyrsistent_version.py",start:0,end:23,audio:0},{filename:"/lib/python3.9/site-packages/pvectorc.so",start:23,end:21506,audio:0},{filename:"/lib/python3.9/site-packages/pyrsistent/_field_common.py",start:21506,end:33036,audio:0},{filename:"/lib/python3.9/site-packages/pyrsistent/_plist.py",start:33036,end:41329,audio:0},{filename:"/lib/python3.9/site-packages/pyrsistent/__init__.pyi",start:41329,end:48517,audio:0},{filename:"/lib/python3.9/site-packages/pyrsistent/py.typed",start:48517,end:48517,audio:0},{filename:"/lib/python3.9/site-packages/pyrsistent/_immutable.py",start:48517,end:52051,audio:0},{filename:"/lib/python3.9/site-packages/pyrsistent/_precord.py",start:52051,end:59083,audio:0},{filename:"/lib/python3.9/site-packages/pyrsistent/_pmap.py",start:59083,end:73761,audio:0},{filename:"/lib/python3.9/site-packages/pyrsistent/_pset.py",start:73761,end:79454,audio:0},{filename:"/lib/python3.9/site-packages/pyrsistent/_checked_types.py",start:79454,end:97826,audio:0},{filename:"/lib/python3.9/site-packages/pyrsistent/_pdeque.py",start:97826,end:110029,audio:0},{filename:"/lib/python3.9/site-packages/pyrsistent/_pvector.py",start:110029,end:132723,audio:0},{filename:"/lib/python3.9/site-packages/pyrsistent/_helpers.py",start:132723,end:135955,audio:0},{filename:"/lib/python3.9/site-packages/pyrsistent/typing.pyi",start:135955,end:146364,audio:0},{filename:"/lib/python3.9/site-packages/pyrsistent/_pbag.py",start:146364,end:153094,audio:0},{filename:"/lib/python3.9/site-packages/pyrsistent/typing.py",start:153094,end:154861,audio:0},{filename:"/lib/python3.9/site-packages/pyrsistent/_toolz.py",start:154861,end:158289,audio:0},{filename:"/lib/python3.9/site-packages/pyrsistent/_pclass.py",start:158289,end:167991,audio:0},{filename:"/lib/python3.9/site-packages/pyrsistent/__init__.py",start:167991,end:169470,audio:0},{filename:"/lib/python3.9/site-packages/pyrsistent/_transformations.py",start:169470,end:173270,audio:0},{filename:"/lib/python3.9/site-packages/pyrsistent-0.18.0-py3.9.egg-info/dependency_links.txt",start:173270,end:173271,audio:0},{filename:"/lib/python3.9/site-packages/pyrsistent-0.18.0-py3.9.egg-info/top_level.txt",start:173271,end:173311,audio:0},{filename:"/lib/python3.9/site-packages/pyrsistent-0.18.0-py3.9.egg-info/SOURCES.txt",start:173311,end:174447,audio:0},{filename:"/lib/python3.9/site-packages/pyrsistent-0.18.0-py3.9.egg-info/PKG-INFO",start:174447,end:201268,audio:0}],remote_package_size:118255,package_uuid:"3e33f2ea-c49f-4bb6-807a-008d89e960b7"})})();