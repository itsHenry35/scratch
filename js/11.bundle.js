(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/be.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/be.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\"data\":{\"categories\":{\"cardinal\":[\"one\",\"few\",\"many\",\"other\"],\"ordinal\":[\"few\",\"other\"]},\"fn\":function(n, ord) {\n  var s = String(n).split('.'), t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);\n  if (ord) return (n10 == 2 || n10 == 3) && n100 != 12 && n100 != 13 ? 'few' : 'other';\n  return n10 == 1 && n100 != 11 ? 'one'\n    : (n10 >= 2 && n10 <= 4) && (n100 < 12 || n100 > 14) ? 'few'\n    : t0 && n10 == 0 || (n10 >= 5 && n10 <= 9) || (n100 >= 11 && n100 <= 14) ? 'many'\n    : 'other';\n}},\"locale\":\"be\"})\n}\n\n\n//# sourceURL=webpack:///./node_modules/@formatjs/intl-pluralrules/locale-data/be.js?");

/***/ })

}]);