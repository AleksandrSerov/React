"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Money =
/*#__PURE__*/
function () {
  function Money(sponsors) {
    var own = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Money);

    this.sponsors = sponsors;
    this.own = own;

    for (var _len = arguments.length, everyCash = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      everyCash[_key - 2] = arguments[_key];
    }

    this.everyCash = everyCash;
  }

  _createClass(Money, [{
    key: "calcCash",
    value: function calcCash() {
      var _this$everyCash = _slicedToArray(this.everyCash, 1);

      this.everyCash = _this$everyCash[0];
      var total = this.everyCash.reduce(function (total, currentValue) {
        return total + currentValue;
      }) + this.own;
      return total;
    }
  }]);

  return Money;
}();

var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
var money = new Money(sponsors, null, sponsors.cash);
console.log(money.calcCash());
var _default = Money;
exports.default = _default;