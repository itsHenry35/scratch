(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/az.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/az.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\"data\":{\"categories\":{\"cardinal\":[\"one\",\"other\"],\"ordinal\":[\"one\",\"few\",\"many\",\"other\"]},\"fn\":function(n, ord) {\n  var s = String(n).split('.'), i = s[0], i10 = i.slice(-1), i100 = i.slice(-2), i1000 = i.slice(-3);\n  if (ord) return (i10 == 1 || i10 == 2 || i10 == 5 || i10 == 7 || i10 == 8) || (i100 == 20 || i100 == 50 || i100 == 70 || i100 == 80) ? 'one'\n    : (i10 == 3 || i10 == 4) || (i1000 == 100 || i1000 == 200 || i1000 == 300 || i1000 == 400 || i1000 == 500 || i1000 == 600 || i1000 == 700 || i1000 == 800 || i1000 == 900) ? 'few'\n    : i == 0 || i10 == 6 || (i100 == 40 || i100 == 60 || i100 == 90) ? 'many'\n    : 'other';\n  return n == 1 ? 'one' : 'other';\n}},\"locale\":\"az\"})\n}\n\n\n//# sourceURL=webpack:///./node_modules/@formatjs/intl-pluralrules/locale-data/az.js?");

/***/ })

}]);