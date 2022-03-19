var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="traits-tests.data";var REMOTE_PACKAGE_BASE="traits-tests.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","traits",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits","etsconfig",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits/etsconfig","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits","examples",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits/examples","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits/tests","test-data",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits/tests/test-data","historical-pickles",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits","adaptation",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits/adaptation","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits","observation",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits/observation","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits","testing",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits/testing","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits","util",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/traits/util","tests",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:431072,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1316,2184,3131,3709,4722,5957,6805,7405,8015,8999,10147,11294,12156,13322,14496,15676,16532,17928,19195,20020,20770,22174,23302,24382,25428,26392,27408,28078,29047,29827,30728,31825,32946,33934,34781,35748,36319,37137,38473,39144,39975,41035,42217,43249,44386,45862,46569,47497,48465,49361,50133,50962,51912,52748,54028,54998,55458,56203,57202,58564,59678,60501,61828,62806,63565,64721,65643,66430,66978,68013,69082,70432,71675,73126,73965,75230,76265,77146,77848,78474,79689,80514,81555,82592,83303,84101,85237,86042,86772,87775,89158,89818,90462,91126,92105,92799,93365,93999,95445,96395,97698,98403,99338,100084,100894,101928,102922,103975,105210,106041,106975,107960,108905,110252,111113,111839,113178,114340,115222,116481,117563,118241,118907,119525,120071,120926,121652,122585,123434,124078,125009,125907,126583,127333,128183,128841,129691,130943,131965,132993,133969,134790,135620,136692,137818,138866,140121,141166,141832,143029,143994,144583,145439,146077,146615,147341,148213,149619,150941,152132,153395,154610,155776,156759,157457,158868,159817,161055,161720,162765,164091,165381,166258,166929,167559,168655,169698,170696,171521,172625,173670,174653,175374,176093,177205,178243,179098,180053,181449,182674,183892,184958,186246,187255,188276,189440,189957,191052,192043,193236,194241,194941,196135,196998,198210,199460,200522,201136,201765,202447,203331,204614,205511,205975,206863,208087,208565,209471,210199,211427,212567,213758,214420,215374,216216,217261,218314,219279,219844,220362,221358,222779,223590,224451,225063,225702,226221,226820,227871,228560,229320,229969,230721,231352,232094,232773,233360,234106,235250,236273,237349,238212,238841,239592,240145,240797,242097,242886,244064,244895,245488,246575,247853,248696,249562,250753,251950,252742,253447,254090,255254,256431,257533,258731,259728,260923,261661,262474,263181,264035,264749,265840,266732,267671,268581,269401,270492,271487,272515,273263,273951,275201,276103,276848,277642,278596,279871,280676,281904,282555,283335,284307,285255,286048,286904,287459,288190,289175,290511,291639,292302,293460,294134,294883,295608,296319,297260,298166,298954,300150,300981,302371,303375,304265,305262,306704,308147,308914,309462,310169,311032,311855,312716,313611,314826,315988,316628,317745,318792,319428,320600,321732,323087,323820,324897,325697,326360,327232,328153,329258,330077,330852,331805,332607,333882,335190,336385,337602,338346,339255,340321,341192,342254,343046,344048,344928,346211,346977,347721,348481,349196,350041,350882,351947,352761,354063,355088,356051,356948,357690,358517,359557,360732,361980,362666,363931,364865,365892,366537,367029,367635,368269,369047,370143,371204,372073,372802,373783,374535,375776,376931,377678,378373,379007,379757,380431,380943,381673,382373,383075,383860,384783,386038,386898,387863,388456,389490,390313,391092,391936,393129,394349,395123,396367,397139,398031,399063,399954,400919,401955,402794,403743,405057,406061,406822,407678,408669,409456,410424,411584,412478,413334,414290,415460,416607,417931,418821,420043,421290,422577,423608,424719,425746,426899,428134,429278,430286],sizes:[1316,868,947,578,1013,1235,848,600,610,984,1148,1147,862,1166,1174,1180,856,1396,1267,825,750,1404,1128,1080,1046,964,1016,670,969,780,901,1097,1121,988,847,967,571,818,1336,671,831,1060,1182,1032,1137,1476,707,928,968,896,772,829,950,836,1280,970,460,745,999,1362,1114,823,1327,978,759,1156,922,787,548,1035,1069,1350,1243,1451,839,1265,1035,881,702,626,1215,825,1041,1037,711,798,1136,805,730,1003,1383,660,644,664,979,694,566,634,1446,950,1303,705,935,746,810,1034,994,1053,1235,831,934,985,945,1347,861,726,1339,1162,882,1259,1082,678,666,618,546,855,726,933,849,644,931,898,676,750,850,658,850,1252,1022,1028,976,821,830,1072,1126,1048,1255,1045,666,1197,965,589,856,638,538,726,872,1406,1322,1191,1263,1215,1166,983,698,1411,949,1238,665,1045,1326,1290,877,671,630,1096,1043,998,825,1104,1045,983,721,719,1112,1038,855,955,1396,1225,1218,1066,1288,1009,1021,1164,517,1095,991,1193,1005,700,1194,863,1212,1250,1062,614,629,682,884,1283,897,464,888,1224,478,906,728,1228,1140,1191,662,954,842,1045,1053,965,565,518,996,1421,811,861,612,639,519,599,1051,689,760,649,752,631,742,679,587,746,1144,1023,1076,863,629,751,553,652,1300,789,1178,831,593,1087,1278,843,866,1191,1197,792,705,643,1164,1177,1102,1198,997,1195,738,813,707,854,714,1091,892,939,910,820,1091,995,1028,748,688,1250,902,745,794,954,1275,805,1228,651,780,972,948,793,856,555,731,985,1336,1128,663,1158,674,749,725,711,941,906,788,1196,831,1390,1004,890,997,1442,1443,767,548,707,863,823,861,895,1215,1162,640,1117,1047,636,1172,1132,1355,733,1077,800,663,872,921,1105,819,775,953,802,1275,1308,1195,1217,744,909,1066,871,1062,792,1002,880,1283,766,744,760,715,845,841,1065,814,1302,1025,963,897,742,827,1040,1175,1248,686,1265,934,1027,645,492,606,634,778,1096,1061,869,729,981,752,1241,1155,747,695,634,750,674,512,730,700,702,785,923,1255,860,965,593,1034,823,779,844,1193,1220,774,1244,772,892,1032,891,965,1036,839,949,1314,1004,761,856,991,787,968,1160,894,856,956,1170,1147,1324,890,1222,1247,1287,1031,1111,1027,1153,1235,1144,1008,786],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_traits-tests.data")}Module["addRunDependency"]("datafile_traits-tests.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/traits/etsconfig/tests/test_etsconfig.py",start:0,end:10585,audio:0},{filename:"/lib/python3.9/site-packages/traits/etsconfig/tests/__init__.py",start:10585,end:10585,audio:0},{filename:"/lib/python3.9/site-packages/traits/examples/tests/test_etsdemo_info.py",start:10585,end:11409,audio:0},{filename:"/lib/python3.9/site-packages/traits/examples/tests/__init__.py",start:11409,end:11409,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_map.py",start:11409,end:20209,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_has_required_traits.py",start:20209,end:21676,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_python_properties.py",start:21676,end:23139,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_prefix_list.py",start:23139,end:28226,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_unicode_traits.py",start:28226,end:29024,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_dynamic_trait_definition.py",start:29024,end:30523,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_date.py",start:30523,end:35841,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_class_traits.py",start:35841,end:37474,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_array_or_none.py",start:37474,end:43552,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_event_order.py",start:43552,end:46103,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_trait_get_set.py",start:46103,end:48420,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_container_events.py",start:48420,end:53063,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_copy_traits.py",start:53063,end:62152,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_none.py",start:62152,end:63154,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_target.py",start:63154,end:65207,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_interfaces.py",start:65207,end:78375,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_trait_list_dict.py",start:78375,end:84626,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_property_delete.py",start:84626,end:85693,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_str_handler.py",start:85693,end:87549,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_abc.py",start:87549,end:90260,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_constants.py",start:90260,end:91182,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_historical_unpickling.py",start:91182,end:93145,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_float.py",start:93145,end:98252,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_dynamic_notifiers.py",start:98252,end:108426,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_file.py",start:108426,end:111477,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_enum.py",start:111477,end:121953,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_readonly.py",start:121953,end:123142,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_trait_exceptions.py",start:123142,end:124165,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_copyable_trait_names.py",start:124165,end:127626,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_array.py",start:127626,end:129387,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_static_notifiers.py",start:129387,end:133304,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_string.py",start:133304,end:134226,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_ctraits.py",start:134226,end:145647,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_trait_cycle.py",start:145647,end:149617,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_trait_types.py",start:149617,end:154622,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_integer_range.py",start:154622,end:164018,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_trait_change_event_tracer.py",start:164018,end:169510,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_property_notifications.py",start:169510,end:185584,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_trait_converters.py",start:185584,end:192498,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_list_events.py",start:192498,end:200748,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_ui_notifiers.py",start:200748,end:205168,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_trait_set_object.py",start:205168,end:221050,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_configure_traits.py",start:221050,end:227101,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/check_timing.py",start:227101,end:232764,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_cythonized_traits.py",start:232764,end:237714,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_weak_ref.py",start:237714,end:239638,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_int_range_long.py",start:239638,end:240684,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_time.py",start:240684,end:244273,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_trait_default_initializer.py",start:244273,end:245792,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_extended_trait_change.py",start:245792,end:280648,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_observe.py",start:280648,end:306520,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_traits_listener.py",start:306520,end:321905,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_new_notifiers.py",start:321905,end:325140,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_regression.py",start:325140,end:338499,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_dict.py",start:338499,end:343252,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_integer.py",start:343252,end:346668,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_keyword_args.py",start:346668,end:347484,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_pickle_validated_dict.py",start:347484,end:348515,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_get_traits.py",start:348515,end:351620,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_extended_notifiers.py",start:351620,end:359227,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_undefined.py",start:359227,end:360963,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_special_event_handlers.py",start:360963,end:362229,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_automatic_adaptation.py",start:362229,end:366658,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_list.py",start:366658,end:377465,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_clone.py",start:377465,end:386012,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/check_observe_timing.py",start:386012,end:403679,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_validated_tuple.py",start:403679,end:405279,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_range.py",start:405279,end:408964,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_long_traits.py",start:408964,end:409729,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_directory.py",start:409729,end:413852,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_listeners.py",start:413852,end:421653,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_interface_checker.py",start:421653,end:433207,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_prefix_map.py",start:433207,end:441091,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_rich_compare.py",start:441091,end:449698,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_type.py",start:449698,end:451607,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_tuple.py",start:451607,end:453818,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_expression.py",start:453818,end:458221,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_instance.py",start:458221,end:460626,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_uuid.py",start:460626,end:461603,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_trait_prefix_list.py",start:461603,end:462942,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_delegate.py",start:462942,end:471658,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_constant.py",start:471658,end:474123,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_trait_list_object.py",start:474123,end:525010,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_datetime.py",start:525010,end:528793,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_editor_factories.py",start:528793,end:535825,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_version.py",start:535825,end:537842,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_union.py",start:537842,end:544252,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_float_range.py",start:544252,end:553651,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_bool.py",start:553651,end:556142,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_trait_dict_list_set_event.py",start:556142,end:558515,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_trait_base.py",start:558515,end:560297,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_any.py",start:560297,end:563049,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_has_traits.py",start:563049,end:590477,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_anytrait_static_notifiers.py",start:590477,end:595780,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_traits.py",start:595780,end:629925,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/__init__.py",start:629925,end:630390,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_deprecated_handlers.py",start:630390,end:631713,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/tuple_test_mixin.py",start:631713,end:634403,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_view_elements.py",start:634403,end:638052,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_trait_dict_object.py",start:638052,end:653276,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_sync_traits.py",start:653276,end:658327,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test_callable.py",start:658327,end:665056,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test-data/historical-pickles/hipt-t5.2.0-p4-float-ctrait.pkl",start:665056,end:665260,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test-data/historical-pickles/hipt-t5.2.0-p5-float-ctrait.pkl",start:665260,end:665464,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test-data/historical-pickles/hipt-t5.2.0-p0-float-ctrait.pkl",start:665464,end:665787,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test-data/historical-pickles/README",start:665787,end:666285,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test-data/historical-pickles/hipt-t5.2.0-p3-float-ctrait.pkl",start:666285,end:666502,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test-data/historical-pickles/hipt-t5.2.0-p2-float-ctrait.pkl",start:666502,end:666719,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test-data/historical-pickles/generate_pickles.py",start:666719,end:668377,audio:0},{filename:"/lib/python3.9/site-packages/traits/tests/test-data/historical-pickles/hipt-t5.2.0-p1-float-ctrait.pkl",start:668377,end:668675,audio:0},{filename:"/lib/python3.9/site-packages/traits/adaptation/tests/test_adaptation_manager.py",start:668675,end:684864,audio:0},{filename:"/lib/python3.9/site-packages/traits/adaptation/tests/test_adapter.py",start:684864,end:686598,audio:0},{filename:"/lib/python3.9/site-packages/traits/adaptation/tests/test_global_adaptation_manager.py",start:686598,end:690849,audio:0},{filename:"/lib/python3.9/site-packages/traits/adaptation/tests/test_adaptation_offer.py",start:690849,end:693068,audio:0},{filename:"/lib/python3.9/site-packages/traits/adaptation/tests/lazy_examples.py",start:693068,end:693690,audio:0},{filename:"/lib/python3.9/site-packages/traits/adaptation/tests/interface_examples.py",start:693690,end:697312,audio:0},{filename:"/lib/python3.9/site-packages/traits/adaptation/tests/__init__.py",start:697312,end:697312,audio:0},{filename:"/lib/python3.9/site-packages/traits/adaptation/tests/benchmark.py",start:697312,end:701662,audio:0},{filename:"/lib/python3.9/site-packages/traits/adaptation/tests/abc_examples.py",start:701662,end:705772,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_trait_added_observer.py",start:705772,end:715219,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_list_item_observer.py",start:715219,end:725984,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_trait_change_event.py",start:725984,end:727761,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_generated_parser.py",start:727761,end:729885,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_list_change_event.py",start:729885,end:731612,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_named_trait_observer.py",start:731612,end:750114,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_observe.py",start:750114,end:767922,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_trait_event_notifier.py",start:767922,end:783811,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_dict_change_event.py",start:783811,end:785600,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_observer_graph.py",start:785600,end:788912,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_observer_change_notifier.py",start:788912,end:808359,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_dict_item_observer.py",start:808359,end:817688,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_set_change_event.py",start:817688,end:819440,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_expression.py",start:819440,end:844257,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_has_traits_helpers.py",start:844257,end:853620,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_parsing.py",start:853620,end:860650,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/__init__.py",start:860650,end:860650,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_exception_handling.py",start:860650,end:863310,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_metadata_filter.py",start:863310,end:867376,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_filtered_trait_observer.py",start:867376,end:878472,audio:0},{filename:"/lib/python3.9/site-packages/traits/observation/tests/test_set_item_observer.py",start:878472,end:885879,audio:0},{filename:"/lib/python3.9/site-packages/traits/testing/tests/test_unittest_tools.py",start:885879,end:900577,audio:0},{filename:"/lib/python3.9/site-packages/traits/testing/tests/test_nose_tools.py",start:900577,end:901791,audio:0},{filename:"/lib/python3.9/site-packages/traits/testing/tests/__init__.py",start:901791,end:901791,audio:0},{filename:"/lib/python3.9/site-packages/traits/testing/tests/test_optional_dependencies.py",start:901791,end:902589,audio:0},{filename:"/lib/python3.9/site-packages/traits/util/tests/test_weakidddict.py",start:902589,end:906962,audio:0},{filename:"/lib/python3.9/site-packages/traits/util/tests/test_traitsui_helpers.py",start:906962,end:908337,audio:0},{filename:"/lib/python3.9/site-packages/traits/util/tests/test_resource.py",start:908337,end:909507,audio:0},{filename:"/lib/python3.9/site-packages/traits/util/tests/test_camel_case.py",start:909507,end:911314,audio:0},{filename:"/lib/python3.9/site-packages/traits/util/tests/test_record_events.py",start:911314,end:916270,audio:0},{filename:"/lib/python3.9/site-packages/traits/util/tests/test_message_records.py",start:916270,end:918290,audio:0},{filename:"/lib/python3.9/site-packages/traits/util/tests/test_trait_documenter.py",start:918290,end:925571,audio:0},{filename:"/lib/python3.9/site-packages/traits/util/tests/test_clean_strings.py",start:925571,end:929040,audio:0},{filename:"/lib/python3.9/site-packages/traits/util/tests/test_deprecated.py",start:929040,end:930916,audio:0},{filename:"/lib/python3.9/site-packages/traits/util/tests/test_async_trait_wait.py",start:930916,end:933542,audio:0},{filename:"/lib/python3.9/site-packages/traits/util/tests/test_record_containers.py",start:933542,end:936012,audio:0},{filename:"/lib/python3.9/site-packages/traits/util/tests/test_import_symbol.py",start:936012,end:937226,audio:0},{filename:"/lib/python3.9/site-packages/traits/util/tests/__init__.py",start:937226,end:937226,audio:0}],remote_package_size:435168,package_uuid:"44defffd-4fe3-4f44-af60-e4ee4107575b"})})();