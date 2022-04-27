(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/kk.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/kk.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\"data\":{\"categories\":{\"cardinal\":[\"one\",\"other\"],\"ordinal\":[\"many\",\"other\"]},\"fn\":function(n, ord) {\n  var s = String(n).split('.'), t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1);\n  if (ord) return n10 == 6 || n10 == 9 || t0 && n10 == 0 && n != 0 ? 'many' : 'other';\n  return n == 1 ? 'one' : 'other';\n}},\"locale\":\"kk\"})\n}\n\n\n//# sourceURL=webpack:///./node_modules/@formatjs/intl-pluralrules/locale-data/kk.js?");

/***/ })

}]);