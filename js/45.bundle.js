(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/lv.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/lv.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\"data\":{\"categories\":{\"cardinal\":[\"zero\",\"one\",\"other\"],\"ordinal\":[\"other\"]},\"fn\":function(n, ord) {\n  var s = String(n).split('.'), f = s[1] || '', v = f.length, t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2), f100 = f.slice(-2), f10 = f.slice(-1);\n  if (ord) return 'other';\n  return t0 && n10 == 0 || (n100 >= 11 && n100 <= 19) || v == 2 && (f100 >= 11 && f100 <= 19) ? 'zero'\n    : n10 == 1 && n100 != 11 || v == 2 && f10 == 1 && f100 != 11 || v != 2 && f10 == 1 ? 'one'\n    : 'other';\n}},\"locale\":\"lv\"})\n}\n\n\n//# sourceURL=webpack:///./node_modules/@formatjs/intl-pluralrules/locale-data/lv.js?");

/***/ })

}]);