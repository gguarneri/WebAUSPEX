var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="nltk-tests.data";var REMOTE_PACKAGE_BASE="nltk-tests.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","nltk",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/nltk","test",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/nltk/test","unit",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/nltk/test/unit","translate",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/nltk/test/unit","lm",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:525404,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1257,2322,3108,4127,4987,5468,6152,6957,7821,8785,9520,9905,10364,10994,11816,12281,12747,13211,13658,14154,15003,15936,16363,17102,17917,19261,20443,21637,22763,24006,25048,26136,27300,28516,29614,30860,31975,33192,34422,35739,36876,38212,39481,40853,42145,43481,44808,46113,47431,48663,49791,51133,52302,53724,55087,56311,57767,59229,60346,61470,62648,63956,65208,66112,67505,68681,69964,71416,72720,73926,75154,76652,78056,79248,80712,82213,83510,84665,85788,86933,87907,88864,90007,91302,92637,93706,95004,96360,97320,98307,99533,100695,102030,103135,104206,105501,106920,108433,109816,111155,112500,113604,114823,115798,117221,118682,120114,121548,122971,124278,125507,126596,127902,129179,130316,131502,133034,134332,135941,137525,138835,139778,140563,141425,142430,143307,144432,145751,146680,147501,148186,149382,150176,151052,152156,153145,154131,155092,155979,156748,157442,158389,159590,160843,161583,162624,163377,164174,164973,165899,167113,168424,169352,170867,171910,172728,173596,174248,175161,176203,177168,178088,179062,180019,181100,181975,182384,183422,184844,186072,186592,186969,187365,187778,189077,190229,190819,191211,191626,192003,193368,194533,195323,196623,197470,198476,199684,200902,202239,203628,204850,205803,206474,207325,208337,208940,209773,210948,211801,212693,213751,214843,215801,216962,218291,219408,220812,222178,223306,224446,225194,226266,226975,227747,228621,229507,230546,231184,232260,233564,234973,236360,237069,238033,238684,239428,240214,241206,242212,243572,244929,246238,247353,248318,249319,250143,251149,252425,253301,254606,255786,257178,258462,259814,261097,262285,263460,264776,266150,267340,268667,269987,271091,272156,273547,274990,276083,277153,278143,279394,280754,281980,282944,283793,284816,286025,287254,288128,288914,289569,290129,290879,291676,292316,293125,293933,294546,295172,296054,296849,297307,297801,298266,299133,300289,301668,302935,304094,305593,306774,307795,308844,309646,310854,311942,313175,313982,314853,315923,316919,317807,319e3,320273,321367,322506,323415,323900,324564,325254,326183,326741,327592,328012,329069,330169,330716,331778,332709,333697,334961,336298,337747,339192,340173,340912,341301,342238,342607,343293,343682,344295,345162,345826,347390,349042,350519,351951,353147,354450,355687,357200,358798,360429,361968,362985,363744,364191,365075,366155,367344,368686,369886,370876,371708,372741,374057,375309,376192,377322,378605,379706,380988,382105,383081,384361,385176,386331,387491,388947,390334,391647,392897,394059,394723,395570,396777,397590,398809,400322,401567,402364,403323,404085,404904,406187,407023,408107,408990,410092,410916,411786,412527,413480,414376,415396,415896,416820,417810,418379,418804,419718,420629,421530,422495,423149,423965,424694,425735,426554,427369,428353,429076,429796,430471,431591,432082,432504,432870,433535,434295,434689,435071,435441,436050,436408,437114,437658,438036,438641,439390,439772,440087,440462,441050,441397,442017,442757,443100,443496,443889,444344,444685,445205,446483,447775,448987,450078,450638,450993,451896,453247,454324,455254,456547,457643,458404,459273,460428,460938,461280,461797,462494,463303,463942,464796,465365,466102,466572,467293,468173,469102,469803,470589,471655,472412,473537,474713,475458,476374,477472,478551,479190,480307,481496,481993,483113,484044,484988,485925,486890,487877,488709,489550,490608,491610,492468,493584,494730,495424,496196,496870,497778,498930,499681,500598,501414,502152,503247,504161,505128,506113,507188,508327,509101,510009,510906,511956,513120,514099,515021,516119,517201,518373,519452,520528,521564,522468,523703,524474],sizes:[1257,1065,786,1019,860,481,684,805,864,964,735,385,459,630,822,465,466,464,447,496,849,933,427,739,815,1344,1182,1194,1126,1243,1042,1088,1164,1216,1098,1246,1115,1217,1230,1317,1137,1336,1269,1372,1292,1336,1327,1305,1318,1232,1128,1342,1169,1422,1363,1224,1456,1462,1117,1124,1178,1308,1252,904,1393,1176,1283,1452,1304,1206,1228,1498,1404,1192,1464,1501,1297,1155,1123,1145,974,957,1143,1295,1335,1069,1298,1356,960,987,1226,1162,1335,1105,1071,1295,1419,1513,1383,1339,1345,1104,1219,975,1423,1461,1432,1434,1423,1307,1229,1089,1306,1277,1137,1186,1532,1298,1609,1584,1310,943,785,862,1005,877,1125,1319,929,821,685,1196,794,876,1104,989,986,961,887,769,694,947,1201,1253,740,1041,753,797,799,926,1214,1311,928,1515,1043,818,868,652,913,1042,965,920,974,957,1081,875,409,1038,1422,1228,520,377,396,413,1299,1152,590,392,415,377,1365,1165,790,1300,847,1006,1208,1218,1337,1389,1222,953,671,851,1012,603,833,1175,853,892,1058,1092,958,1161,1329,1117,1404,1366,1128,1140,748,1072,709,772,874,886,1039,638,1076,1304,1409,1387,709,964,651,744,786,992,1006,1360,1357,1309,1115,965,1001,824,1006,1276,876,1305,1180,1392,1284,1352,1283,1188,1175,1316,1374,1190,1327,1320,1104,1065,1391,1443,1093,1070,990,1251,1360,1226,964,849,1023,1209,1229,874,786,655,560,750,797,640,809,808,613,626,882,795,458,494,465,867,1156,1379,1267,1159,1499,1181,1021,1049,802,1208,1088,1233,807,871,1070,996,888,1193,1273,1094,1139,909,485,664,690,929,558,851,420,1057,1100,547,1062,931,988,1264,1337,1449,1445,981,739,389,937,369,686,389,613,867,664,1564,1652,1477,1432,1196,1303,1237,1513,1598,1631,1539,1017,759,447,884,1080,1189,1342,1200,990,832,1033,1316,1252,883,1130,1283,1101,1282,1117,976,1280,815,1155,1160,1456,1387,1313,1250,1162,664,847,1207,813,1219,1513,1245,797,959,762,819,1283,836,1084,883,1102,824,870,741,953,896,1020,500,924,990,569,425,914,911,901,965,654,816,729,1041,819,815,984,723,720,675,1120,491,422,366,665,760,394,382,370,609,358,706,544,378,605,749,382,315,375,588,347,620,740,343,396,393,455,341,520,1278,1292,1212,1091,560,355,903,1351,1077,930,1293,1096,761,869,1155,510,342,517,697,809,639,854,569,737,470,721,880,929,701,786,1066,757,1125,1176,745,916,1098,1079,639,1117,1189,497,1120,931,944,937,965,987,832,841,1058,1002,858,1116,1146,694,772,674,908,1152,751,917,816,738,1095,914,967,985,1075,1139,774,908,897,1050,1164,979,922,1098,1082,1172,1079,1076,1036,904,1235,771,930],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_nltk-tests.data")}Module["addRunDependency"]("datafile_nltk-tests.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/nltk/test/drt.doctest",start:0,end:20076,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/ccg_semantics.doctest",start:20076,end:51142,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/wordnet.doctest",start:51142,end:80210,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/corpus.doctest",start:80210,end:179361,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/treetransforms.doctest",start:179361,end:184367,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/sentiment.doctest",start:184367,end:196596,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/relextract.doctest",start:196596,end:206122,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/translate.doctest",start:206122,end:214518,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/chat80.doctest",start:214518,end:223253,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/collocations.doctest",start:223253,end:234819,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/childes_fixt.py",start:234819,end:235191,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/bleu.doctest",start:235191,end:236053,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/japanese.doctest",start:236053,end:237146,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/probability_fixt.py",start:237146,end:237334,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/framenet.doctest",start:237334,end:248131,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/gluesemantics.doctest",start:248131,end:260885,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/tree.doctest",start:260885,end:308158,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/paice.doctest",start:308158,end:309431,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/stem.doctest",start:309431,end:311983,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/misc.doctest",start:311983,end:315447,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/util.doctest",start:315447,end:316505,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/treeprettyprinter.doctest",start:316505,end:325881,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/nonmonotonic.doctest",start:325881,end:336251,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/inference_fixt.py",start:336251,end:336513,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/tag.doctest",start:336513,end:370615,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/chunk.doctest",start:370615,end:382126,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/featgram.doctest",start:382126,end:410872,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/nonmonotonic_fixt.py",start:410872,end:411166,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/childes.doctest",start:411166,end:420529,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/gluesemantics_malt.doctest",start:420529,end:423196,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/semantics.doctest",start:423196,end:448386,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/gluesemantics_malt_fixt.py",start:448386,end:448618,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/crubadan.doctest",start:448618,end:450678,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/wsd.doctest",start:450678,end:453692,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/internals.doctest",start:453692,end:457975,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/toolbox.doctest",start:457975,end:468298,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/sentiwordnet.doctest",start:468298,end:469349,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/discourse.doctest",start:469349,end:487272,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/index.doctest",start:487272,end:489973,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/lm.doctest",start:489973,end:493924,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/data.doctest",start:493924,end:507921,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/inference.doctest",start:507921,end:526283,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/probability.doctest",start:526283,end:535527,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/classify.doctest",start:535527,end:543226,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/wordnet_lch.doctest",start:543226,end:545587,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/classify_fixt.py",start:545587,end:545706,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/logic.doctest",start:545706,end:580889,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/featstruct.doctest",start:580889,end:619783,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/parse.doctest",start:619783,end:654719,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/propbank.doctest",start:654719,end:661413,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/ccg.doctest",start:661413,end:681199,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/portuguese_en.doctest",start:681199,end:704320,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/generate.doctest",start:704320,end:706370,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/resolution.doctest",start:706370,end:714380,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/simple.doctest",start:714380,end:716787,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/tokenize.doctest",start:716787,end:736894,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/dependency.doctest",start:736894,end:744563,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/bnc.doctest",start:744563,end:746614,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/__init__.py",start:746614,end:747101,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/grammartestsuites.doctest",start:747101,end:750410,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/collections.doctest",start:750410,end:751032,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/meteor.doctest",start:751032,end:752555,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/gensim.doctest",start:752555,end:757755,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/conftest.py",start:757755,end:758559,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/grammar.doctest",start:758559,end:760508,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/metrics.doctest",start:760508,end:771791,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/gensim_fixt.py",start:771791,end:771868,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/concordance.doctest",start:771868,end:775412,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/all.py",start:775412,end:776231,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/portuguese_en_fixt.py",start:776231,end:776361,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/discourse_fixt.py",start:776361,end:776772,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_data.py",start:776772,end:777162,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_wordnet.py",start:777162,end:786422,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_seekable_unicode_stream_reader.py",start:786422,end:788687,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_stem.py",start:788687,end:795034,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_senna.py",start:795034,end:798746,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_ribes.py",start:798746,end:803950,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_pos_tag.py",start:803950,end:806732,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_json2csv_corpus.py",start:806732,end:812620,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_tokenize.py",start:812620,end:841401,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_disagreement.py",start:841401,end:845862,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_util.py",start:845862,end:847750,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_cfd_mutation.py",start:847750,end:849123,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_corenlp.py",start:849123,end:907755,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_twitter_auth.py",start:907755,end:910264,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_chunk.py",start:910264,end:912483,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_corpora.py",start:912483,end:921940,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_concordance.py",start:921940,end:926048,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_rte_classify.py",start:926048,end:928813,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_hmm.py",start:928813,end:931098,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_distance.py",start:931098,end:936937,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_tgrep.py",start:936937,end:968645,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_downloader.py",start:968645,end:969386,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_tag.py",start:969386,end:969921,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_nombank.py",start:969921,end:970681,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_cfg2chomsky.py",start:970681,end:972407,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_pl196x.py",start:972407,end:972817,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_classify.py",start:972817,end:974154,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_aline.py",start:974154,end:975284,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_naivebayes.py",start:975284,end:976048,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_collocations.py",start:976048,end:979738,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_metrics.py",start:979738,end:981687,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_freqdist.py",start:981687,end:981897,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_bllip.py",start:981897,end:983012,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/__init__.py",start:983012,end:983012,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_brill.py",start:983012,end:984036,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_json_serialization.py",start:984036,end:987670,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/test_corpus_views.py",start:987670,end:989270,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/translate/test_gdfa.py",start:989270,end:994040,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/translate/test_meteor.py",start:994040,end:994790,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/translate/test_ibm1.py",start:994790,end:997459,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/translate/test_ibm2.py",start:997459,end:1000836,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/translate/test_ibm3.py",start:1000836,end:1005025,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/translate/__init__.py",start:1005025,end:1005025,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/translate/test_ibm4.py",start:1005025,end:1010234,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/translate/test_ibm5.py",start:1010234,end:1016995,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/translate/test_nist.py",start:1016995,end:1018640,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/translate/test_ibm_model.py",start:1018640,end:1028316,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/translate/test_stack_decoder.py",start:1028316,end:1038316,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/translate/test_bleu.py",start:1038316,end:1054190,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/lm/test_counter.py",start:1054190,end:1058081,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/lm/test_preprocessing.py",start:1058081,end:1059080,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/lm/test_models.py",start:1059080,end:1079240,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/lm/__init__.py",start:1079240,end:1079240,audio:0},{filename:"/lib/python3.9/site-packages/nltk/test/unit/lm/test_vocabulary.py",start:1079240,end:1085157,audio:0}],remote_package_size:529500,package_uuid:"df559067-a9fb-4a58-bd58-9a04540225c0"})})();