(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/ru.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/ru.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\"data\":{\"categories\":{\"cardinal\":[\"one\",\"few\",\"many\",\"other\"],\"ordinal\":[\"other\"]},\"fn\":function(n, ord) {\n  var s = String(n).split('.'), i = s[0], v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2);\n  if (ord) return 'other';\n  return v0 && i10 == 1 && i100 != 11 ? 'one'\n    : v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12 || i100 > 14) ? 'few'\n    : v0 && i10 == 0 || v0 && (i10 >= 5 && i10 <= 9) || v0 && (i100 >= 11 && i100 <= 14) ? 'many'\n    : 'other';\n}},\"locale\":\"ru\"})\n}\n\n\n//# sourceURL=webpack:///./node_modules/@formatjs/intl-pluralrules/locale-data/ru.js?");

/***/ })

}]);