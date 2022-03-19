var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="msgpack.data";var REMOTE_PACKAGE_BASE="msgpack.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","msgpack",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","msgpack-1.0.3-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:91931,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1229,2312,3235,4534,5752,7012,8048,9187,10495,11196,12313,13504,14429,15779,17189,18733,20026,21330,22619,23616,24939,26326,27534,28883,30486,31977,33330,34652,35910,37395,38999,40531,41708,43063,44457,45844,47190,48494,49864,51367,52512,54005,55546,57050,58540,59957,61253,62539,63591,64725,65759,66968,68015,69012,70353,71481,72555,73649,74628,75626,76308,77091,77932,78966,80220,81106,81871,82674,83398,84186,85416,86514,87956,89427,90783],sizes:[1229,1083,923,1299,1218,1260,1036,1139,1308,701,1117,1191,925,1350,1410,1544,1293,1304,1289,997,1323,1387,1208,1349,1603,1491,1353,1322,1258,1485,1604,1532,1177,1355,1394,1387,1346,1304,1370,1503,1145,1493,1541,1504,1490,1417,1296,1286,1052,1134,1034,1209,1047,997,1341,1128,1074,1094,979,998,682,783,841,1034,1254,886,765,803,724,788,1230,1098,1442,1471,1356,1148],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_msgpack.data")}Module["addRunDependency"]("datafile_msgpack.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/msgpack/ext.py",start:0,end:6088,audio:0},{filename:"/lib/python3.9/site-packages/msgpack/_cmsgpack.so",start:6088,end:108965,audio:0},{filename:"/lib/python3.9/site-packages/msgpack/fallback.py",start:108965,end:143440,audio:0},{filename:"/lib/python3.9/site-packages/msgpack/__init__.py",start:143440,end:144558,audio:0},{filename:"/lib/python3.9/site-packages/msgpack/_version.py",start:144558,end:144578,audio:0},{filename:"/lib/python3.9/site-packages/msgpack/exceptions.py",start:144578,end:145659,audio:0},{filename:"/lib/python3.9/site-packages/msgpack-1.0.3-py3.9.egg-info/dependency_links.txt",start:145659,end:145660,audio:0},{filename:"/lib/python3.9/site-packages/msgpack-1.0.3-py3.9.egg-info/top_level.txt",start:145660,end:145668,audio:0},{filename:"/lib/python3.9/site-packages/msgpack-1.0.3-py3.9.egg-info/SOURCES.txt",start:145668,end:146528,audio:0},{filename:"/lib/python3.9/site-packages/msgpack-1.0.3-py3.9.egg-info/PKG-INFO",start:146528,end:155253,audio:0}],remote_package_size:96027,package_uuid:"33d40052-0748-49ad-b663-dc476f1d17ba"})})();