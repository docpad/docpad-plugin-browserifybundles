(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
// Generated by CoffeeScript 1.7.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  module.exports.extendOnClass = function(proto) {
    var key, klass, value;
    klass = (function(_super) {
      __extends(_Class, _super);

      function _Class() {
        if (proto != null ? proto.hasOwnProperty('constructor') : void 0) {
          proto.constructor.apply(this, arguments);
        } else {
          _Class.__super__.constructor.apply(this, arguments);
        }
      }

      return _Class;

    })(this);
    if (proto != null) {
      for (key in proto) {
        if (!__hasProp.call(proto, key)) continue;
        value = proto[key];
        klass.prototype[key] = value;
      }
    }
    return klass;
  };

}).call(this);

},{}],3:[function(require,module,exports){
// Generated by CoffeeScript 1.6.3
(function() {
  var $, View, extendOnClass,
    __hasProp = {}.hasOwnProperty;

  $ = this.$ || (typeof window !== "undefined" && window !== null ? window.$ : void 0) || ((function() {
    try {
      return typeof require === "function" ? require('jquery') : void 0;
    } catch (_error) {}
  })());

  extendOnClass = require('extendonclass').extendOnClass;

  View = (function() {
    View.extend = extendOnClass;

    View.prototype.events = null;

    View.prototype.elements = null;

    View.prototype.el = null;

    View.prototype.$el = null;

    function View(opts) {
      this.events = this.events ? JSON.parse(JSON.stringify(this.events)) : {};
      this.elements = this.elements ? JSON.parse(JSON.stringify(this.elements)) : {};
      this.setConfig(opts);
      this.refreshElement();
      this.refreshElements();
      this.refreshEvents();
      this;
    }

    View.prototype.setConfig = function(opts) {
      var key, value;
      if (opts == null) {
        opts = {};
      }
      for (key in opts) {
        if (!__hasProp.call(opts, key)) continue;
        value = opts[key];
        this[key] = value;
      }
      return this;
    };

    View.prototype.refreshElement = function(el) {
      if (el == null) {
        el = null;
      }
      this.el = el != null ? el : this.el;
      this.$el = $(this.el);
      this.el = this.$el.get(0);
      return this;
    };

    View.prototype.refreshElements = function() {
      var elementName, selector, _ref;
      _ref = this.elements;
      for (selector in _ref) {
        if (!__hasProp.call(_ref, selector)) continue;
        elementName = _ref[selector];
        this[elementName] = $(selector, this.$el);
      }
      return this;
    };

    View.prototype.refreshEvents = function(opts) {
      var eventMethod, eventName, key, methodName, selector, split, _ref;
      if (opts == null) {
        opts = {};
      }
      opts.detach = true;
      opts.attach = true;
      _ref = this.events;
      for (key in _ref) {
        if (!__hasProp.call(_ref, key)) continue;
        methodName = _ref[key];
        if (this[methodName].toString().indexOf('[native code]') === -1) {
          this[methodName] = this[methodName].bind(this);
        }
        split = key.indexOf(' ');
        eventName = key.substr(0, split);
        selector = key.substr(split + 1);
        eventMethod = this[methodName];
        if (opts.detach === true) {
          this.$el.off(eventName, selector, eventMethod);
        }
        if (opts.attach === true) {
          this.$el.on(eventName, selector, eventMethod);
        }
      }
      return this;
    };

    View.prototype.destroy = function() {
      this.refreshEvents({
        detach: true,
        attach: false
      });
      this.$el.remove();
      return this;
    };

    return View;

  })();

  module.exports = {
    View: View
  };

}).call(this);

},{"extendonclass":2,"jquery":1}],4:[function(require,module,exports){
// our code
var miniview = require('miniview');
},{"miniview":3}]},{},[4])