(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/sk.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/sk.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\"data\":{\"categories\":{\"cardinal\":[\"one\",\"few\",\"many\",\"other\"],\"ordinal\":[\"other\"]},\"fn\":function(n, ord) {\n  var s = String(n).split('.'), i = s[0], v0 = !s[1];\n  if (ord) return 'other';\n  return n == 1 && v0 ? 'one'\n    : (i >= 2 && i <= 4) && v0 ? 'few'\n    : !v0 ? 'many'\n    : 'other';\n}},\"locale\":\"sk\"})\n}\n\n\n//# sourceURL=webpack:///./node_modules/@formatjs/intl-pluralrules/locale-data/sk.js?");

/***/ })

}]);