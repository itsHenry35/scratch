(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/ro.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/ro.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\"data\":{\"categories\":{\"cardinal\":[\"one\",\"few\",\"other\"],\"ordinal\":[\"one\",\"other\"]},\"fn\":function(n, ord) {\n  var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n, n100 = t0 && s[0].slice(-2);\n  if (ord) return n == 1 ? 'one' : 'other';\n  return n == 1 && v0 ? 'one'\n    : !v0 || n == 0 || (n100 >= 2 && n100 <= 19) ? 'few'\n    : 'other';\n}},\"locale\":\"ro\"})\n}\n\n\n//# sourceURL=webpack:///./node_modules/@formatjs/intl-pluralrules/locale-data/ro.js?");

/***/ })

}]);