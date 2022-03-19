var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="pyyaml.data";var REMOTE_PACKAGE_BASE="pyyaml.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","yaml",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","_yaml",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","PyYAML-6.0-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:282740,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1284,2691,3922,4961,5997,7101,8413,9372,10374,11050,11744,12398,13062,13758,14439,15104,15765,16434,17175,18665,20022,21496,22831,24260,25612,27125,28636,29926,31277,32327,33520,34549,35662,36957,38218,39539,40355,41358,42684,43639,44497,45349,46246,47240,48530,49749,51164,52403,53760,54905,56329,57803,59253,60530,61929,63265,64619,65660,66941,68010,69268,70695,72201,73766,75184,76701,78136,79616,80780,82006,83306,84689,86098,87532,88861,89928,91402,92452,93802,95159,96659,97943,99047,100206,101250,102566,103688,104953,106186,107293,108365,109384,110529,111618,112274,112716,113883,114697,115691,116791,117508,118642,119790,120615,121218,121713,122677,123159,123779,124373,125237,125932,127102,128130,129340,130483,131593,132368,133021,134043,135140,136289,137390,138530,139921,141067,142240,142851,143817,144591,145443,146192,146986,148106,149213,149999,151209,152015,153103,153627,154575,155423,156306,157199,157942,158669,159375,160350,161086,161868,162697,163556,164566,165042,165947,166904,167892,169239,170635,171917,172843,173839,174879,176007,177065,178005,178189,178818,179803,180844,181750,182790,183823,184551,185603,186920,188017,188854,189877,190960,192068,192899,193750,194796,195654,196560,197869,198729,199421,200391,201267,202273,203069,203970,204958,205875,206964,207915,208753,209866,210641,211518,212345,213214,214268,214962,216054,217109,218282,219296,220245,221114,221957,222589,223385,224211,225112,226020,226922,227986,228783,229652,230621,231477,232391,233147,234028,234891,235723,236327,237174,237989,239018,239989,240933,241865,242694,243300,244205,244985,245971,246693,247441,248196,249362,250234,251034,251903,252881,253840,254717,255723,256552,257690,258728,259520,260355,261223,261999,263022,263843,264696,265508,266290,267122,268078,268682,269588,270201,271090,271929,272761,273512,274894,276054,276515,277141,277768,278409,279121,279540,280012,280474,280941,281910],sizes:[1284,1407,1231,1039,1036,1104,1312,959,1002,676,694,654,664,696,681,665,661,669,741,1490,1357,1474,1335,1429,1352,1513,1511,1290,1351,1050,1193,1029,1113,1295,1261,1321,816,1003,1326,955,858,852,897,994,1290,1219,1415,1239,1357,1145,1424,1474,1450,1277,1399,1336,1354,1041,1281,1069,1258,1427,1506,1565,1418,1517,1435,1480,1164,1226,1300,1383,1409,1434,1329,1067,1474,1050,1350,1357,1500,1284,1104,1159,1044,1316,1122,1265,1233,1107,1072,1019,1145,1089,656,442,1167,814,994,1100,717,1134,1148,825,603,495,964,482,620,594,864,695,1170,1028,1210,1143,1110,775,653,1022,1097,1149,1101,1140,1391,1146,1173,611,966,774,852,749,794,1120,1107,786,1210,806,1088,524,948,848,883,893,743,727,706,975,736,782,829,859,1010,476,905,957,988,1347,1396,1282,926,996,1040,1128,1058,940,184,629,985,1041,906,1040,1033,728,1052,1317,1097,837,1023,1083,1108,831,851,1046,858,906,1309,860,692,970,876,1006,796,901,988,917,1089,951,838,1113,775,877,827,869,1054,694,1092,1055,1173,1014,949,869,843,632,796,826,901,908,902,1064,797,869,969,856,914,756,881,863,832,604,847,815,1029,971,944,932,829,606,905,780,986,722,748,755,1166,872,800,869,978,959,877,1006,829,1138,1038,792,835,868,776,1023,821,853,812,782,832,956,604,906,613,889,839,832,751,1382,1160,461,626,627,641,712,419,472,462,467,969,830],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_pyyaml.data")}Module["addRunDependency"]("datafile_pyyaml.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/yaml/_yaml.so",start:0,end:342868,audio:0},{filename:"/lib/python3.9/site-packages/yaml/tokens.py",start:342868,end:345441,audio:0},{filename:"/lib/python3.9/site-packages/yaml/reader.py",start:345441,end:352235,audio:0},{filename:"/lib/python3.9/site-packages/yaml/error.py",start:352235,end:354768,audio:0},{filename:"/lib/python3.9/site-packages/yaml/dumper.py",start:354768,end:357605,audio:0},{filename:"/lib/python3.9/site-packages/yaml/scanner.py",start:357605,end:408884,audio:0},{filename:"/lib/python3.9/site-packages/yaml/events.py",start:408884,end:411329,audio:0},{filename:"/lib/python3.9/site-packages/yaml/representer.py",start:411329,end:425519,audio:0},{filename:"/lib/python3.9/site-packages/yaml/emitter.py",start:425519,end:468525,audio:0},{filename:"/lib/python3.9/site-packages/yaml/cyaml.py",start:468525,end:472376,audio:0},{filename:"/lib/python3.9/site-packages/yaml/parser.py",start:472376,end:497871,audio:0},{filename:"/lib/python3.9/site-packages/yaml/loader.py",start:497871,end:499932,audio:0},{filename:"/lib/python3.9/site-packages/yaml/resolver.py",start:499932,end:508936,audio:0},{filename:"/lib/python3.9/site-packages/yaml/nodes.py",start:508936,end:510376,audio:0},{filename:"/lib/python3.9/site-packages/yaml/serializer.py",start:510376,end:514541,audio:0},{filename:"/lib/python3.9/site-packages/yaml/composer.py",start:514541,end:519424,audio:0},{filename:"/lib/python3.9/site-packages/yaml/constructor.py",start:519424,end:548063,audio:0},{filename:"/lib/python3.9/site-packages/yaml/__init__.py",start:548063,end:560372,audio:0},{filename:"/lib/python3.9/site-packages/_yaml/__init__.py",start:560372,end:561774,audio:0},{filename:"/lib/python3.9/site-packages/PyYAML-6.0-py3.9.egg-info/dependency_links.txt",start:561774,end:561775,audio:0},{filename:"/lib/python3.9/site-packages/PyYAML-6.0-py3.9.egg-info/top_level.txt",start:561775,end:561786,audio:0},{filename:"/lib/python3.9/site-packages/PyYAML-6.0-py3.9.egg-info/SOURCES.txt",start:561786,end:583120,audio:0},{filename:"/lib/python3.9/site-packages/PyYAML-6.0-py3.9.egg-info/PKG-INFO",start:583120,end:585126,audio:0}],remote_package_size:286836,package_uuid:"2673f8cf-9bb0-4101-a364-6e854ec1deda"})})();