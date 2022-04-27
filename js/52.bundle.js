(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/pl.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/pl.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\"data\":{\"categories\":{\"cardinal\":[\"one\",\"few\",\"many\",\"other\"],\"ordinal\":[\"other\"]},\"fn\":function(n, ord) {\n  var s = String(n).split('.'), i = s[0], v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2);\n  if (ord) return 'other';\n  return n == 1 && v0 ? 'one'\n    : v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12 || i100 > 14) ? 'few'\n    : v0 && i != 1 && (i10 == 0 || i10 == 1) || v0 && (i10 >= 5 && i10 <= 9) || v0 && (i100 >= 12 && i100 <= 14) ? 'many'\n    : 'other';\n}},\"locale\":\"pl\"})\n}\n\n\n//# sourceURL=webpack:///./node_modules/@formatjs/intl-pluralrules/locale-data/pl.js?");

/***/ })

}]);