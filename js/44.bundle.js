(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/lt.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/lt.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\"data\":{\"categories\":{\"cardinal\":[\"one\",\"few\",\"many\",\"other\"],\"ordinal\":[\"other\"]},\"fn\":function(n, ord) {\n  var s = String(n).split('.'), f = s[1] || '', t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);\n  if (ord) return 'other';\n  return n10 == 1 && (n100 < 11 || n100 > 19) ? 'one'\n    : (n10 >= 2 && n10 <= 9) && (n100 < 11 || n100 > 19) ? 'few'\n    : f != 0 ? 'many'\n    : 'other';\n}},\"locale\":\"lt\"})\n}\n\n\n//# sourceURL=webpack:///./node_modules/@formatjs/intl-pluralrules/locale-data/lt.js?");

/***/ })

}]);