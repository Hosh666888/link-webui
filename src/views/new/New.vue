<template>
  <div id="new_container">
      <div id="otherInfo">
        <input placeholder="标题"/>
      </div>
      <div id="editor"></div>
  </div>
</template>

<script>
import {createEditor} from "@textbus/textbus"
export default {
  name: "New",
  mounted() {
    let editorDom = document.getElementById("editor")
    const editor = createEditor(editorDom,{
      uploader(uploadType, prevValue) {
      switch (uploadType) {
        case 'video':
          console.log('上传视频');
          break;
        case 'image':
          console.log('上传视频');
          break;
        case 'audio':
          console.log('上传音频');
          break;
      }
      return Promise.resolve().then(() => {
        return '/test'
      })
    }})
    editor.onChange.subscribe(() => {
      console.log(editor.getContents());
    });
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
@import "~@textbus/textbus/bundles/textbus.min.css";
#new_container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
</style>