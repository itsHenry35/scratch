(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/ka.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/ka.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\"data\":{\"categories\":{\"cardinal\":[\"one\",\"other\"],\"ordinal\":[\"one\",\"many\",\"other\"]},\"fn\":function(n, ord) {\n  var s = String(n).split('.'), i = s[0], i100 = i.slice(-2);\n  if (ord) return i == 1 ? 'one'\n    : i == 0 || ((i100 >= 2 && i100 <= 20) || i100 == 40 || i100 == 60 || i100 == 80) ? 'many'\n    : 'other';\n  return n == 1 ? 'one' : 'other';\n}},\"locale\":\"ka\"})\n}\n\n\n//# sourceURL=webpack:///./node_modules/@formatjs/intl-pluralrules/locale-data/ka.js?");

/***/ })

}]);