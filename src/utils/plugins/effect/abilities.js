import keywords from './keywords'

const abilities = {
  en: {}, zh: {}
};
keywords.forEach(obj => {
  abilities.en[obj.en.name] = abilities.zh[obj.zh.name] = obj;
});

export function getAbility(text) {
  const from_en = abilities.en[text];
  const from_zh = abilities.zh[text];

  if (from_en)
    return {...from_en, lang: 'en'};
  else if (from_zh)
    return {...from_zh, lang: 'zh'};
  else
    return null;
}
