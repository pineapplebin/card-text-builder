const keywords = [];
const DEFAULT = {
  is_keyword: true,
  en: null, zh: null,
  display: null,
  format: null,
  transform(lang, params, shorty) {
    const data = {...this[lang]};
    data.name = data.display ? data.display : data.name.title();
    const _params = params.filter(s => s.length);

    if (this.is_keyword) {
      if (this.format && _params.length)
        data.desc = this.format(data.desc, _params);
      else
        data.desc = data.desc.format(..._params);

      return shorty ?
        `@（${data.desc}）@` :
        `${data.name}${_params.length ? ' ' : ''}${_params.join(' ')}@（${data.desc}）@`;
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


