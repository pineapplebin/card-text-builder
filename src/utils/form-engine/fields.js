const common = {
  label: '字段',
  onchange: null,
}

export const TextField = function (conf) {
  return Object.assign({}, common, {
    _$type: 'TextField',
  }, conf)
}

export const CheckBoxField = function (conf) {
  return Object.assign({}, common, {
    _$type: 'CheckBoxField',
  }, conf)
}

export const SelectField = function (conf) {
  return Object.assign({}, common, {
    _$type: 'SelectField',
    options: [],
  }, conf)
}
