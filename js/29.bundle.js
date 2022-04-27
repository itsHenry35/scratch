(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/gd.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/gd.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\"data\":{\"categories\":{\"cardinal\":[\"one\",\"two\",\"few\",\"other\"],\"ordinal\":[\"one\",\"two\",\"few\",\"other\"]},\"fn\":function(n, ord) {\n  var s = String(n).split('.'), t0 = Number(s[0]) == n;\n  if (ord) return (n == 1 || n == 11) ? 'one'\n    : (n == 2 || n == 12) ? 'two'\n    : (n == 3 || n == 13) ? 'few'\n    : 'other';\n  return (n == 1 || n == 11) ? 'one'\n    : (n == 2 || n == 12) ? 'two'\n    : ((t0 && n >= 3 && n <= 10) || (t0 && n >= 13 && n <= 19)) ? 'few'\n    : 'other';\n}},\"locale\":\"gd\"})\n}\n\n\n//# sourceURL=webpack:///./node_modules/@formatjs/intl-pluralrules/locale-data/gd.js?");

/***/ })

}]);