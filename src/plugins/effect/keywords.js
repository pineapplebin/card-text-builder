import utils from './utils'

const keywords = utils.keywords;
const add = utils.add;

/**
 * keyword abilities
 */

// deathtouch
add({
  zh: {name: '死触', desc: "此生物对生物造成的任何数量伤害都足以消灭后者。"},
  en: {
    name: 'deathtouch',
    desc: "Any amount of damage this deals to a creature is enough to destroy it."
  }
});

// defender
add({
  zh: {name: '守军', desc: "此生物不能攻击。"},
  en: {name: 'defender', desc: "This creature can't attack."}
});

// double strike
add({
  zh: {name: '连击', desc: "此生物能造成先攻与普通战斗伤害。"},
  en: {
    name: 'doublestrike', display: "Double strike",
    desc: "This creature deals both first-strike and regular combat damage."
  }
});

// enchant
add({
  zh: {name: '结附', display: "结附于", desc: "此牌只能结附于%0"},
  en: {name: 'enchant', desc: "This card can only be attached to an %0"}
});

// equip
add({
  zh: {name: '佩带', desc: '%0：装备在目标由你操控的生物上； 佩带的时机视同法术。'},
  en: {
    name: 'equip',
    desc: "%0: Attach to target creature you control. Equip only as a sorcery."
  }
});

// first strike
add({
  zh: {name: '先攻', desc: '此生物会比不具先攻异能的生物提前造成战斗伤害。'},
  en: {
    name: 'firststrike',
    desc: "This creature deals combat damage before creatures without first strike."
  }
});

// flash
add({
  zh: {name: '闪现', desc: "你可以于你能够施放瞬间的时机下使用此牌。"},
  en: {
    name: 'flash',
    desc: "You may cast this spell any time you could cast an instant."
  }
});

// flying
add({
  zh: {name: '飞行', desc: '此生物只能被具有飞行和/或延势的生物阻挡。'},
  en: {
    name: 'flying',
    desc: "This creature can't be blocked except by creatures with flying and/or reach."
  }
});

// haste
add({
  zh: {name: '敏捷', desc: "此生物受你操控时便能攻击与{T}。"},
  en: {
    name: 'haste',
    desc: "This creature can attack and {T} as soon as it comes under your control."
  }
});

// hexproof
add({
  zh: {name: '辟邪', desc: "此永久物不能成为你对手所操控的咒语或异能的目标。"},
  en: {
    name: 'hexproof',
    desc: "This permanent can't be the target of spells or abilities your opponents control."
  }
});

// indestructible
add({
  zh: {name: '不灭', desc: "注明「消灭」的效应不会消灭该永久物。伤害无法消灭具不灭异能的生物。"},
  en: {
    name: 'indestructible',
    desc: "Effects that say \"destroy\" don’t destroy this."
  }
});

// lifelink
add({
  zh: {name: "系命", desc: "此生物所造成的伤害会让你获得等量的生命。"},
  en: {
    name: 'lifelink',
    desc: "Damage dealt by this creature also causes you to gain that much life."
  }
});

// menace
add({
  zh: {name: '威慑', desc: "此生物只能被两个或更多生物阻挡。"},
  en: {
    name: 'menace',
    desc: "This creature can't be blocked except by two or more creatures."
  }
});

// prowess
add({
  zh: {name: '灵技', desc: "每当你施放非生物咒语时，此生物得+1/+1直到回合结束。"},
  en: {
    name: 'prowess',
    desc: "Whenever you cast a noncreature spell, this creature gets +1/+1 until end of turn."
  }
});

// reach
add({
  zh: {name: '延势', desc: "此生物能够阻挡具有飞行异能的生物。"},
  en: {name: 'reach', desc: "This creature can block creatures with flying."}
});

// trample
add({
  zh: {
    name: '践踏',
    desc: "如果此生物将分配的伤害足以消灭所有阻挡它的生物，你可以将它所剩余数量的伤害分配给防御牌手或鹏洛客。"
  },
  en: {
    name: 'trample',
    desc: "This creature can deal excess combat damage to defending player " +
    "or planeswalker while attacking."
  }
});

// vigilance
add({
  zh: {name: "警戒", desc: "此生物攻击时不需横置。"},
  en: {name: 'vigilance', desc: "Attacking doesn't cause this creature to tap."}
});

///////////////// not evergreen /////////////////

// crew
add({
  zh: {
    name: '搭载',
    desc: "横置任意数量由你操控且力量总和等于或大于%0的未横置生物：此永久物成为神器生物直到回合结束。"
  },
  en: {
    name: 'crew',
    desc: "Tap any number of untapped creatures you control with total power %0 or greater: " +
    "This permanent becomes an artifact creature until end of turn."
  }
});

// fuse
add({
  zh: {name: '融咒', desc: '你可以从手牌中单独施放此牌任一边或一同施放两边。'},
  en: {
    name: 'fuse',
    desc: "You may cast one or both halves of this card from your hand."
  }
});

// level up
add({
  zh: {name: '升级', desc: "%0：在其上放置一个等级指示物。 升级的时机视同法术。"},
  en: {
    name: 'levelup', display: 'Level up',
    desc: "%0: Put a level counter on this. Level up only as a sorcery."
  }
});

/**
 * ability words
 */

// battalion
add({
  is_keyword: false, zh: {name: '协战'}, en: {name: 'battalion'},
  typical: '每当此生物与至少两个其他生物攻击时，…'
});

// enrage
add({
  is_keyword: false, zh: {name: '激怒'}, en: {name: 'enrage'},
  typical: '每当此生物受到伤害时，…'
});

// raid
add({
  is_keyword: false, zh: {name: '突击'}, en: {name: 'raid',},
  typical: "…，如果你于本回合曾以生物攻击，…"
});

/**
 * others
 */

// split color
add({
  zh: {
    name: '混色',
    desc: '%0可用%1或%2来支付。'
  },
  en: {
    name: 'splitcolor',
    display: 'Split color',
    desc: "%0 can be paid with either %1 or %2."
  },
  format(desc, params) {
    return desc.format(params[0], `{${params[0][1]}}`, `{${params[0][2]}}`)
  }
});


export default keywords;
