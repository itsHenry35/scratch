(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/sl.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/sl.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\"data\":{\"categories\":{\"cardinal\":[\"one\",\"two\",\"few\",\"other\"],\"ordinal\":[\"other\"]},\"fn\":function(n, ord) {\n  var s = String(n).split('.'), i = s[0], v0 = !s[1], i100 = i.slice(-2);\n  if (ord) return 'other';\n  return v0 && i100 == 1 ? 'one'\n    : v0 && i100 == 2 ? 'two'\n    : v0 && (i100 == 3 || i100 == 4) || !v0 ? 'few'\n    : 'other';\n}},\"locale\":\"sl\"})\n}\n\n\n//# sourceURL=webpack:///./node_modules/@formatjs/intl-pluralrules/locale-data/sl.js?");

/***/ })

}]);