"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function toggleAttribute(element, attribute) {
  element.setAttribute(attribute, !(element.getAttribute(attribute) == "true"));
}

function ariaExpandOnClick(element) {
  element.setAttribute('aria-expanded', 'false');

  element.onclick = function () {
    toggleAttribute(element, 'aria-expanded');
  };
} // Burger Menu


var mainNav = document.getElementById('js-main-nav');
var burgerMenu = document.getElementById('js-burger-menu');

if (mainNav && burgerMenu) {
  ariaExpandOnClick(burgerMenu);

  document.onclick = function (event) {
    if (!mainNav.contains(event.target)) {
      burgerMenu.setAttribute('aria-expanded', 'false');
    }
  };
} // Accordions


var accordions = _toConsumableArray(document.getElementsByClassName('js-accordion'));

accordions.forEach(function (accordion) {
  ariaExpandOnClick(accordion);
});