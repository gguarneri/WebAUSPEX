var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="xlrd.data";var REMOTE_PACKAGE_BASE="xlrd.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","bin",true,true);Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","xlrd-2.0.1-py3.9.egg-info",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","xlrd",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:203257,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1369,2450,3646,4667,5738,6868,7730,8849,10011,11631,13119,14347,15671,16569,17819,18897,20121,21107,22039,22795,23812,24737,25860,26837,27897,28807,29667,30735,31539,32483,33562,34588,35609,36584,37650,38486,39439,40529,41238,41944,42878,43649,44785,46055,46990,48169,49255,50408,51479,52465,53697,54865,56033,57312,58571,59872,61086,62489,63635,64770,66058,67024,68391,69669,70809,71976,73016,74087,75293,76135,77170,78237,79293,80678,82053,83317,84595,85794,86960,88332,89659,90624,92047,93270,94547,95785,97044,98239,99590,100623,101640,102665,103808,104995,106161,106811,107916,109010,110315,111713,113181,114484,115701,116999,118542,119790,120856,122254,123148,124288,124984,125754,126523,127318,128042,128740,129577,130527,131328,132118,133219,134745,136006,137248,138455,139318,140021,140867,141931,142896,143787,144875,145711,146497,147446,148467,149710,150914,151765,152433,153499,154527,155604,156474,157472,158327,159298,160588,161331,162195,163145,164301,165497,166869,167915,169181,170415,171639,173106,174367,175643,176518,177846,178951,180130,181290,182457,183508,184687,185771,186913,188047,189018,190229,191331,192444,193432,194445,195527,196785,197826,199213,200489,201938,203205],sizes:[1369,1081,1196,1021,1071,1130,862,1119,1162,1620,1488,1228,1324,898,1250,1078,1224,986,932,756,1017,925,1123,977,1060,910,860,1068,804,944,1079,1026,1021,975,1066,836,953,1090,709,706,934,771,1136,1270,935,1179,1086,1153,1071,986,1232,1168,1168,1279,1259,1301,1214,1403,1146,1135,1288,966,1367,1278,1140,1167,1040,1071,1206,842,1035,1067,1056,1385,1375,1264,1278,1199,1166,1372,1327,965,1423,1223,1277,1238,1259,1195,1351,1033,1017,1025,1143,1187,1166,650,1105,1094,1305,1398,1468,1303,1217,1298,1543,1248,1066,1398,894,1140,696,770,769,795,724,698,837,950,801,790,1101,1526,1261,1242,1207,863,703,846,1064,965,891,1088,836,786,949,1021,1243,1204,851,668,1066,1028,1077,870,998,855,971,1290,743,864,950,1156,1196,1372,1046,1266,1234,1224,1467,1261,1276,875,1328,1105,1179,1160,1167,1051,1179,1084,1142,1134,971,1211,1102,1113,988,1013,1082,1258,1041,1387,1276,1449,1267,52],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_xlrd.data")}Module["addRunDependency"]("datafile_xlrd.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/bin/runxlrd.py",start:0,end:16075,audio:0},{filename:"/lib/python3.9/site-packages/xlrd-2.0.1-py3.9.egg-info/dependency_links.txt",start:16075,end:16076,audio:0},{filename:"/lib/python3.9/site-packages/xlrd-2.0.1-py3.9.egg-info/top_level.txt",start:16076,end:16081,audio:0},{filename:"/lib/python3.9/site-packages/xlrd-2.0.1-py3.9.egg-info/SOURCES.txt",start:16081,end:16459,audio:0},{filename:"/lib/python3.9/site-packages/xlrd-2.0.1-py3.9.egg-info/requires.txt",start:16459,end:16521,audio:0},{filename:"/lib/python3.9/site-packages/xlrd-2.0.1-py3.9.egg-info/PKG-INFO",start:16521,end:19782,audio:0},{filename:"/lib/python3.9/site-packages/xlrd/sheet.py",start:19782,end:126588,audio:0},{filename:"/lib/python3.9/site-packages/xlrd/timemachine.py",start:126588,end:128345,audio:0},{filename:"/lib/python3.9/site-packages/xlrd/compdoc.py",start:128345,end:149436,audio:0},{filename:"/lib/python3.9/site-packages/xlrd/xldate.py",start:149436,end:157370,audio:0},{filename:"/lib/python3.9/site-packages/xlrd/formatting.py",start:157370,end:202943,audio:0},{filename:"/lib/python3.9/site-packages/xlrd/biffh.py",start:202943,end:219594,audio:0},{filename:"/lib/python3.9/site-packages/xlrd/formula.py",start:219594,end:314049,audio:0},{filename:"/lib/python3.9/site-packages/xlrd/book.py",start:314049,end:371576,audio:0},{filename:"/lib/python3.9/site-packages/xlrd/__init__.py",start:371576,end:378896,audio:0},{filename:"/lib/python3.9/site-packages/xlrd/info.py",start:378896,end:378932,audio:0}],remote_package_size:207353,package_uuid:"2b0ba32c-21e7-45f6-97f5-d5987e5b24cc"})})();