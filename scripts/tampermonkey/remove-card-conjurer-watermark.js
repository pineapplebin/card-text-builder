// ==UserScript==
// @name         Remove watermark text
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://cardconjurer.com/creator/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cardconjurer.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  var methods = ['fillText', 'strokeText'];

  methods.forEach(key => {
      var old = CanvasRenderingContext2D.prototype[key]
      CanvasRenderingContext2D.prototype[key] = function (...args) {
          // console.log(key, args)
          var t = args[0]
          if (t == 'CardConjurer.com' || t == 'NOT' || t == 'FOR' || t == 'SALE') {
              return
          }
          return old.apply(this, args)
      }
  })

  // 重写全局函数
  var SETTINGS = {
      isOld8Th: false
  }
  if (typeof window.loadBottomInfo === 'function') {
      console.log('rewrite loadBottomInfo')
      var old_m = window.loadBottomInfo
      // 修改 8th 底部位置
      window.loadBottomInfo = function(textObjects) {
          if (typeof textObjects === 'object' && textObjects.top && textObjects.wizards) {
              if (textObjects.top.text === '{conditionalcolor:Black_Frame,Land_Frame,Colorless_Frame:white}￮ {elemidinfo-artist}') {
                  textObjects.top.y = 1920/2100
                  textObjects.wizards.y = 1984/2100
                  if (!SETTINGS.isOld8Th) {
                      textObjects.wizards.text = textObjects.wizards.text.replace('1993-', '').replace(', Inc.', '')
                  } else {
                      textObjects.wizards.text = textObjects.wizards.text.replace(', Inc.', ' LLC')
                  }
              }
          }
          return old_m.call(this, textObjects)
      }
  }

  // 插入按钮
  const tabs = document.querySelector('#creator-menu-tabs')
  console.log(tabs)
  if (tabs) {
      const h3 = document.createElement('h3')
      h3.className = 'selectable readable-background'
      h3.innerHTML = 'Change 8th'
      h3.onclick = function () {
          SETTINGS.isOld8Th = !SETTINGS.isOld8Th
      }
      tabs.appendChild(h3)
  }
})();
