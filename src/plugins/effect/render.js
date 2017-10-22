import {getAbility} from './abilities'
import images from '../images'

const P_TAG = '<p style="margin: 3px 0; line-height: 18px;">%0</p>';
const ITALIC_TAG = '<span style="font-style: italic;">%0</span>';
const COMMENT_TAG =
  '<span style="font-family: MPlantin, STKaiti, sans-serif; font-style: italic;">%0</span>';

const REG_ABILITY = /\[\[([!\u4e00-\u9fa5|\w\d{}／]+)]]/i;
const REG_ITALIC = /@(.+)@/i;
const REG_COMMENT = /#(.+)#/i;
const REG_COST = /{([\d\w]+)}/ig;


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

function render(origin) {
  return origin
    .split('\n')
    .map(matchAbility)
    .map(matchItalic)
    .map(matchComment)
    .map(matchCost)
    .map(line => P_TAG.format(line))
    .join('')
}

export default render;
