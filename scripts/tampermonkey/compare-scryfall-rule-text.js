// ==UserScript==
// @name         compare scryfall
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       pineapplebin
// @include      /^https:\/\/scryfall.com\/card\/[\d\w]+\/[\d\w]+\//
// @icon         https://www.google.com/s2/favicons?sz=64&domain=scryfall.com
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @connect      *
// ==/UserScript==

;(async function () {
  'use strict'

  GM_addStyle(
    '.pine-hint { background-color: #b80000; color: white; padding: 0 5px; } .pine-italic { font-style: italic; }'
  )

  function log(...args) {
    console.log('%c[monkey]', 'color:blue', ...args)
  }

  const reg = /^https:\/\/scryfall.com\/card\/([\d\w]+)\/([\d\w]+)\//
  const matched = location.href.match(reg)
  if (!matched) {
    return
  }
  log(matched)

  const [_, series, number] = matched

  // 请求 scryfall
  const res = await fetch(`https://api.scryfall.com/cards/${series}/${number}`)
  const data = await res.json()
  log(data)

  // 获得 printed text
  const promises = data.multiverse_ids.map((mid) => {
    return new Promise((resolve) => {
      GM_xmlhttpRequest({
        url: 'https://api.magicthegathering.io/v1/cards?multiverseid=' + mid,
        onload: (xmlres) => {
          resolve(JSON.parse(xmlres.response).cards[0])
        },
      })
    })
  })
  const list = await Promise.all(promises)
  log(list)

  // 对比，插入结果
  const parent = $('div.card-text')
  if (!parent.length) {
    return
  }
  const target = $(parent[0]).find('p.card-text-artist')[0]

  function buildText(text, type, showHint) {
    const container = document.createElement('div')
    container.className = 'card-text-box'
    const inner = document.createElement('div')
    inner.className = 'card-text-oracle'
    inner.innerHTML =
      `<pre>${type.toUpperCase()}:L <span class="pine-italic">${
        text.length
      }</span> ${showHint ? '<span class="pine-hint">DIFF</span>' : ''}</pre>` +
      text
        .split('\n')
        .map((line) => `<p>${line}</p>`)
        .join('')
    container.appendChild(inner)
    return container
  }

  log(target)
  target.parentNode.insertBefore(buildText(data.oracle_text, 'oracle'), target)
  target.parentNode.insertBefore(
    buildText(
      list[0].originalText,
      'printed',
      data.oracle_text.length !== list[0].originalText.length
    ),
    target
  )
})()
