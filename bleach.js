var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="bleach.data";var REMOTE_PACKAGE_BASE="bleach.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","bleach",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/bleach","_vendor",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/bleach/_vendor","html5lib-1.1.dist-info",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/bleach/_vendor","html5lib",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/bleach/_vendor/html5lib","treebuilders",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/bleach/_vendor/html5lib","treewalkers",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/bleach/_vendor/html5lib","filters",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/bleach/_vendor/html5lib","_trie",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/bleach/_vendor/html5lib","treeadapters",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","bleach-4.1.0-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:317846,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,866,2030,3124,4161,5240,6523,7808,9067,10356,11516,13198,14614,15800,17063,18183,19199,20259,21203,22333,23605,24990,26151,27314,28363,29408,30585,31766,32975,33984,35194,36600,37849,39203,40558,42038,43358,44591,45331,46333,47223,48563,49833,51035,52201,53609,54880,56068,57368,58842,60133,61365,62465,63554,65222,66356,67617,69185,70727,72244,73833,75371,76767,78288,79650,80877,81983,83030,83807,84775,85878,86966,88113,89368,89914,90521,91281,92031,93106,94028,94789,95748,96867,97912,98732,99569,100202,100965,101769,102584,103462,104376,105086,106153,107139,107959,108820,109845,110897,112015,112792,113720,114734,115621,116526,117325,118319,119081,120165,121199,121985,122942,123691,124506,125421,126347,127294,128169,129069,129797,130632,131817,132675,133384,134206,134902,135586,136403,137019,137582,138634,139684,140840,141957,142924,143809,144763,145630,146402,147387,148255,149178,150109,151026,151939,152865,153794,154736,155646,156561,157449,158400,159207,160011,160926,161854,162780,163696,164522,165467,166374,167341,168711,169831,170882,172042,173024,174020,174863,175319,176039,176863,177485,178079,178708,179292,179754,180371,181025,181470,182189,182986,183915,184609,185192,185922,186922,187772,188322,188866,189512,190069,190948,191562,192117,192645,193210,193776,194317,195374,196523,197657,198990,200156,201327,202452,203828,204961,205857,206906,207928,208975,209895,211012,211950,213005,214210,215387,216578,217706,218606,219412,220349,221695,222978,224291,225484,226976,228512,229815,230797,232070,233496,234687,235792,236724,237535,238415,239295,240245,241341,242501,243590,244716,245730,246827,247823,249062,249909,250909,251902,252684,254103,254953,255866,256919,257738,258744,259915,261251,262471,263796,264587,265822,266803,267752,268534,269634,270710,271619,272714,273858,275128,276155,277183,278267,278717,279210,279910,280630,281349,282111,282929,283988,284847,286021,287148,288216,289354,290054,291139,292129,293112,293927,294702,295356,296304,297424,298545,299510,300762,301437,302462,304042,305475,306644,307950,309270,310646,312013,313473,314806,316221,317513],sizes:[866,1164,1094,1037,1079,1283,1285,1259,1289,1160,1682,1416,1186,1263,1120,1016,1060,944,1130,1272,1385,1161,1163,1049,1045,1177,1181,1209,1009,1210,1406,1249,1354,1355,1480,1320,1233,740,1002,890,1340,1270,1202,1166,1408,1271,1188,1300,1474,1291,1232,1100,1089,1668,1134,1261,1568,1542,1517,1589,1538,1396,1521,1362,1227,1106,1047,777,968,1103,1088,1147,1255,546,607,760,750,1075,922,761,959,1119,1045,820,837,633,763,804,815,878,914,710,1067,986,820,861,1025,1052,1118,777,928,1014,887,905,799,994,762,1084,1034,786,957,749,815,915,926,947,875,900,728,835,1185,858,709,822,696,684,817,616,563,1052,1050,1156,1117,967,885,954,867,772,985,868,923,931,917,913,926,929,942,910,915,888,951,807,804,915,928,926,916,826,945,907,967,1370,1120,1051,1160,982,996,843,456,720,824,622,594,629,584,462,617,654,445,719,797,929,694,583,730,1e3,850,550,544,646,557,879,614,555,528,565,566,541,1057,1149,1134,1333,1166,1171,1125,1376,1133,896,1049,1022,1047,920,1117,938,1055,1205,1177,1191,1128,900,806,937,1346,1283,1313,1193,1492,1536,1303,982,1273,1426,1191,1105,932,811,880,880,950,1096,1160,1089,1126,1014,1097,996,1239,847,1e3,993,782,1419,850,913,1053,819,1006,1171,1336,1220,1325,791,1235,981,949,782,1100,1076,909,1095,1144,1270,1027,1028,1084,450,493,700,720,719,762,818,1059,859,1174,1127,1068,1138,700,1085,990,983,815,775,654,948,1120,1121,965,1252,675,1025,1580,1433,1169,1306,1320,1376,1367,1460,1333,1415,1292,333],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_bleach.data")}Module["addRunDependency"]("datafile_bleach.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/bleach/html5lib_shim.py",start:0,end:20124,audio:0},{filename:"/lib/python3.9/site-packages/bleach/linkifier.py",start:20124,end:40121,audio:0},{filename:"/lib/python3.9/site-packages/bleach/utils.py",start:40121,end:40734,audio:0},{filename:"/lib/python3.9/site-packages/bleach/sanitizer.py",start:40734,end:62609,audio:0},{filename:"/lib/python3.9/site-packages/bleach/__init__.py",start:62609,end:66321,audio:0},{filename:"/lib/python3.9/site-packages/bleach/callbacks.py",start:66321,end:67073,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/vendor_install.sh",start:67073,end:67526,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/vendor.txt",start:67526,end:67710,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/README.rst",start:67710,end:69870,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/__init__.py",start:69870,end:69870,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/parse.py",start:69870,end:108893,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib-1.1.dist-info/INSTALLER",start:108893,end:108897,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib-1.1.dist-info/top_level.txt",start:108897,end:108906,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib-1.1.dist-info/WHEEL",start:108906,end:109016,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib-1.1.dist-info/AUTHORS.rst",start:109016,end:109999,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib-1.1.dist-info/METADATA",start:109999,end:126075,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib-1.1.dist-info/RECORD",start:126075,end:129561,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/html5parser.py",start:129561,end:246735,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/constants.py",start:246735,end:330199,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/_tokenizer.py",start:330199,end:407227,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/_inputstream.py",start:407227,end:439527,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/serializer.py",start:439527,end:455274,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/_ihatexml.py",start:455274,end:472002,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/__init__.py",start:472002,end:473145,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/_utils.py",start:473145,end:478064,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/treebuilders/etree.py",start:478064,end:490888,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/treebuilders/base.py",start:490888,end:505441,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/treebuilders/dom.py",start:505441,end:514366,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/treebuilders/etree_lxml.py",start:514366,end:529120,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/treebuilders/__init__.py",start:529120,end:532712,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/treewalkers/etree.py",start:532712,end:537251,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/treewalkers/base.py",start:537251,end:544727,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/treewalkers/dom.py",start:544727,end:546140,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/treewalkers/genshi.py",start:546140,end:548449,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/treewalkers/etree_lxml.py",start:548449,end:554794,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/treewalkers/__init__.py",start:554794,end:560513,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/filters/alphabeticalattributes.py",start:560513,end:561432,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/filters/base.py",start:561432,end:561718,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/filters/sanitizer.py",start:561718,end:588603,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/filters/lint.py",start:588603,end:592234,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/filters/whitespace.py",start:592234,end:593448,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/filters/optionaltags.py",start:593448,end:604036,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/filters/inject_meta_charset.py",start:604036,end:606981,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/filters/__init__.py",start:606981,end:606981,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/_trie/_base.py",start:606981,end:607994,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/_trie/__init__.py",start:607994,end:608103,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/_trie/py.py",start:608103,end:609866,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/treeadapters/sax.py",start:609866,end:611642,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/treeadapters/genshi.py",start:611642,end:613357,audio:0},{filename:"/lib/python3.9/site-packages/bleach/_vendor/html5lib/treeadapters/__init__.py",start:613357,end:614007,audio:0},{filename:"/lib/python3.9/site-packages/bleach-4.1.0-py3.9.egg-info/dependency_links.txt",start:614007,end:614008,audio:0},{filename:"/lib/python3.9/site-packages/bleach-4.1.0-py3.9.egg-info/not-zip-safe",start:614008,end:614009,audio:0},{filename:"/lib/python3.9/site-packages/bleach-4.1.0-py3.9.egg-info/top_level.txt",start:614009,end:614016,audio:0},{filename:"/lib/python3.9/site-packages/bleach-4.1.0-py3.9.egg-info/SOURCES.txt",start:614016,end:617140,audio:0},{filename:"/lib/python3.9/site-packages/bleach-4.1.0-py3.9.egg-info/requires.txt",start:617140,end:617174,audio:0},{filename:"/lib/python3.9/site-packages/bleach-4.1.0-py3.9.egg-info/PKG-INFO",start:617174,end:641548,audio:0}],remote_package_size:321942,package_uuid:"de91b8d0-a36f-468e-a267-fde76133d238"})})();