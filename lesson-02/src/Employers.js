"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Employers =
/*#__PURE__*/
function () {
  function Employers(employersList) {
    _classCallCheck(this, Employers);

    this.employersList = employersList;
  }

  _createClass(Employers, [{
    key: "sort",
    value: function sort() {
      this.employersList = this.employersList.filter(function (name) {
        return name.length > 0;
      }).map(function (name) {
        return name.toLowerCase().trim();
      });
      return this.employersList;
    }
  }]);

  return Employers;
}();

var _default = Employers;
exports.default = _default;