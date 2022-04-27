(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/or.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/or.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\"data\":{\"categories\":{\"cardinal\":[\"one\",\"other\"],\"ordinal\":[\"one\",\"two\",\"few\",\"many\",\"other\"]},\"fn\":function(n, ord) {\n  var s = String(n).split('.'), t0 = Number(s[0]) == n;\n  if (ord) return (n == 1 || n == 5 || (t0 && n >= 7 && n <= 9)) ? 'one'\n    : (n == 2 || n == 3) ? 'two'\n    : n == 4 ? 'few'\n    : n == 6 ? 'many'\n    : 'other';\n  return n == 1 ? 'one' : 'other';\n}},\"locale\":\"or\"})\n}\n\n\n//# sourceURL=webpack:///./node_modules/@formatjs/intl-pluralrules/locale-data/or.js?");

/***/ })

}]);