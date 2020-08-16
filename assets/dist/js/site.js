"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function pxToInt(pixelString) {
  return parseInt(pixelString.replace('px', ''));
}

var animateProperty = /*#__PURE__*/function () {
  _createClass(animateProperty, [{
    key: "animate",
    value: function animate(step, target) {
      var _this = this;

      if (!this.isAnimating) {
        var frame = function frame() {
          propertyValue += step;
          this.element.style[this.property] = propertyValue + 'px';

          if (condition()) {
            this.element.style[this.property] = target + 'px';
            clearInterval(animation);
            this.isAnimating = false;
          }
        };

        this.isAnimating = true;
        var propertyValue = pxToInt(this.element.style[this.property]);
        var condition;

        if (target > propertyValue) {
          condition = function condition() {
            return pxToInt(_this.element.style[_this.property]) >= target;
          };

          step *= -1;
        } else {
          condition = function condition() {
            return pxToInt(_this.element.style[_this.property]) <= target;
          };
        }

        var animation = setInterval(frame.bind(this), 10);
      }
    }
  }]);

  function animateProperty(element, property) {
    _classCallCheck(this, animateProperty);

    this.isAnimating = false;
    this.element = element;
    this.property = property;
  }

  return animateProperty;
}();

function menus() {
  function slideMenu(containerID, buttonID, linksID) {
    var openHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var container = document.getElementById(containerID);
    var button = document.getElementById(buttonID);
    var links = document.getElementById(linksID);

    if (container && button && links) {
      var setTabbing = function setTabbing(tabIndex) {
        linkArray.forEach(function (link) {
          link.setAttribute('tabindex', tabIndex);
        });
      };

      var openMenu = function openMenu() {
        menuAnimation.animate(interval, openHeight);
        button.setAttribute('aria-expanded', 'true');
        setTabbing('0');
      };

      var closeMenu = function closeMenu() {
        menuAnimation.animate(interval, closeHeight);
        button.setAttribute('aria-expanded', 'false');
        setTabbing('-1');
      };

      var closeHeight = -links.clientHeight + openHeight;

      var linkArray = _toConsumableArray(links.querySelectorAll('.link-list__item a'));

      var menuAnimation = new animateProperty(links, 'marginTop');
      setTabbing('-1');
      links.style.marginTop = closeHeight + 'px';
      var frameCount = 30;
      var interval = closeHeight / frameCount;
      closeMenu();

      button.onclick = function () {
        if (button.getAttribute('aria-expanded') == "true") {
          closeMenu();
        } else {
          openMenu();
        }
      };

      document.addEventListener('click', function () {
        if (!container.contains(event.target)) {
          closeMenu();
        }
      });
    }
  }

  slideMenu('js-main-nav', 'js-burger-menu', 'js-burger-menu__links', -7);
  slideMenu('js-main-nav', 'js-settings-menu', 'js-settings-menu__links', -1);
}

menus();