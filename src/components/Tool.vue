<template>
  <div class="Tools">
    <button @click="clickOutput">输出HTML</button>
    <button @click="clickToImage">输出图片</button>
    <hr>
    <div class="image-output" ref="image"></div>
    <div class="html-output">
      <textarea cols="40" rows="20">{{ output }}</textarea>
    </div>
  </div>
</template>

<style lang="less">
  .image-output {
    text-align: center;
    img {
      width: 80%;
    }
  }
</style>

<script>
  import domtoimage from 'dom-to-image';

  export default {
    data () {
      return {
        output: ''
      }
    },
    methods: {
      clickOutput () {
        const el = document.getElementById('card');
        console.log(el.outerHTML);
        this.output = el.outerHTML;
      },
      clickToImage () {
        const self = this;
        const el = document.getElementById('card');
        const img = el.querySelector('#cardImage');
        const old_url = img.style.backgroundImage;

        const p = new Promise((res, rej) => {
          if (img.style.backgroundImage) {
            const url = img.style.backgroundImage.split('"')[1];
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
              const reader = new FileReader();
              reader.onloadend = function () {
                img.style.backgroundImage = `url(${reader.result})`;
                res();
              };
              reader.readAsDataURL(xhr.response);
            };
            xhr.open('GET', url);
            xhr.responseType = 'blob';
            xhr.send();
          } else {
            res()
          }
        }).then(res => {
          console.log('load image done');
          domtoimage.toSvg(el)
              .then(dataurl => {
                const oimg = new Image();
                oimg.src = dataurl;
                const image_output = self.$refs['image'];
                while (image_output.firstChild) {
                  image_output.removeChild(image_output.firstChild)
                }
                image_output.appendChild(oimg);
                img.style.backgroundImage = old_url;
              }).catch(console.error)
        });

      }
    }
  }
</script>
