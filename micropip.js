var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="micropip.data";var REMOTE_PACKAGE_BASE="micropip.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","micropip",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/micropip","externals",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/micropip/externals","pip",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/micropip/externals/pip","_vendor",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/micropip/externals/pip","_internal",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/micropip/externals/pip/_internal","utils",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","micropip-0.1-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:24914,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1216,2671,3801,4898,6057,7416,8751,10101,11606,12810,13933,15102,16307,17531,18784,20206,21412,22589,23906],sizes:[1216,1455,1130,1097,1159,1359,1335,1350,1505,1204,1123,1169,1205,1224,1253,1422,1206,1177,1317,1008],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_micropip.data")}Module["addRunDependency"]("datafile_micropip.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/micropip/_micropip.py",start:0,end:14894,audio:0},{filename:"/lib/python3.9/site-packages/micropip/__init__.py",start:14894,end:14971,audio:0},{filename:"/lib/python3.9/site-packages/micropip/package.py",start:14971,end:16578,audio:0},{filename:"/lib/python3.9/site-packages/micropip/externals/__init__.py",start:16578,end:16578,audio:0},{filename:"/lib/python3.9/site-packages/micropip/externals/pip/__init__.py",start:16578,end:16671,audio:0},{filename:"/lib/python3.9/site-packages/micropip/externals/pip/_vendor/pkg_resources.py",start:16671,end:32485,audio:0},{filename:"/lib/python3.9/site-packages/micropip/externals/pip/_vendor/__init__.py",start:32485,end:32485,audio:0},{filename:"/lib/python3.9/site-packages/micropip/externals/pip/_internal/__init__.py",start:32485,end:32485,audio:0},{filename:"/lib/python3.9/site-packages/micropip/externals/pip/_internal/utils/wheel.py",start:32485,end:38891,audio:0},{filename:"/lib/python3.9/site-packages/micropip/externals/pip/_internal/utils/pkg_resources.py",start:38891,end:39996,audio:0},{filename:"/lib/python3.9/site-packages/micropip/externals/pip/_internal/utils/__init__.py",start:39996,end:39996,audio:0},{filename:"/lib/python3.9/site-packages/micropip-0.1-py3.9.egg-info/dependency_links.txt",start:39996,end:39997,audio:0},{filename:"/lib/python3.9/site-packages/micropip-0.1-py3.9.egg-info/top_level.txt",start:39997,end:40006,audio:0},{filename:"/lib/python3.9/site-packages/micropip-0.1-py3.9.egg-info/SOURCES.txt",start:40006,end:40562,audio:0},{filename:"/lib/python3.9/site-packages/micropip-0.1-py3.9.egg-info/PKG-INFO",start:40562,end:40823,audio:0}],remote_package_size:29010,package_uuid:"0fd1edb6-ff26-4232-846f-a9e2776744ae"})})();