(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/ar.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/ar.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\"data\":{\"categories\":{\"cardinal\":[\"zero\",\"one\",\"two\",\"few\",\"many\",\"other\"],\"ordinal\":[\"other\"]},\"fn\":function(n, ord) {\n  var s = String(n).split('.'), t0 = Number(s[0]) == n, n100 = t0 && s[0].slice(-2);\n  if (ord) return 'other';\n  return n == 0 ? 'zero'\n    : n == 1 ? 'one'\n    : n == 2 ? 'two'\n    : (n100 >= 3 && n100 <= 10) ? 'few'\n    : (n100 >= 11 && n100 <= 99) ? 'many'\n    : 'other';\n}},\"locale\":\"ar\"})\n}\n\n\n//# sourceURL=webpack:///./node_modules/@formatjs/intl-pluralrules/locale-data/ar.js?");

/***/ })

}]);