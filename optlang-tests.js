var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="optlang-tests.data";var REMOTE_PACKAGE_BASE="optlang-tests.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","optlang",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/optlang","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/optlang/tests","data",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:129246,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1075,2256,3086,4111,4954,5769,6724,7643,8586,9362,10169,10808,11674,12697,13403,14509,15614,16876,18013,18840,19745,20587,21366,21860,22652,23497,24240,24862,25753,26648,27266,28110,29069,30123,31128,31992,32875,33698,34527,35628,36692,37693,38710,39765,41217,42099,42778,43335,44593,45422,45940,46782,47921,49045,50202,51160,52305,53588,54757,55640,56906,58146,59093,59881,60802,61712,62487,63179,63994,64658,65388,66008,66900,67740,68618,69224,69987,70754,71445,72301,73239,74157,74732,75930,77065,78093,78997,79850,80747,81654,82430,83327,83860,84667,85346,86030,86744,87524,88149,89180,90434,91391,92682,93694,94498,95485,96419,97285,98107,98995,99698,100452,101277,102052,102995,103999,104718,105899,107098,108247,109152,109969,110708,111354,111781,112699,113446,114720,115866,116706,117907,118996,119894,120627,121451,122151,123026,123524,124245,125049,125874,126677,127411,128345],sizes:[1075,1181,830,1025,843,815,955,919,943,776,807,639,866,1023,706,1106,1105,1262,1137,827,905,842,779,494,792,845,743,622,891,895,618,844,959,1054,1005,864,883,823,829,1101,1064,1001,1017,1055,1452,882,679,557,1258,829,518,842,1139,1124,1157,958,1145,1283,1169,883,1266,1240,947,788,921,910,775,692,815,664,730,620,892,840,878,606,763,767,691,856,938,918,575,1198,1135,1028,904,853,897,907,776,897,533,807,679,684,714,780,625,1031,1254,957,1291,1012,804,987,934,866,822,888,703,754,825,775,943,1004,719,1181,1199,1149,905,817,739,646,427,918,747,1274,1146,840,1201,1089,898,733,824,700,875,498,721,804,825,803,734,934,901],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_optlang-tests.data")}Module["addRunDependency"]("datafile_optlang-tests.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/optlang/tests/test_expression_parsing.py",start:0,end:3497,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_change_solver.py",start:3497,end:7254,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_coinor_cbc_interface.py",start:7254,end:35026,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_glpk_interface.py",start:35026,end:59371,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_interface.py",start:59371,end:69030,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_scipy_interface.py",start:69030,end:81442,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_util.py",start:81442,end:91058,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_duality.py",start:91058,end:98861,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_container.py",start:98861,end:107934,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_netlib_gurobi_interface.py",start:107934,end:115425,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_inspyred_interface.py",start:115425,end:117516,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_netlib_cplex_interface.py",start:117516,end:124594,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/abstract_test_cases.py",start:124594,end:164938,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_elements.py",start:164938,end:170675,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_symbolics.py",start:170675,end:170930,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_cplex_interface.py",start:170930,end:203797,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_netlib_glpk_exact_interface.py",start:203797,end:209767,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_osqp_interface.py",start:209767,end:236445,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/__init__.py",start:236445,end:237056,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_io.py",start:237056,end:241017,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_glpk_exact_interface.py",start:241017,end:260514,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_netlib_glpk_interface.py",start:260514,end:267147,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_gurobi_interface.py",start:267147,end:294612,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/data/parse_the_final_netlib_results.py",start:294612,end:296188,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/data/__init__.py",start:296188,end:296188,audio:0}],remote_package_size:133342,package_uuid:"4da7821e-bf6e-4654-a10d-103cbc2129ff"})})();