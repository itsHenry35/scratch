(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/he.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/he.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\"data\":{\"categories\":{\"cardinal\":[\"one\",\"two\",\"many\",\"other\"],\"ordinal\":[\"other\"]},\"fn\":function(n, ord) {\n  var s = String(n).split('.'), i = s[0], v0 = !s[1], t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1);\n  if (ord) return 'other';\n  return n == 1 && v0 ? 'one'\n    : i == 2 && v0 ? 'two'\n    : v0 && (n < 0 || n > 10) && t0 && n10 == 0 ? 'many'\n    : 'other';\n}},\"locale\":\"he\"})\n}\n\n\n//# sourceURL=webpack:///./node_modules/@formatjs/intl-pluralrules/locale-data/he.js?");

/***/ })

}]);