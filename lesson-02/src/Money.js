"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sponsors = exports.money = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
exports.sponsors = sponsors;

var calcCash = function calcCash() {
  var own = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  for (var _len = arguments.length, everyCash = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    everyCash[_key - 1] = arguments[_key];
  }

  var _everyCash = everyCash;

  var _everyCash2 = _slicedToArray(_everyCash, 1);

  everyCash = _everyCash2[0];
  var total = everyCash.reduce(function (total, currentValue) {
    return total + currentValue;
  }) + own;
  return total;
};

var money = calcCash(null, sponsors.cash);
exports.money = money;