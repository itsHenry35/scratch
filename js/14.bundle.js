(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/ca.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/ca.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\"data\":{\"categories\":{\"cardinal\":[\"one\",\"other\"],\"ordinal\":[\"one\",\"two\",\"few\",\"other\"]},\"fn\":function(n, ord) {\n  var s = String(n).split('.'), v0 = !s[1];\n  if (ord) return (n == 1 || n == 3) ? 'one'\n    : n == 2 ? 'two'\n    : n == 4 ? 'few'\n    : 'other';\n  return n == 1 && v0 ? 'one' : 'other';\n}},\"locale\":\"ca\"})\n}\n\n\n//# sourceURL=webpack:///./node_modules/@formatjs/intl-pluralrules/locale-data/ca.js?");

/***/ })

}]);