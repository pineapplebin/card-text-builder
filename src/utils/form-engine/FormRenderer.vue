<template>
  <div class="FormRenderer">
    <el-form label-width="100px" v-if="form_conf">
      <el-form-item
        v-for="(field, key) in form_conf"
        :label="field.label"
        :key="key"
      >
        <component
          :is="field_map[field._$type]"
          :key="key"
          v-model="current_data[key]"
          :conf="form_conf[key]"
          @change="updateFieldValue(key, $event)"
        ></component>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="less" scoped></style>

<script>
import { Input, Checkbox, Slider } from 'element-plus'
import SelectField from './SelectField.vue'
import TextareaField from './TextareaField.vue'

export default {
  data() {
    return {
      field_map: {
        TextField: Input,
        CheckBoxField: Checkbox,
        SlideField: Slider,
        SelectField,
        TextareaField,
      },
      form_conf: null,
      current_data: null,
    }
  },
  methods: {
    renderForm(conf, data) {
      console.log(conf)
      this.form_conf = conf
      this.current_data = data
    },
    updateFieldValue(key, value) {
      console.log(key, value)
      const field = this.form_conf[key]
      if (field.onchange) {
        field.onchange(value, this.current_data)
      }
    },
  },
}
</script>
