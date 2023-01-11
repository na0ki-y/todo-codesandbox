// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

require("./styles.css");
var _console;
var onclickAdd = function onclickAdd() {
  // 取得と初期化
  var inputtext = document.getElementById("add-text").value; //取得
  document.getElementById("add-text").value = ""; //初期化
  // DOMを作成して差し込んでく
  //divの作成
  var div = document.createElement("div");
  div.className = "list-row";
  //li の作成
  var li = document.createElement("li");
  li.innerText = inputtext;
  //button(完了)  の作成
  var compbutton = document.createElement("button");
  compbutton.innerText = "完了";
  compbutton.addEventListener("click", function () {
    alert();
  });

  //button(削除)  の作成
  var delbutton = document.createElement("button");
  delbutton.innerText = "削除";
  delbutton.addEventListener("click", function () {
    //親のdivを削除する
    var deltaeget = delbutton.parentNode; //取得
    document.getElementById("inconp-list").removeChild(deltaeget); //親が入ってるlistからremove
  });

  //divの子要素にli,button
  div.appendChild(li);
  div.appendChild(compbutton);
  div.appendChild(delbutton);
  console.log(div);

  //inconp-listにdiv追加
  document.getElementById("inconp-list").appendChild(div);
};
// ボタンid(add_button)と関数を対応させる
document.getElementById("add-button").addEventListener("click", function () {
  return onclickAdd();
});

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
//   JSからも変更できる。
// </div>
// `;
var v = "1";
var var1 = "aaaa";
console.log(var1);
var name = "Alice";
var age = 20;
// テンプレート文字列
var m1 = "名前は" + name + "年齢は" + age;
console.log(m1);
var m2 = "\u540D\u524D\u306F".concat(name, "\u5E74\u9F62\u306F").concat(age);
console.log(m2);

// アロー関数

function func1(str) {
  return str;
}
var func11 = function func11(str) {
  return str;
};
console.log(func1("func1です"));
console.log(func11("func11です"));
var func2 = function func2(s) {
  return s;
};
console.log(func2("func2です"));
var add_my = function add_my(a, b) {
  return a + b;
};
console.log(add_my(10, 20));
var myprof = {
  name_ob: "Alce",
  age_ob: 90
};
console.log("\u540D\u524D\u306F".concat(myprof.name));
var name_ob = myprof.name_ob,
  age_ob = myprof.age_ob; //keyと同じ名前
console.log("\u540D\u524D\u306F".concat(name_ob, "\u5E74\u9F62\u306F").concat(age_ob));
var myporf2 = ["Alice", 99];
var name_l = myporf2[0],
  age_l = myporf2[1]; //順番に
console.log("\u540D\u524D\u306F".concat(name_l, "\u5E74\u9F62\u306F").concat(age_l));

//defalut

var print_name = function print_name() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "ゲスト";
  console.log("\u3053\u3093\u306B\u3061\u306F".concat(name));
};
print_name("Bob");
print_name();

//スプレッド
var arr1 = [10, 20];
console.log(arr1);
(_console = console).log.apply(_console, arr1); //展開

var sum_my = function sum_my(a, b) {
  console.log(a + b);
};
sum_my(10, 20);
sum_my.apply(void 0, arr1);
var arr2 = [1, 2, 3, 4, 5];
var c1 = arr2[0],
  c2 = arr2[1],
  c3 = arr2[2],
  c4 = arr2[3],
  c5 = arr2[4];
console.log(c1, c2, c3);
var cc1 = arr2[0],
  cc2 = arr2[1],
  cclist = arr2.slice(2); //まとめる　分割代入の結果を
console.log(cc1, cc2, cclist);
var arr4 = [10, 20];
var arr5 = [20, 40];
var arr6 = [].concat(arr4); //copy deep
var arr7 = [].concat(arr4, arr5); //copy deep
console.log(arr6);
console.log(arr7);

//map filter
var namearr = ["alice", "bob", "zoe"];
for (var i = 0; i < namearr.length; i++) {
  console.log(namearr[i]);
}
var namearr2 = namearr.map(function (name) {
  return name;
});
console.log(namearr2);
namearr.map(function (name, index) {
  console.log("".concat(index, " ").concat(name)); //第2引数がindex
});

var numarr = [1, 2, 3, 4, 5];
var numarr2 = numarr.filter(function (num) {
  return num % 2 == 0; //returnで条件を書く
});

console.log(numarr2);
var newNamearr = namearr.map(function (name) {
  if (name == "bob") {
    return name + "-san";
  } else {
    return name;
  }
});
console.log(newNamearr);

//3項演算子
var vval1 = 2000;
var vval2 = vval1 > 10 ? "true" : "false";
console.log(vval2);
console.log(vval1.toLocaleString());
var vval3 = "2000";
// const vval3 = 2000;
var check = typeof vval3 == "number" ? vval3.toLocaleString() : "数値を入力して";
console.log(check);
var checksum = function checksum(a, b) {
  return a + b > 100 ? "100\u3092\u8D85\u3048\u3066\u3044\u307E\u3059".concat(a + b) : "100\u3092\u8D85\u3048\u3066\u3044\u307E\u305B\u3093".concat(a + b);
};
console.log(checksum(10, 20));
console.log(checksum(90, 20));
var f1 = true;
var f2 = false;
if (f1 || f2) {
  console.log("または"); //または＝左がfalseのときに右を返す
}

if (f1 && f2) {
  console.log("かつ");
}
var f3 = null;
var fee = f3 || "未設定です"; //または＝左がfalseのときに右を返す
console.log(fee);
var f4 = 100;
var fee2 = f4 && "なにか設定"; //または＝左がTrueのときに右を返す
console.log(fee2);
},{"./styles.css":"src/styles.css"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "39363" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map