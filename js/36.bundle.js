(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/is.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/is.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\"data\":{\"categories\":{\"cardinal\":[\"one\",\"other\"],\"ordinal\":[\"other\"]},\"fn\":function(n, ord) {\n  var s = String(n).split('.'), i = s[0], t0 = Number(s[0]) == n, i10 = i.slice(-1), i100 = i.slice(-2);\n  if (ord) return 'other';\n  return t0 && i10 == 1 && i100 != 11 || !t0 ? 'one' : 'other';\n}},\"locale\":\"is\"})\n}\n\n\n//# sourceURL=webpack:///./node_modules/@formatjs/intl-pluralrules/locale-data/is.js?");

/***/ })

}]);