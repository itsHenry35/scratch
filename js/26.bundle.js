(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/fr.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/fr.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\"data\":{\"categories\":{\"cardinal\":[\"one\",\"many\",\"other\"],\"ordinal\":[\"one\",\"other\"]},\"fn\":function(n, ord) {\n  var _n = String(n), se = _n.split(/[ce]/), e = se[1] || 0, c = e, s = String(e ? Number(se[0]) * Math.pow(10, e) : _n).split(\".\"), i = s[0], v0 = !s[1], i1000000 = i.slice(-6);\n  if (ord) return n == 1 ? 'one' : 'other';\n  return n >= 0 && n < 2 ? 'one'\n    : e == 0 && i != 0 && i1000000 == 0 && v0 || (e < 0 || e > 5) ? 'many'\n    : 'other';\n}},\"locale\":\"fr\"})\n}\n\n\n//# sourceURL=webpack:///./node_modules/@formatjs/intl-pluralrules/locale-data/fr.js?");

/***/ })

}]);