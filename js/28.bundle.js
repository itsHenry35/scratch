(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/ga.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/ga.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\"data\":{\"categories\":{\"cardinal\":[\"one\",\"two\",\"few\",\"many\",\"other\"],\"ordinal\":[\"one\",\"other\"]},\"fn\":function(n, ord) {\n  var s = String(n).split('.'), t0 = Number(s[0]) == n;\n  if (ord) return n == 1 ? 'one' : 'other';\n  return n == 1 ? 'one'\n    : n == 2 ? 'two'\n    : (t0 && n >= 3 && n <= 6) ? 'few'\n    : (t0 && n >= 7 && n <= 10) ? 'many'\n    : 'other';\n}},\"locale\":\"ga\"})\n}\n\n\n//# sourceURL=webpack:///./node_modules/@formatjs/intl-pluralrules/locale-data/ga.js?");

/***/ })

}]);