import {getAbility} from './abilities'
import images from '../images'

const REG_ABILITY = /\[\[([!\u4e00-\u9fa5|\w\d{}／]+)]]/i;
const REG_ITALIC = /@(.+)@/;
const REG_COMMENT = /#(.+)#/;
const REG_COST = /{([\d\w]+)}/g;
const REG_STYLE = /^\((.+)\)/;

const ITALIC_TAG = '<span class="italic">%0</span>'
const SPLIT_LINE_TAG = '<div class="flavor-split-line"></div>'
const COMMENT_TAG = '<div class="flavor">%0</div>'

const STYLE_MAP = {
  '-': ['smaller'],
  '_': ['smaller-plus'],
  '=': ['align-center'],
  '>': ['align-right'],
}

class ENode {
  constructor (tag, content) {
    this.tag = tag
    this.content = content
    this.classList = []
    this.type = 'normal'
  }

  addClass (...cls) {
    this.classList.push(...cls)
    return this
  }

  toText () {
    return `<${this.tag} class="${this.classList.join(' ')}">${this.content}</${this.tag}>`
  }
}

function toNode (t) {
  return new ENode('div', t)
}

function matchStyle (node) {
  while (STYLE_MAP[node.content[0]]) {
    node.addClass(...STYLE_MAP[node.content[0]])
    node.content = node.content.slice(1)
  }
  return node
}

function matchAbility (node) {
  const line = node.content
  const result = line.match(REG_ABILITY);
  if (!result)
    return node;
  let [name, ...params] = result[1].split('|');
  let shorty = name[0] === '!';
  if (shorty)
    name = name.slice(1);

  const ability = getAbility(name);
  if (!ability)
    return node;

  const transform = ability.transform(ability.lang, params, shorty);
  node.content = line.replace(result[0], transform);
  return node
}

function matchItalic (node) {
  let line = node.content
  const result = line.match(REG_ITALIC);
  if (result)
    line = line.replace(result[0], ITALIC_TAG.format(result[1]));
  node.content = line
  return node
}

function matchComment (node, idx, list) {
  let line = node.content
  const result = line.match(REG_COMMENT);
  if (result) {
    line = line.replace(result[0], COMMENT_TAG.format(result[1]));
    if (idx > 0) {
      line = SPLIT_LINE_TAG + line
    }
  }
  node.content = line
  return node
}

function matchCost (node) {
  let line = node.content
  const result = line.match(REG_COST);
  if (!result)
    return node;

  const IMG = '<img src="%0" class="%1"/>';
  result.forEach(short => {
    const img_name = short.toLowerCase().slice(1, short.length - 1);
    if (images['mana'][img_name]) {
      let clazz = 'mana-normal'
      if (img_name.match(/^[2wubrg][wubrgp]$/)) {
        clazz = 'mana-large'
      }

      line = line.replace(short, IMG.format(images['mana'][img_name], clazz));
    }
  });
  node.content = line
  return node;
}

export default function (origin) {
  return origin
    .split('\n').map(toNode)
    .map(matchStyle)
    .map(matchAbility)
    .map(matchItalic)
    .map(matchComment)
    .map(matchCost)
    .map((node) => {
      node.content = node.content.replace('\\n', '<br>')
      return node
    })
    .map(node => node.toText())
    .join('')
}
