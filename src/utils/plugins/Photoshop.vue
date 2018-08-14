<template>
  <div class="Photoshop" v-show="is_showing">
    <el-card>
      <div style="text-align: right; margin-bottom: 10px">
        <el-button icon="el-icon-refresh" size="small" round @click="refresh"></el-button>
        <el-button icon="el-icon-close" size="small" round @click="reset"></el-button>
      </div>
      <el-form label-width="80px">
        <el-form-item label="亮度%" v-if="active_params.brightness">
          <el-slider show-input :max="200" v-model="current_vm.brightness"></el-slider>
        </el-form-item>
        <el-form-item label="对比度%" v-if="active_params.contrast">
          <el-slider show-input :max="200" v-model="current_vm.contrast"></el-slider>
        </el-form-item>
        <el-form-item label="饱和度%" v-if="active_params.saturate">
          <el-slider show-input :max="200" v-model="current_vm.saturate"></el-slider>
        </el-form-item>
        <el-form-item label="透明度%" v-if="active_params.opacity">
          <el-slider show-input :step="10" :max="100" v-model="current_vm.opacity"></el-slider>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style lang="less" scoped>
  .Photoshop {
    position: fixed;
    right: 10px;
    top: 50px;
    width: 500px;
    z-index: 100;
  }
</style>

<script>
  export function install (Vue) {
    Vue.prototype.$$ps = {
      _vm: null,
      init (vm) {
        this._vm = vm
      },
      showPanel (vm, ...args) {
        this._vm.showPanel(vm, ...args)
      }
    }
  }

  const DEFAULT_VM = {
    brightness: 100,
    contrast: 100,
    saturate: 100,
    opacity: 100,
    makeData (active, from = null) {
      return Object.keys(active).reduce((acc, key) => {
        if (from)
          acc[key] = from[key]
        else
          acc[key] = this[key]
        return acc
      }, {})
    }
  }

  export default {
    data () {
      return {
        is_showing: false,
        current_vm: {},
        active_params: {},
        temp: null,
      }
    },
    created () {
      this.$$ps.init(this)
    },
    methods: {
      reset () {
        this.is_showing = false
        this.current_vm = DEFAULT_VM.makeData(this.active_params)
        this.temp = null
      },
      showPanel (vm, params = ['brightness', 'contrast', 'saturate']) {
        this.active_params = params.reduce((acc, key) => {
          acc[key] = true
          return acc
        }, {})
        if (this.is_showing) {
          this.reset()
        }
        this.$nextTick(() => {
          this.current_vm = vm
          this.is_showing = true
        })
      },
      refresh () {
        if (!this.temp) {
          this.temp = DEFAULT_VM.makeData(this.active_params, this.current_vm)
          const _default = DEFAULT_VM.makeData(this.active_params)
          Object.keys(_default).forEach(key => {
            this.current_vm[key] = _default[key]
          })
        } else {
          Object.keys(this.temp).forEach(key => {
            this.current_vm[key] = this.temp[key]
          })
          this.temp = null
        }
      }
    }
  }
</script>
