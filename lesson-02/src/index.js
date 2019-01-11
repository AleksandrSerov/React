"use strict";

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.reflect.construct");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

var _Employers = require("./Employers");

var _Money = require("./Money");

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MakeBusiness =
/*#__PURE__*/
function () {
  function MakeBusiness(owner) {
    var director = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Victor';
    var cash = arguments.length > 2 ? arguments[2] : undefined;
    var emp = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, MakeBusiness);

    this.owner = owner;
    this.director = director;
    this.cash = cash;
    this.emp = emp;
  }

  _createClass(MakeBusiness, [{
    key: "showInfo",
    value: function showInfo() {
      var _console;

      var sumSponsors = [].concat(_toConsumableArray(_Money.sponsors.eu), _toConsumableArray(_Money.sponsors.rus), ['unexpected sponsor']);
      console.log("We have a business. Owner: ".concat(this.owner, ", director: ").concat(this.director, ". Our budget: ").concat(this.cash, ". And our employers: ").concat(this.emp));
      console.log('And we have a sponsors: ');

      (_console = console).log.apply(_console, _toConsumableArray(sumSponsors));

      console.log("Note. Be careful with ".concat(_Money.sponsors.eu[0], ". It's a huge risk."));
    }
  }]);

  return MakeBusiness;
}();

var business = _construct(MakeBusiness, ['Sam', null, _Money.money, _Employers.employersNames]);

business.showInfo();