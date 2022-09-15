import utils from './utils'

const keywords = utils.keywords
const add = utils.add

/**
 * keyword abilities
 */

// deathtouch
add({
  zh: { name: '死触', desc: '此生物对生物造成的任何数量伤害都足以消灭后者。' },
  en: {
    name: 'deathtouch',
    desc: 'Any amount of damage this deals to a creature is enough to destroy it.',
  },
})

// defender
add({
  zh: { name: '守军', desc: '此生物不能攻击。' },
  en: { name: 'defender', desc: "This creature can't attack." },
})

// double strike
add({
  zh: { name: '连击', desc: '此生物能造成先攻与普通战斗伤害。' },
  en: {
    name: 'doublestrike',
    display: 'Double strike',
    desc: 'This creature deals both first-strike and regular combat damage.',
  },
})

// enchant
add({
  zh: { name: '结附', display: '结附于', desc: '此牌只能结附于%0' },
  en: { name: 'enchant', desc: 'This card can only be attached to an %0' },
})

// equip
add({
  zh: {
    name: '佩带',
    desc: '%0：装备在目标由你操控的生物上； 佩带的时机视同法术。',
  },
  en: {
    name: 'equip',
    desc: '%0: Attach to target creature you control. Equip only as a sorcery.',
  },
})

// first strike
add({
  zh: { name: '先攻', desc: '此生物会比不具先攻异能的生物提前造成战斗伤害。' },
  en: {
    name: 'firststrike',
    desc: 'This creature deals combat damage before creatures without first strike.',
  },
})

// flash
add({
  zh: { name: '闪现', desc: '你可以于你能够施放瞬间的时机下使用此牌。' },
  en: {
    name: 'flash',
    desc: 'You may cast this spell any time you could cast an instant.',
  },
})

// flying
add({
  zh: { name: '飞行', desc: '此生物只能被具有飞行和/或延势的生物阻挡。' },
  en: {
    name: 'flying',
    desc: "This creature can't be blocked except by creatures with flying and/or reach.",
  },
})

// haste
add({
  zh: { name: '敏捷', desc: '此生物受你操控时便能攻击与{T}。' },
  en: {
    name: 'haste',
    desc: 'This creature can attack and {T} as soon as it comes under your control.',
  },
})

// hexproof
add({
  zh: {
    name: '辟邪',
    desc: '此永久物不能成为你对手所操控的咒语或异能的目标。',
  },
  en: {
    name: 'hexproof',
    desc: "This permanent can't be the target of spells or abilities your opponents control.",
  },
})

// indestructible
add({
  zh: {
    name: '不灭',
    desc: '注明「消灭」的效应不会消灭该永久物。伤害无法消灭具不灭异能的生物。',
  },
  en: {
    name: 'indestructible',
    desc: 'Effects that say "destroy" don’t destroy this.',
  },
})

// lifelink
add({
  zh: { name: '系命', desc: '此生物所造成的伤害会让你获得等量的生命。' },
  en: {
    name: 'lifelink',
    desc: 'Damage dealt by this creature also causes you to gain that much life.',
  },
})

// menace
add({
  zh: { name: '威慑', desc: '此生物只能被两个或更多生物阻挡。' },
  en: {
    name: 'menace',
    desc: "This creature can't be blocked except by two or more creatures.",
  },
})

// prowess
add({
  zh: {
    name: '灵技',
    desc: '每当你施放非生物咒语时，此生物得+1/+1直到回合结束。',
  },
  en: {
    name: 'prowess',
    desc: 'Whenever you cast a noncreature spell, this creature gets +1/+1 until end of turn.',
  },
})

// reach
add({
  zh: { name: '延势', desc: '此生物能够阻挡具有飞行异能的生物。' },
  en: { name: 'reach', desc: 'This creature can block creatures with flying.' },
})

// trample
add({
  zh: {
    name: '践踏',
    desc: '如果此生物将分配的伤害足以消灭所有阻挡它的生物，你可以将它所剩余数量的伤害分配给防御牌手或鹏洛客。',
  },
  en: {
    name: 'trample',
    desc:
      'This creature can deal excess combat damage to defending player ' +
      'or planeswalker while attacking.',
  },
})

// vigilance
add({
  zh: { name: '警戒', desc: '此生物攻击时不需横置。' },
  en: {
    name: 'vigilance',
    desc: "Attacking doesn't cause this creature to tap.",
  },
})

///////////////// not evergreen /////////////////

// afflict
add({
  zh: { name: '折磨', desc: '每当此生物被阻挡时，防御牌手失去%0点生命。' },
  en: {
    name: 'afflict',
    desc: 'Whenever this creature becomes blocked, defending player loses %0 life.',
  },
})

// aftermath
add({
  zh: { name: '余响', desc: '此咒语只能从你的坟墓场中施放。然后将它放逐。' },
  en: {
    name: 'aftermath',
    desc: 'Cast this spell only from your graveyard. Then exile it.',
  },
})

// annihilator
add({
  zh: {
    name: '歼灭',
    desc: '每当此生物攻击时，防御牌手牺牲%0个永久物。',
  },
  en: {
    name: 'annihilator',
    desc: 'Whenever this creature attacks, defending player sacrifices %0 permanents.',
  },
})

// bestow
add({
  zh: {
    name: '神授',
    desc: '如果你支付此牌的神授费用来施放它，则它便是具「结附于生物」的灵气咒语。如果它未结附于生物上，就会再度成为生物。',
  },
  en: {
    name: 'bestow',
    desc:
      "If you cast this card for its bestow cost, it's an Aura spell with enchant creature. " +
      "It becomes a creature again if it's not attached to a creature.",
  },
})

// bushido
add({
  zh: {
    name: '武士道',
    desc: '每当此生物进行阻挡或被阻挡时，它得+%0/+%0直到回合结束。',
  },
  en: {
    name: 'bushido',
    desc: 'Whenever this creature blocks or becomes blocked, it gets +%0/+%0 until end of turn.',
  },
})

// crew
add({
  zh: {
    name: '搭载',
    desc: '横置任意数量由你操控且力量总和等于或大于%0的未横置生物：此永久物成为神器生物直到回合结束。',
  },
  en: {
    name: 'crew',
    desc:
      'Tap any number of untapped creatures you control with total power %0 or greater: ' +
      'This permanent becomes an artifact creature until end of turn.',
  },
})

// delve
add({
  zh: {
    name: '掘穴',
    desc: '你于施放此咒语时每从你坟墓场中放逐一张牌，就能为此咒语支付{1}',
  },
  en: {
    name: 'delve',
    desc:
      'Each card you exile from your graveyard while ' +
      'casting this spell pays for {1}.',
  },
})

// devoid
add({
  zh: { name: '虚色', desc: '此牌没有颜色。' },
  en: { name: 'devoid', desc: 'This card has no color.' },
})

// devotion
add({
  zh: {
    name: '献力',
    desc: '由你操控之永久物的法术力费用当中每含有一个%0，你的该色献力就加一。',
  },
  en: {
    name: 'devotion',
    desc: 'Each %0 in the mana costs of permanents you control counts toward your devotion to that color.',
  },
  format(desc, params, lang) {
    return desc.format(params.join(lang === 'zh' ? '和／或' : ' and / or '))
  },
})

// emerge
add({
  zh: {
    name: '化生',
    desc: '你可以牺牲一个生物并支付化生费用来施放此咒语，此时总费用会扣除该生物之总法术力费用。',
  },
  en: {
    name: 'emerge',
    desc:
      'You may cast this spell by sacrificing a creature and paying the ' +
      "emerge cost reduced by that creature's converted mana cost.",
  },
})

// eternalize
add({
  zh: {
    name: '永生',
    desc:
      '%0，从你的坟墓场放逐此牌：派出一个衍生物，且为此牌的复制品，但它是4/4黑色灵俑%1' +
      '，且没有法术力费用。永生的时机视同法术。',
  },
  en: {
    name: 'eternalize',
    desc:
      '%0, Exile this card from your graveyard: Create a token that’s a ' +
      "copy of this card, except it's a 4/4 black Zombie%1 with no mana cost. " +
      'Eternalize only as a sorcery.',
  },
  format(desc, params, lang) {
    const c = lang === 'zh' ? '／' : ' '
    return desc.format(params[0], c + params.slice(1).join(c))
  },
})

// fortify
add({
  zh: {
    name: '构工',
    desc: '%0：装备在目标由你操控的地上； 构工的时机视同法术。 此牌进场时并未装备，且该地离场后，此牌依旧在场。',
  },
  en: {
    name: 'fortify',
    desc:
      '%0: Attach this Fortification to target land you control. ' +
      'Activate this ability only any time you could cast a sorcery.',
  },
})

// fuse
add({
  zh: {
    name: '融咒',
    desc: '你可以从手牌中单独施放此牌任一边或一同施放两边。',
  },
  en: {
    name: 'fuse',
    desc: 'You may cast one or both halves of this card from your hand.',
  },
})

// ingest
add({
  zh: {
    name: '摄食',
    desc: '每当此生物对任一牌手造成战斗伤害时，该牌手放逐其牌库顶牌。',
  },
  en: {
    name: 'ingest',
    desc:
      'Whenever this creature deals combat damage to a player, ' +
      'that player exiles the top card of his or her library.',
  },
})

// kicker
add({
  zh: { name: '增幅', desc: '你施放此咒语时可以额外支付%0。' },
  en: {
    name: 'kicker',
    desc: 'You may pay an additional %0 as you cast this spell.',
  },
})

// level up
add({
  zh: {
    name: '升级',
    desc: '%0：在其上放置一个等级指示物。 升级的时机视同法术。',
  },
  en: {
    name: 'levelup',
    display: 'Level up',
    desc: '%0: Put a level counter on this. Level up only as a sorcery.',
  },
})

// livingweapon
add({
  zh: {
    name: '活化武器',
    desc: '当此武具进入战场时，派出一个0/0黑色病菌衍生生物，然后将它装备此武具。',
  },
  en: {
    name: 'living weapon',
    desc:
      'When this Equipment enters the battlefield, ' +
      'create a 0/0 black Germ creature token, then attach this Equipment to it.',
  },
})

// monstrosity
add({
  zh: {
    name: '蛮化',
    desc: '如果此永久物未蛮化，则在其上放置%0个+1/+1指示物且它蛮化。',
  },
  en: {
    name: 'monstrosity',
    desc:
      "If this permanent isn't monstrous, " +
      'put %0 +1/+1 counters on it and it becomes monstrous.',
  },
})

// morph
add({
  zh: {
    name: '变身',
    desc: '你可牌面朝下地施放此牌并支付{3}，将其当成2/2生物。可随时支付其变身费用使其翻回正面。',
  },
  en: {
    name: 'morph',
    desc:
      'You may cast this card face down as a 2/2 creature for {3}.' +
      ' Turn it face up any time for its morph cost.',
  },
})

// outlast
add({
  zh: {
    name: '延生',
    desc: '%0，{t}：在此生物上放置一个+1/+1指示物。' + '延生的时机视同法术。',
  },
  en: {
    name: 'outlast',
    desc:
      '%0, {T}: Put a +1/+1 counter on this creature. ' +
      'Activate this ability only any time you could cast a sorcery.',
  },
})

// scry
add({
  zh: {
    name: '占卜',
    desc: '检视你牌库顶的%0张牌，将其中任意数量的牌以任意顺序置于你的牌库底，其余则以任意顺序置于你的牌库顶。',
  },
  en: {
    name: 'scry',
    desc:
      'Look at the top %0 cards of your library, put any number of them on ' +
      'the bottom of your library in any order, and put the rest on top of your library in any order.',
  },
})

// skulk
add({
  zh: { name: '潜匿', desc: '此生物不能被力量比它大的生物阻挡。' },
  en: {
    name: 'skulk',
    desc: 'This creature can’t be blocked by creatures with greater power.',
  },
})

// soulshift
add({
  zh: {
    name: '转生',
    desc: '当此永久物从战场上置入坟墓场时，你可以将目标总法术力费用等于或小于%0的精怪牌从你的坟墓场移回你手上。',
  },
  en: {
    name: 'soulshift',
    desc:
      'When this permanent is put into a graveyard from the battlefield, ' +
      'you may return target Spirit card with converted mana cost %0 or less from ' +
      'your graveyard to your hand.',
  },
})

// surge
add({
  zh: {
    name: '潮涌',
    desc: '如果你或队友本回合中施放过其他咒语，则你可以支付此牌的潮涌费用来施放它。',
  },
  en: {
    name: 'surge',
    desc:
      'You may cast a spell for its surge cost if you or a teammate ' +
      'have cast another spell in the same turn.',
  },
})

// **walk
add({
  zh: {
    name: '行者',
    desc: '只要防御牌手操控%0，此生物就不能被阻挡。',
  },
  en: {
    name: 'walk',
    desc: 'This creature can’t be blocked as long as defending player controls an %0.',
  },
})

/**
 * ability words
 */

// battalion
add({
  is_keyword: false,
  zh: { name: '协战' },
  en: { name: 'battalion' },
  typical: '每当此生物与至少两个其他生物攻击时，…',
})

// delirium
add({
  is_keyword: false,
  zh: { name: '躁狂' },
  en: { name: 'delirium' },
  typical: '…，若你坟墓场中牌的类别有四种或更多，…',
})

// eminence
add({
  is_keyword: false,
  zh: { name: '威仪' },
  en: { name: 'eminence' },
  typical: '…，只要该生物位于统帅区或战场上，…',
})

// enrage
add({
  is_keyword: false,
  zh: { name: '激怒' },
  en: { name: 'enrage' },
  typical: '每当此生物受到伤害时，…',
})

// ferocious
add({
  is_keyword: false,
  zh: { name: '威猛' },
  en: { name: 'ferocious' },
  typical: '…如果你操控力量等于或大于4的生物，…',
})

// heroic
add({
  is_keyword: false,
  zh: { name: '勇行' },
  en: { name: 'heroic' },
  typical: '每当你施放一个以此生物为目标的咒语时，…',
})

// landfall
add({
  is_keyword: false,
  zh: { name: '地落' },
  en: { name: 'landfall' },
  typical: '每当一个地在你的操控下进战场时，…',
})

// raid
add({
  is_keyword: false,
  zh: { name: '突击' },
  en: { name: 'raid' },
  typical: '…，如果你于本回合曾以生物攻击，…',
})

/**
 * others
 */

// phyrexian mana
add({
  zh: {
    name: '非瑞克西亚',
    desc: '%0可用%1或2点生命来支付。',
  },
  en: {
    name: 'phyrexiancolor',
    desc: '%0 can be paid with either %1 or 2 life.',
  },
  format(desc, params, lang) {
    return desc.format(params[0], `{${params[0][1]}}`)
  },
})

// split color
add({
  zh: {
    name: '混色',
    desc: '%0可用%1或%2来支付。',
  },
  en: {
    name: 'splitcolor',
    display: 'Split color',
    desc: '%0 can be paid with either %1 or %2.',
  },
  format(desc, params, lang) {
    return desc.format(params[0], `{${params[0][1]}}`, `{${params[0][2]}}`)
  },
})

// colorless
add({
  zh: {
    name: '无色',
    desc: '{c}代表无色法术力。',
  },
  en: {
    name: 'colorless',
    desc: '{C} represents colorless mana.',
  },
})

export default keywords
