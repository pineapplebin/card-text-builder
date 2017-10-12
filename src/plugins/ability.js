import resources from '../resources/abilities.json'
import images from '../resources/images.json'

const ABILITY_REG = /\[\[([\u4e00-\u9fa5|\w\d{}\!]+)\]\]/i;
const COST_REG = /{([\d\w]+)}/ig;
const ITALIC_REG = /#(.+)#/i;

function transAbility(line) {
  const result = line.match(ABILITY_REG);
  if (result) {
    let [name, param] = result[1].split('|');
    let only_desc = false;
    if (name[0] === '!') {
      only_desc = true;
      name = name.slice(1);
    }
    if (resources[name]) {
      // 判断是否为有效果异能
      if (resources[name]['keyword']) {
        line = line.replace(result[0],
          `<span style="font-style: italic;">${name} ～ </span>`);
      } else {
        // 获取有效果异能的描述
        let desc = resources[name]['desc'];
        if (param) {
          desc = desc.replace('%n', param);
          name = `${name} ${param}`
        }
        line = line.replace(
          result[0],
          `${only_desc ? '' : name}<span style="font-style: italic">（${desc}）</span>`)
      }
    }
  }
  return line
}

function transImage(line) {
  const result = line.match(COST_REG);
  if (result) {
    result.forEach(short => {
      const img_name = short.toLowerCase().slice(1, short.length - 1);
      if (images['mana'][img_name]) {
        line = line.replace(short,
          `<img src="${images['mana'][img_name]}" style="width: 15px;height: 15px; vertical-align: sub; margin-right: 2px; margin-bottom: 2px;">`)
      }
    });
  }
  return line;
}

function transItalic(line) {
  const result = line.match(ITALIC_REG);
  if (result) {
    line = line.replace(result[0],
      `<span style="font-style: italic">${result[1]}</span>`)
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
      .map(line => `<p style="margin: 3px 0;line-height: 17px">${line}</p>`)
      .join('');
  }
};

const installer = {
  install(Vue) {
    Vue.prototype.$$ability = ability
  }
};

export default installer
