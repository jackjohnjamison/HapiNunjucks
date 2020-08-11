"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Burger Menu
var mainNav = document.getElementById('js-main-nav');
var burgerMenu = document.getElementById('js-burger-menu');
var menuLinks = mainNav.querySelector('.link-list');
console.log(mainNav, burgerMenu, menuLinks);

if (mainNav && burgerMenu && menuLinks) {
  var closeMenu = function closeMenu() {
    menuLinks.style.height = '0px';
    burgerMenu.setAttribute('aria-expanded', 'false');
    setTimeout(function () {
      menuLinks.style.display = 'none';
    }, 300);
  };

  var menuLinksOpenHeight = '176px'; //menuLinks.style.height

  menuLinks.style.display = 'none';
  menuLinks.style.height = '0px';
  menuLinks.style.display = 'block';
  burgerMenu.setAttribute('aria-expanded', 'false');

  burgerMenu.onclick = function () {
    if (burgerMenu.getAttribute('aria-expanded') == "true") {
      closeMenu();
    } else {
      menuLinks.style.display = 'block';
      burgerMenu.setAttribute('aria-expanded', 'true');
      menuLinks.style.height = menuLinksOpenHeight;
    }
  };

  document.onclick = function (event) {
    if (!mainNav.contains(event.target)) {
      closeMenu();
    }
  };
} // Accordions


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