// ==UserScript==
// @name         Remove watermark text
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       pineapplebin
// @match        https://cardconjurer.com/creator/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cardconjurer.com
// @grant        none
// ==/UserScript==

;(function () {
  'use strict'

  var methods = ['fillText', 'strokeText']

  methods.forEach((key) => {
    var old = CanvasRenderingContext2D.prototype[key]
    CanvasRenderingContext2D.prototype[key] = function (...args) {
      console.log(key, args)
      var t = args[0]
      if (t == 'CardConjurer.com' || t == 'NOT' || t == 'FOR' || t == 'SALE') {
        return
      }
      return old.apply(this, args)
    }
  })
})()
