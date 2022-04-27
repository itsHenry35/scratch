(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/sv.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/sv.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\"data\":{\"categories\":{\"cardinal\":[\"one\",\"other\"],\"ordinal\":[\"one\",\"other\"]},\"fn\":function(n, ord) {\n  var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);\n  if (ord) return (n10 == 1 || n10 == 2) && n100 != 11 && n100 != 12 ? 'one' : 'other';\n  return n == 1 && v0 ? 'one' : 'other';\n}},\"locale\":\"sv\"})\n}\n\n\n//# sourceURL=webpack:///./node_modules/@formatjs/intl-pluralrules/locale-data/sv.js?");

/***/ })

}]);