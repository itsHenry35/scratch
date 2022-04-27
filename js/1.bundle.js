(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/en.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/en.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\"data\":{\"categories\":{\"cardinal\":[\"one\",\"other\"],\"ordinal\":[\"one\",\"two\",\"few\",\"other\"]},\"fn\":function(n, ord) {\n  var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);\n  if (ord) return n10 == 1 && n100 != 11 ? 'one'\n    : n10 == 2 && n100 != 12 ? 'two'\n    : n10 == 3 && n100 != 13 ? 'few'\n    : 'other';\n  return n == 1 && v0 ? 'one' : 'other';\n}},\"locale\":\"en\"})\n}\n\n\n//# sourceURL=webpack:///./node_modules/@formatjs/intl-pluralrules/locale-data/en.js?");

/***/ })

}]);