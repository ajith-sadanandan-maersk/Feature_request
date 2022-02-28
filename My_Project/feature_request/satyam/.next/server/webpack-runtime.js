/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/remotes loading */
/******/ 	(() => {
/******/ 		var chunkMapping = {};
/******/ 		var idToExternalAndNameMapping = {};
/******/ 		__webpack_require__.f.remotes = (chunkId, promises) => {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach((id) => {
/******/ 					var getScope = __webpack_require__.R;
/******/ 					if(!getScope) getScope = [];
/******/ 					var data = idToExternalAndNameMapping[id];
/******/ 					if(getScope.indexOf(data) >= 0) return;
/******/ 					getScope.push(data);
/******/ 					if(data.p) return promises.push(data.p);
/******/ 					var onError = (error) => {
/******/ 						if(!error) error = new Error("Container missing");
/******/ 						if(typeof error.message === "string")
/******/ 							error.message += '\nwhile loading "' + data[1] + '" from ' + data[2];
/******/ 						__webpack_modules__[id] = () => {
/******/ 							throw error;
/******/ 						}
/******/ 						data.p = 0;
/******/ 					};
/******/ 					var handleFunction = (fn, arg1, arg2, d, next, first) => {
/******/ 						try {
/******/ 							var promise = fn(arg1, arg2);
/******/ 							if(promise && promise.then) {
/******/ 								var p = promise.then((result) => (next(result, d)), onError);
/******/ 								if(first) promises.push(data.p = p); else return p;
/******/ 							} else {
/******/ 								return next(promise, d, first);
/******/ 							}
/******/ 						} catch(error) {
/******/ 							onError(error);
/******/ 						}
/******/ 					}
/******/ 					var onExternal = (external, _, first) => (external ? handleFunction(__webpack_require__.I, data[0], 0, external, onInitialized, first) : onError());
/******/ 					var onInitialized = (_, external, first) => (handleFunction(external.get, data[1], getScope, 0, onFactory, first));
/******/ 					var onFactory = (factory) => {
/******/ 						data.p = 1;
/******/ 						__webpack_modules__[id] = (module) => {
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					};
/******/ 					handleFunction(__webpack_require__, data[2], 0, 0, onExternal, 1);
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = (msg) => (typeof console !== "undefined" && console.warn && console.warn(msg));
/******/ 			var uniqueName = "satyam";
/******/ 			var register = (name, version, factory, eager) => {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = (id) => {
/******/ 				var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult.catch(handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup entrypoint */
/******/ 	(() => {
/******/ 		__webpack_require__.X = (result, chunkIds, fn) => {
/******/ 			// arguments: chunkIds, moduleId are deprecated
/******/ 			var moduleId = chunkIds;
/******/ 			if(!fn) chunkIds = result, fn = () => (__webpack_require__(__webpack_require__.s = moduleId));
/******/ 			chunkIds.map(__webpack_require__.e, __webpack_require__)
/******/ 			var r = fn();
/******/ 			return r === undefined ? result : r;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"webpack-runtime": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if("webpack-runtime" != chunkId) {
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		module.exports = __webpack_require__;
/******/ 		__webpack_require__.C = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VicGFjay1ydW50aW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7VUFBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxHQUFHO1VBQ0g7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ2xDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGOzs7OztXQ1JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsMkNBQTJDO1dBQzNDLE9BQU87V0FDUDtXQUNBO1dBQ0EsTUFBTTtXQUNOO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBOzs7OztXQzVDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxvSkFBb0o7V0FDcEo7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJLGFBQWE7V0FDakI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDdkNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDUEE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0JBQWdCLHFCQUFxQjtXQUNyQzs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTs7V0FFQTtXQUNBOztXQUVBOztXQUVBOzs7OztVRXRDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NhdHlhbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zYXR5YW0vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2F0eWFtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zYXR5YW0vd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9zYXR5YW0vd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3NhdHlhbS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NhdHlhbS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NhdHlhbS93ZWJwYWNrL3J1bnRpbWUvcmVtb3RlcyBsb2FkaW5nIiwid2VicGFjazovL3NhdHlhbS93ZWJwYWNrL3J1bnRpbWUvc2hhcmluZyIsIndlYnBhY2s6Ly9zYXR5YW0vd2VicGFjay9ydW50aW1lL3N0YXJ0dXAgZW50cnlwb2ludCIsIndlYnBhY2s6Ly9zYXR5YW0vd2VicGFjay9ydW50aW1lL3JlcXVpcmUgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zYXR5YW0vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9zYXR5YW0vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3NhdHlhbS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHR2YXIgdGhyZXcgPSB0cnVlO1xuXHR0cnkge1xuXHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRcdHRocmV3ID0gZmFsc2U7XG5cdH0gZmluYWxseSB7XG5cdFx0aWYodGhyZXcpIGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbl9fd2VicGFja19yZXF1aXJlX18uYyA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzIGFuZCBzaWJsaW5nIGNodW5rcyBmb3IgdGhlIGVudHJ5cG9pbnRcbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gdW5kZWZpbmVkO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIGNodW5rTWFwcGluZyA9IHt9O1xudmFyIGlkVG9FeHRlcm5hbEFuZE5hbWVNYXBwaW5nID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYucmVtb3RlcyA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY2h1bmtNYXBwaW5nLCBjaHVua0lkKSkge1xuXHRcdGNodW5rTWFwcGluZ1tjaHVua0lkXS5mb3JFYWNoKChpZCkgPT4ge1xuXHRcdFx0dmFyIGdldFNjb3BlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5SO1xuXHRcdFx0aWYoIWdldFNjb3BlKSBnZXRTY29wZSA9IFtdO1xuXHRcdFx0dmFyIGRhdGEgPSBpZFRvRXh0ZXJuYWxBbmROYW1lTWFwcGluZ1tpZF07XG5cdFx0XHRpZihnZXRTY29wZS5pbmRleE9mKGRhdGEpID49IDApIHJldHVybjtcblx0XHRcdGdldFNjb3BlLnB1c2goZGF0YSk7XG5cdFx0XHRpZihkYXRhLnApIHJldHVybiBwcm9taXNlcy5wdXNoKGRhdGEucCk7XG5cdFx0XHR2YXIgb25FcnJvciA9IChlcnJvcikgPT4ge1xuXHRcdFx0XHRpZighZXJyb3IpIGVycm9yID0gbmV3IEVycm9yKFwiQ29udGFpbmVyIG1pc3NpbmdcIik7XG5cdFx0XHRcdGlmKHR5cGVvZiBlcnJvci5tZXNzYWdlID09PSBcInN0cmluZ1wiKVxuXHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgKz0gJ1xcbndoaWxlIGxvYWRpbmcgXCInICsgZGF0YVsxXSArICdcIiBmcm9tICcgKyBkYXRhWzJdO1xuXHRcdFx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW2lkXSA9ICgpID0+IHtcblx0XHRcdFx0XHR0aHJvdyBlcnJvcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRkYXRhLnAgPSAwO1xuXHRcdFx0fTtcblx0XHRcdHZhciBoYW5kbGVGdW5jdGlvbiA9IChmbiwgYXJnMSwgYXJnMiwgZCwgbmV4dCwgZmlyc3QpID0+IHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IGZuKGFyZzEsIGFyZzIpO1xuXHRcdFx0XHRcdGlmKHByb21pc2UgJiYgcHJvbWlzZS50aGVuKSB7XG5cdFx0XHRcdFx0XHR2YXIgcCA9IHByb21pc2UudGhlbigocmVzdWx0KSA9PiAobmV4dChyZXN1bHQsIGQpKSwgb25FcnJvcik7XG5cdFx0XHRcdFx0XHRpZihmaXJzdCkgcHJvbWlzZXMucHVzaChkYXRhLnAgPSBwKTsgZWxzZSByZXR1cm4gcDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG5leHQocHJvbWlzZSwgZCwgZmlyc3QpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaChlcnJvcikge1xuXHRcdFx0XHRcdG9uRXJyb3IoZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR2YXIgb25FeHRlcm5hbCA9IChleHRlcm5hbCwgXywgZmlyc3QpID0+IChleHRlcm5hbCA/IGhhbmRsZUZ1bmN0aW9uKF9fd2VicGFja19yZXF1aXJlX18uSSwgZGF0YVswXSwgMCwgZXh0ZXJuYWwsIG9uSW5pdGlhbGl6ZWQsIGZpcnN0KSA6IG9uRXJyb3IoKSk7XG5cdFx0XHR2YXIgb25Jbml0aWFsaXplZCA9IChfLCBleHRlcm5hbCwgZmlyc3QpID0+IChoYW5kbGVGdW5jdGlvbihleHRlcm5hbC5nZXQsIGRhdGFbMV0sIGdldFNjb3BlLCAwLCBvbkZhY3RvcnksIGZpcnN0KSk7XG5cdFx0XHR2YXIgb25GYWN0b3J5ID0gKGZhY3RvcnkpID0+IHtcblx0XHRcdFx0ZGF0YS5wID0gMTtcblx0XHRcdFx0X193ZWJwYWNrX21vZHVsZXNfX1tpZF0gPSAobW9kdWxlKSA9PiB7XG5cdFx0XHRcdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRoYW5kbGVGdW5jdGlvbihfX3dlYnBhY2tfcmVxdWlyZV9fLCBkYXRhWzJdLCAwLCAwLCBvbkV4dGVybmFsLCAxKTtcblx0XHR9KTtcblx0fVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uUyA9IHt9O1xudmFyIGluaXRQcm9taXNlcyA9IHt9O1xudmFyIGluaXRUb2tlbnMgPSB7fTtcbl9fd2VicGFja19yZXF1aXJlX18uSSA9IChuYW1lLCBpbml0U2NvcGUpID0+IHtcblx0aWYoIWluaXRTY29wZSkgaW5pdFNjb3BlID0gW107XG5cdC8vIGhhbmRsaW5nIGNpcmN1bGFyIGluaXQgY2FsbHNcblx0dmFyIGluaXRUb2tlbiA9IGluaXRUb2tlbnNbbmFtZV07XG5cdGlmKCFpbml0VG9rZW4pIGluaXRUb2tlbiA9IGluaXRUb2tlbnNbbmFtZV0gPSB7fTtcblx0aWYoaW5pdFNjb3BlLmluZGV4T2YoaW5pdFRva2VuKSA+PSAwKSByZXR1cm47XG5cdGluaXRTY29wZS5wdXNoKGluaXRUb2tlbik7XG5cdC8vIG9ubHkgcnVucyBvbmNlXG5cdGlmKGluaXRQcm9taXNlc1tuYW1lXSkgcmV0dXJuIGluaXRQcm9taXNlc1tuYW1lXTtcblx0Ly8gY3JlYXRlcyBhIG5ldyBzaGFyZSBzY29wZSBpZiBuZWVkZWRcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhfX3dlYnBhY2tfcmVxdWlyZV9fLlMsIG5hbWUpKSBfX3dlYnBhY2tfcmVxdWlyZV9fLlNbbmFtZV0gPSB7fTtcblx0Ly8gcnVucyBhbGwgaW5pdCBzbmlwcGV0cyBmcm9tIGFsbCBtb2R1bGVzIHJlYWNoYWJsZVxuXHR2YXIgc2NvcGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLlNbbmFtZV07XG5cdHZhciB3YXJuID0gKG1zZykgPT4gKHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiICYmIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4obXNnKSk7XG5cdHZhciB1bmlxdWVOYW1lID0gXCJzYXR5YW1cIjtcblx0dmFyIHJlZ2lzdGVyID0gKG5hbWUsIHZlcnNpb24sIGZhY3RvcnksIGVhZ2VyKSA9PiB7XG5cdFx0dmFyIHZlcnNpb25zID0gc2NvcGVbbmFtZV0gPSBzY29wZVtuYW1lXSB8fCB7fTtcblx0XHR2YXIgYWN0aXZlVmVyc2lvbiA9IHZlcnNpb25zW3ZlcnNpb25dO1xuXHRcdGlmKCFhY3RpdmVWZXJzaW9uIHx8ICghYWN0aXZlVmVyc2lvbi5sb2FkZWQgJiYgKCFlYWdlciAhPSAhYWN0aXZlVmVyc2lvbi5lYWdlciA/IGVhZ2VyIDogdW5pcXVlTmFtZSA+IGFjdGl2ZVZlcnNpb24uZnJvbSkpKSB2ZXJzaW9uc1t2ZXJzaW9uXSA9IHsgZ2V0OiBmYWN0b3J5LCBmcm9tOiB1bmlxdWVOYW1lLCBlYWdlcjogISFlYWdlciB9O1xuXHR9O1xuXHR2YXIgaW5pdEV4dGVybmFsID0gKGlkKSA9PiB7XG5cdFx0dmFyIGhhbmRsZUVycm9yID0gKGVycikgPT4gKHdhcm4oXCJJbml0aWFsaXphdGlvbiBvZiBzaGFyaW5nIGV4dGVybmFsIGZhaWxlZDogXCIgKyBlcnIpKTtcblx0XHR0cnkge1xuXHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHRcdFx0aWYoIW1vZHVsZSkgcmV0dXJuO1xuXHRcdFx0dmFyIGluaXRGbiA9IChtb2R1bGUpID0+IChtb2R1bGUgJiYgbW9kdWxlLmluaXQgJiYgbW9kdWxlLmluaXQoX193ZWJwYWNrX3JlcXVpcmVfXy5TW25hbWVdLCBpbml0U2NvcGUpKVxuXHRcdFx0aWYobW9kdWxlLnRoZW4pIHJldHVybiBwcm9taXNlcy5wdXNoKG1vZHVsZS50aGVuKGluaXRGbiwgaGFuZGxlRXJyb3IpKTtcblx0XHRcdHZhciBpbml0UmVzdWx0ID0gaW5pdEZuKG1vZHVsZSk7XG5cdFx0XHRpZihpbml0UmVzdWx0ICYmIGluaXRSZXN1bHQudGhlbikgcmV0dXJuIHByb21pc2VzLnB1c2goaW5pdFJlc3VsdC5jYXRjaChoYW5kbGVFcnJvcikpO1xuXHRcdH0gY2F0Y2goZXJyKSB7IGhhbmRsZUVycm9yKGVycik7IH1cblx0fVxuXHR2YXIgcHJvbWlzZXMgPSBbXTtcblx0c3dpdGNoKG5hbWUpIHtcblx0fVxuXHRpZighcHJvbWlzZXMubGVuZ3RoKSByZXR1cm4gaW5pdFByb21pc2VzW25hbWVdID0gMTtcblx0cmV0dXJuIGluaXRQcm9taXNlc1tuYW1lXSA9IFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IChpbml0UHJvbWlzZXNbbmFtZV0gPSAxKSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uWCA9IChyZXN1bHQsIGNodW5rSWRzLCBmbikgPT4ge1xuXHQvLyBhcmd1bWVudHM6IGNodW5rSWRzLCBtb2R1bGVJZCBhcmUgZGVwcmVjYXRlZFxuXHR2YXIgbW9kdWxlSWQgPSBjaHVua0lkcztcblx0aWYoIWZuKSBjaHVua0lkcyA9IHJlc3VsdCwgZm4gPSAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBtb2R1bGVJZCkpO1xuXHRjaHVua0lkcy5tYXAoX193ZWJwYWNrX3JlcXVpcmVfXy5lLCBfX3dlYnBhY2tfcmVxdWlyZV9fKVxuXHR2YXIgciA9IGZuKCk7XG5cdHJldHVybiByID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiByO1xufSIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3Ncbi8vIFwiMVwiIG1lYW5zIFwibG9hZGVkXCIsIG90aGVyd2lzZSBub3QgbG9hZGVkIHlldFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJ3ZWJwYWNrLXJ1bnRpbWVcIjogMVxufTtcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG52YXIgaW5zdGFsbENodW5rID0gKGNodW5rKSA9PiB7XG5cdHZhciBtb3JlTW9kdWxlcyA9IGNodW5rLm1vZHVsZXMsIGNodW5rSWRzID0gY2h1bmsuaWRzLCBydW50aW1lID0gY2h1bmsucnVudGltZTtcblx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspXG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDE7XG5cbn07XG5cbi8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYucmVxdWlyZSA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHQvLyBcIjFcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcblx0aWYoIWluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdGlmKFwid2VicGFjay1ydW50aW1lXCIgIT0gY2h1bmtJZCkge1xuXHRcdFx0aW5zdGFsbENodW5rKHJlcXVpcmUoXCIuL1wiICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpKSk7XG5cdFx0fSBlbHNlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDE7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXztcbl9fd2VicGFja19yZXF1aXJlX18uQyA9IGluc3RhbGxDaHVuaztcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdCIsIiIsIi8vIG1vZHVsZSBjYWNoZSBhcmUgdXNlZCBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9