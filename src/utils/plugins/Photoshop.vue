<template>
  <div class="Photoshop" v-show="is_showing">
    <el-card>
      <div style="text-align: right; margin-bottom: 10px">
        <el-button icon="el-icon-refresh" size="small" round @click="refresh"></el-button>
        <el-button icon="el-icon-close" size="small" round @click="reset"></el-button>
      </div>
      <el-form label-width="80px">
        <el-form-item label="亮度%">
          <el-slider show-input :max="200" v-model="current_vm.brightness"></el-slider>
        </el-form-item>
        <el-form-item label="对比度%">
          <el-slider show-input :max="200" v-model="current_vm.contrast"></el-slider>
        </el-form-item>
        <el-form-item label="饱和度%">
          <el-slider show-input :max="200" v-model="current_vm.saturate"></el-slider>
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
  }
</style>

<script>
  export function install (Vue) {
    Vue.prototype.$$ps = {
      _vm: null,
      init (vm) {
        this._vm = vm
      },
      showPanel (vm) {
        this._vm.showPanel(vm)
      }
    }
  }

  export default {
    data () {
      return {
        is_showing: false,
        current_vm: {
          brightness: 100,
          contrast: 100,
          saturate: 100,
        },
        temp: null,
      }
    },
    created () {
      this.$$ps.init(this)
    },
    methods: {
      reset () {
        this.is_showing = false
        this.current_vm = {
          brightness: 100,
          contrast: 100,
          saturate: 100,
        }
        this.temp = null
      },
      showPanel (vm) {
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
          this.temp = {
            brightness: this.current_vm.brightness,
            contrast: this.current_vm.contrast,
            saturate: this.current_vm.saturate
          }
          this.current_vm.brightness = 100
          this.current_vm.contrast = 100
          this.current_vm.saturate = 100
        } else {
          this.current_vm.brightness = this.temp.brightness
          this.current_vm.contrast = this.temp.contrast
          this.current_vm.saturate = this.temp.saturate
          this.temp = null
        }
      }
    }
  }
</script>
