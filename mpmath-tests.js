var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="mpmath-tests.data";var REMOTE_PACKAGE_BASE="mpmath-tests.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","mpmath",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/mpmath","tests",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:222531,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,823,1937,2840,3925,5259,5835,6935,8114,9083,10062,11249,12768,14434,15920,16751,17780,18863,20540,21647,22674,23638,24492,25298,26299,27364,28199,29136,30112,30947,31882,32815,33814,35296,36614,37873,38913,39984,41151,42372,43187,44023,44888,45499,46589,47742,48854,49814,51003,52271,53268,54295,55479,56722,57981,59203,60109,61279,62556,63685,65081,66257,67365,68319,69175,69895,71107,71949,73128,74505,75915,77214,78401,79317,80298,81235,82512,83254,84444,85040,86063,86924,88016,89204,90261,91570,92525,93241,94122,95214,96522,97501,98951,100763,102570,104377,106200,108038,109856,111673,113502,115322,116834,118679,120523,122433,123664,124749,125742,126451,127061,127783,128836,129675,130421,131536,132637,133507,134145,135328,136215,137195,138129,138965,139872,140829,141562,142878,143915,144796,145917,146439,147543,148599,149803,151052,151960,153175,154492,155197,155867,156977,158230,159370,160311,161348,162578,163642,164339,165205,166075,166962,167790,168666,169559,170325,170859,171510,172369,173252,174099,174904,175779,176630,177535,178401,179093,179952,180826,181717,182537,183401,184183,184894,185559,186261,187041,187862,188638,189492,190374,191271,192427,193606,194736,195266,195892,196553,197648,198826,199803,201657,202765,203785,204919,205879,207368,208718,209569,210234,211551,212871,214027,215274,216344,217092,217794,218942,219983,220799,221569,222109],sizes:[823,1114,903,1085,1334,576,1100,1179,969,979,1187,1519,1666,1486,831,1029,1083,1677,1107,1027,964,854,806,1001,1065,835,937,976,835,935,933,999,1482,1318,1259,1040,1071,1167,1221,815,836,865,611,1090,1153,1112,960,1189,1268,997,1027,1184,1243,1259,1222,906,1170,1277,1129,1396,1176,1108,954,856,720,1212,842,1179,1377,1410,1299,1187,916,981,937,1277,742,1190,596,1023,861,1092,1188,1057,1309,955,716,881,1092,1308,979,1450,1812,1807,1807,1823,1838,1818,1817,1829,1820,1512,1845,1844,1910,1231,1085,993,709,610,722,1053,839,746,1115,1101,870,638,1183,887,980,934,836,907,957,733,1316,1037,881,1121,522,1104,1056,1204,1249,908,1215,1317,705,670,1110,1253,1140,941,1037,1230,1064,697,866,870,887,828,876,893,766,534,651,859,883,847,805,875,851,905,866,692,859,874,891,820,864,782,711,665,702,780,821,776,854,882,897,1156,1179,1130,530,626,661,1095,1178,977,1854,1108,1020,1134,960,1489,1350,851,665,1317,1320,1156,1247,1070,748,702,1148,1041,816,770,540,422],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_mpmath-tests.data")}Module["addRunDependency"]("datafile_mpmath-tests.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/mpmath/tests/test_special.py",start:0,end:2848,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_elliptic.py",start:2848,end:28993,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_division.py",start:28993,end:34333,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_functions.py",start:34333,end:65288,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_calculus.py",start:65288,end:74259,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_ode.py",start:74259,end:76081,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_rootfinding.py",start:76081,end:79213,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_identify.py",start:79213,end:79905,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_eigen.py",start:79905,end:83810,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_gammazeta.py",start:83810,end:111473,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_functions2.py",start:111473,end:208463,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_hp.py",start:208463,end:218924,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_interval.py",start:218924,end:236451,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_trig.py",start:236451,end:241250,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_compatibility.py",start:241250,end:243556,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_convert.py",start:243556,end:252066,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_eigen_symmetric.py",start:252066,end:260844,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_diff.py",start:260844,end:263310,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_power.py",start:263310,end:268537,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_pickle.py",start:268537,end:268938,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_levin.py",start:268938,end:274028,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_matrices.py",start:274028,end:281972,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_fp.py",start:281972,end:371969,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/runtests.py",start:371969,end:376787,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_bitwise.py",start:376787,end:384473,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_visualization.py",start:384473,end:385417,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_mpmath.py",start:385417,end:385613,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/extratest_gamma.py",start:385613,end:392841,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_summation.py",start:392841,end:394700,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/extratest_zeta.py",start:394700,end:395703,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_quad.py",start:395703,end:399596,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_str.py",start:399596,end:400140,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/__init__.py",start:400140,end:400140,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/torture.py",start:400140,end:408008,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_linalg.py",start:408008,end:418464,audio:0},{filename:"/lib/python3.9/site-packages/mpmath/tests/test_basic_ops.py",start:418464,end:433669,audio:0}],remote_package_size:226627,package_uuid:"66bd0575-fa0a-4237-bd1f-79167a2a92ca"})})();