"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function pxToInt(pixelString) {
  return parseInt(pixelString.replace('px', ''));
} // Slide menu


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

    var animateProperty = function animateProperty(element, property, step, target) {
      isAnimating = true;
      var propertyValue = pxToInt(element.style[property]);
      var condition;

      if (target > propertyValue) {
        condition = function condition() {
          return pxToInt(element.style[property]) >= target;
        };

        step *= -1;
      } else {
        condition = function condition() {
          return pxToInt(element.style[property]) <= target;
        };
      }

      var animation = setInterval(frame, 10);

      function frame() {
        propertyValue += step;
        element.style[property] = propertyValue + 'px';

        if (condition()) {
          element.style[property] = target + 'px';
          clearInterval(animation);
          isAnimating = false;
        }
      }
    };

    var openMenu = function openMenu() {
      if (!isAnimating) {
        animateProperty(links, 'marginTop', interval, openHeight);
        button.setAttribute('aria-expanded', 'true');
        setTabbing('0');
      }
    };

    var closeMenu = function closeMenu() {
      if (!isAnimating) {
        animateProperty(links, 'marginTop', interval, closeHeight);
        button.setAttribute('aria-expanded', 'false');
        setTabbing('-1');
      }
    };

    var closeHeight = -links.clientHeight + openHeight;

    var linkArray = _toConsumableArray(links.querySelectorAll('.link-list__item a'));

    var isAnimating = false;
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

slideMenu('js-main-nav', 'js-burger-menu', 'js-burger-menu__links', -3);
slideMenu('js-main-nav', 'js-settings-menu', 'js-settings-menu__links'); //////////////////////////////////////////////////////////////////////////////
// Accordions

function toggleAttribute(element, attribute) {
  element.setAttribute(attribute, !(element.getAttribute(attribute) == "true"));
}

function ariaExpandOnClick(element) {
  element.setAttribute('aria-expanded', 'false');

  element.onclick = function () {
    toggleAttribute(element, 'aria-expanded');
  };
}

var accordions = _toConsumableArray(document.getElementsByClassName('js-accordion'));

accordions.forEach(function (accordion) {
  ariaExpandOnClick(accordion);
});