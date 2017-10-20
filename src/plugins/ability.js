import resources from '../resources/abilities.json'
import resources_en from '../resources/abilities_en.json'
// import images from '../resources/images.json'
import images from './images.js'

const abilities = Object.assign(resources, resources_en);

const ABILITY_REG = /\[\[([!\u4e00-\u9fa5|\w\d{}／]+)\]\]/i;
const COST_REG = /{([\d\w]+)}/ig;
const ITALIC_REG = /#(.+)#/i;

const SPAN_ITALIC = '%0<span style="font-style: italic;">%1</span>';

function transAbility(line) {
  /**
   * 处理异能缩写
   * [[飞行]]   -> 飞行（...）
   * [[!飞行]]  -> （...）
   * [[铭勇|1]] -> 铭勇 1（...1）
   * [[激怒]]   -> 激怒 ～ 每当...
   * [[!激怒]]  -> 激怒 ～
   */
  const result = line.match(ABILITY_REG);
  if (!result)
    return line;

  let [name, ...params] = result[1].split('|').filter(s => s.length);
  let shorty = false;
  if (name[0] === '!') {
    shorty = true;
    name = name.slice(1);
  }
  if (!abilities[name])
    return line;

  let desc = abilities[name]['desc'];
  if (params.length)
    desc = desc.format(params);

  if (abilities[name]['keyword']) {
    line = line.replace(result[0], SPAN_ITALIC.format('', `${name.title()} ～ ${shorty ? '' : desc}`));
  } else {
    if (params.length)
      name += ' ' + params.join(' ');
    line = line.replace(result[0], SPAN_ITALIC.format(shorty ? '' : name.title(), `（${desc}）`));
    console.log(line);
  }

  return line
}

function transImage(line) {
  const result = line.match(COST_REG);
  if (!result)
    return line;
  console.log(result);

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

function transItalic(line) {
  const result = line.match(ITALIC_REG);
  if (result) {
    line = line.replace(result[0], '<span style="font-style: italic; font-size: 12pt;font-family: STKaiti, sans-serif">%0</span>'.format(result[1]));
  }
  return line
}

const ability = {
  translate(effect) {
    return effect
      .split('\n')
      .map(transAbility)
      .map(transImage)
      .map(transItalic)
      .map(line => `<p style="margin: 3px 0;line-height: 17px;">${line}</p>`)
      .join('');
  }
};

const installer = {
  install(Vue) {
    Vue.prototype.$$ability = ability
  }
};

export default installer
