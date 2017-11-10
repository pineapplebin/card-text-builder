import {getAbility} from './abilities'
import images from '../images'

const P_TAG = '<p class="render-line" style="%1">%0</p>';
const ITALIC_TAG = '<span style="font-style: italic;">%0</span>';
const COMMENT_TAG =
  '<span style="font-family: MPlantin, STKaiti, sans-serif; font-style: italic;">%0</span>';

const REG_ABILITY = /\[\[([!\u4e00-\u9fa5|\w\d{}／]+)]]/i;
const REG_ITALIC = /@(.+)@/;
const REG_COMMENT = /#(.+)#/;
const REG_COST = /{([\d\w]+)}/g;
const REG_STYLE = /^\((.+)\)/;

let line_style = {};
const STYLE_TABLE = {
  '-': {'font-size': '10pt', 'line-height': '14px'},
};
const NORMAL_LINE = {
  'line-height': '18px', 'margin': '3px 0'
};

function matchStyle(line, idx) {
  const result = line.match(REG_STYLE);
  if (result) {
    line_style[idx] = STYLE_TABLE[result[1]];
    line = line.replace(result[0], '');
  }
  return line;
}

function matchAbility(line) {
  const result = line.match(REG_ABILITY);
  if (!result)
    return line;
  let [name, ...params] = result[1].split('|');
  let shorty = name[0] === '!';
  if (shorty)
    name = name.slice(1);

  const ability = getAbility(name);
  if (!ability)
    return line;

  const transform = ability.transform(ability.lang, params, shorty);
  return line.replace(result[0], transform);
}

function matchItalic(line) {
  const result = line.match(REG_ITALIC);
  if (result)
    return line.replace(result[0], ITALIC_TAG.format(result[1]));
  else
    return line
}

function matchComment(line) {
  const result = line.match(REG_COMMENT);
  if (result)
    return line.replace(result[0], COMMENT_TAG.format(result[1]));
  else
    return line
}

function matchCost(line) {
  const result = line.match(REG_COST);
  if (!result)
    return line;

  const IMG = '<img src="%0" style="width: %1px; height: %1px; margin: %2; vertical-align: sub;"/>';
  result.forEach(short => {
    const img_name = short.toLowerCase().slice(1, short.length - 1);
    if (images['mana'][img_name]) {
      let size = 15;
      let margin = '0 1px 2px 1px';
      if (img_name.match(/^[2wubrg][wubrg]$/)) {
        size = 18;
        margin = '2px 1px 0 1px'
      }
      line = line.replace(short, IMG.format(images['mana'][img_name], size, margin));
    }
  });
  return line;
}

function transStyle(style) {
  if (!style)
    return '';
  let s = '';
  Object.keys(style).forEach(_s => {
    s += `${_s}:${style[_s]};`
  });
  return s;
}

function renderLine(line, idx) {
  return P_TAG.format(line, transStyle(line_style[idx]));
}

function render(origin) {
  line_style = {};
  const trans = origin
    .split('\n')
    .map(matchStyle)
    .map(matchAbility)
    .map(matchItalic)
    .map(matchComment)
    .map(matchCost)
    .map(renderLine)
    .join('');
  const style = `<style>.render-line {${transStyle(NORMAL_LINE)}}</style>`;
  return trans + style;
}

export default render;
