(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/hr.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/hr.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\"data\":{\"categories\":{\"cardinal\":[\"one\",\"few\",\"other\"],\"ordinal\":[\"other\"]},\"fn\":function(n, ord) {\n  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2), f10 = f.slice(-1), f100 = f.slice(-2);\n  if (ord) return 'other';\n  return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one'\n    : v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12 || i100 > 14) || (f10 >= 2 && f10 <= 4) && (f100 < 12 || f100 > 14) ? 'few'\n    : 'other';\n}},\"locale\":\"hr\"})\n}\n\n\n//# sourceURL=webpack:///./node_modules/@formatjs/intl-pluralrules/locale-data/hr.js?");

/***/ })

}]);