const keywords = [];
const DEFAULT = {
  is_keyword: true,
  en: null, zh: null,
  display: null,
  format: null,
  transform(lang, params, shorty) {
    const data = {...this[lang]};
    data.name = data.display ? data.display : data.name.title();

    if (this.is_keyword) {
      if (this.format && params.length)
        data.desc = this.format(data.desc, params);
      else
        data.desc = data.desc.format(...params);

      return shorty ?
        `@（${data.desc}）@` :
        `${data.name} ${params.join(' ')}@（${data.desc}）@`;
    }
    else {
      const symbol = {zh: '～', en: '—'};
      return `@${data.name}@ ${params.join(' ')} ${symbol[lang]} `;
    }
  }
};

const add = (obj) => {
  return keywords.push(Object.assign({...DEFAULT}, obj));
};

export default {
  add,
  keywords,
};


