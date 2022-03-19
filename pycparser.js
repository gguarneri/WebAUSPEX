var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="pycparser.data";var REMOTE_PACKAGE_BASE="pycparser.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","pycparser",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/pycparser","ply",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","pycparser-2.21-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:319359,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1095,2275,3332,4225,4938,5822,6949,7904,9083,10411,11666,13047,13845,14369,15269,16639,18095,19410,20505,21346,22673,23809,25250,25835,26434,27088,27755,28355,29092,29744,30238,30755,31374,33023,34693,36e3,37428,39062,40751,42431,43990,45481,47073,48656,50214,51823,53559,54771,56376,57698,59088,60684,62197,64022,65440,67069,68295,69968,71505,72870,74392,75515,77137,78684,79817,81220,82909,84264,85833,87501,89156,90677,92131,93458,95076,96308,97511,99011,100770,102603,104280,106013,107455,109062,110637,112182,114011,115729,117264,118933,120416,122034,123331,124836,126049,127083,128437,129508,130651,131636,132605,133625,134341,134931,135385,135852,136485,137173,137589,138031,138641,139073,139716,140425,141167,141782,142390,142912,143228,143731,144278,144901,145496,146518,147796,149153,150383,151381,152649,153796,155078,156339,157484,158595,159643,160653,161617,162871,164189,165430,166069,166634,167494,168284,168999,170038,170746,171490,172572,173801,174850,175848,176828,177439,178307,178991,179871,180323,180990,181769,182626,183434,184655,185943,187137,188493,189622,190621,191725,192761,193996,195112,196294,197071,197859,198605,199391,200078,200772,201535,202222,202969,203736,204492,205132,206019,207352,208850,210337,211652,212854,214008,215227,216340,217395,218327,219236,220123,221173,222151,223144,224304,225251,226112,227089,228007,228899,230060,231082,231904,232882,233793,234821,236004,237136,238244,239269,240350,241390,242414,243433,244317,245293,246214,247191,248278,249198,250369,251618,252837,253903,254802,256048,257050,258012,259023,259952,260591,261440,262189,263336,263977,264879,265972,266983,268206,269155,270199,271276,272512,273789,274888,275830,276691,278010,279274,280813,281890,283006,284073,285040,285776,286951,287861,288906,289953,291157,292119,293077,294051,294897,295848,296989,298257,299289,300403,301653,302742,303954,305096,306082,307021,308143,309154,310051,311184,312101,312986,313971,314730,315380,316364,317337,318155,319264],sizes:[1095,1180,1057,893,713,884,1127,955,1179,1328,1255,1381,798,524,900,1370,1456,1315,1095,841,1327,1136,1441,585,599,654,667,600,737,652,494,517,619,1649,1670,1307,1428,1634,1689,1680,1559,1491,1592,1583,1558,1609,1736,1212,1605,1322,1390,1596,1513,1825,1418,1629,1226,1673,1537,1365,1522,1123,1622,1547,1133,1403,1689,1355,1569,1668,1655,1521,1454,1327,1618,1232,1203,1500,1759,1833,1677,1733,1442,1607,1575,1545,1829,1718,1535,1669,1483,1618,1297,1505,1213,1034,1354,1071,1143,985,969,1020,716,590,454,467,633,688,416,442,610,432,643,709,742,615,608,522,316,503,547,623,595,1022,1278,1357,1230,998,1268,1147,1282,1261,1145,1111,1048,1010,964,1254,1318,1241,639,565,860,790,715,1039,708,744,1082,1229,1049,998,980,611,868,684,880,452,667,779,857,808,1221,1288,1194,1356,1129,999,1104,1036,1235,1116,1182,777,788,746,786,687,694,763,687,747,767,756,640,887,1333,1498,1487,1315,1202,1154,1219,1113,1055,932,909,887,1050,978,993,1160,947,861,977,918,892,1161,1022,822,978,911,1028,1183,1132,1108,1025,1081,1040,1024,1019,884,976,921,977,1087,920,1171,1249,1219,1066,899,1246,1002,962,1011,929,639,849,749,1147,641,902,1093,1011,1223,949,1044,1077,1236,1277,1099,942,861,1319,1264,1539,1077,1116,1067,967,736,1175,910,1045,1047,1204,962,958,974,846,951,1141,1268,1032,1114,1250,1089,1212,1142,986,939,1122,1011,897,1133,917,885,985,759,650,984,973,818,1109,95],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_pycparser.data")}Module["addRunDependency"]("datafile_pycparser.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/pycparser/c_generator.py",start:0,end:17772,audio:0},{filename:"/lib/python3.9/site-packages/pycparser/plyparser.py",start:17772,end:22647,audio:0},{filename:"/lib/python3.9/site-packages/pycparser/lextab.py",start:22647,end:31151,audio:0},{filename:"/lib/python3.9/site-packages/pycparser/_c_ast.cfg",start:31151,end:35406,audio:0},{filename:"/lib/python3.9/site-packages/pycparser/_ast_gen.py",start:35406,end:45961,audio:0},{filename:"/lib/python3.9/site-packages/pycparser/yacctab.py",start:45961,end:251613,audio:0},{filename:"/lib/python3.9/site-packages/pycparser/ast_transforms.py",start:251613,end:257304,audio:0},{filename:"/lib/python3.9/site-packages/pycparser/_build_tables.py",start:257304,end:258343,audio:0},{filename:"/lib/python3.9/site-packages/pycparser/c_parser.py",start:258343,end:332023,audio:0},{filename:"/lib/python3.9/site-packages/pycparser/c_lexer.py",start:332023,end:349190,audio:0},{filename:"/lib/python3.9/site-packages/pycparser/c_ast.py",start:349190,end:380635,audio:0},{filename:"/lib/python3.9/site-packages/pycparser/__init__.py",start:380635,end:383450,audio:0},{filename:"/lib/python3.9/site-packages/pycparser/ply/yacc.py",start:383450,end:520773,audio:0},{filename:"/lib/python3.9/site-packages/pycparser/ply/ctokens.py",start:520773,end:523950,audio:0},{filename:"/lib/python3.9/site-packages/pycparser/ply/lex.py",start:523950,end:566868,audio:0},{filename:"/lib/python3.9/site-packages/pycparser/ply/ygen.py",start:566868,end:569119,audio:0},{filename:"/lib/python3.9/site-packages/pycparser/ply/__init__.py",start:569119,end:569221,audio:0},{filename:"/lib/python3.9/site-packages/pycparser/ply/cpp.py",start:569221,end:602503,audio:0},{filename:"/lib/python3.9/site-packages/pycparser-2.21-py3.9.egg-info/dependency_links.txt",start:602503,end:602504,audio:0},{filename:"/lib/python3.9/site-packages/pycparser-2.21-py3.9.egg-info/top_level.txt",start:602504,end:602514,audio:0},{filename:"/lib/python3.9/site-packages/pycparser-2.21-py3.9.egg-info/SOURCES.txt",start:602514,end:603091,audio:0},{filename:"/lib/python3.9/site-packages/pycparser-2.21-py3.9.egg-info/PKG-INFO",start:603091,end:604257,audio:0}],remote_package_size:323455,package_uuid:"c3683480-261c-4fb0-96a9-899d2efcddf2"})})();