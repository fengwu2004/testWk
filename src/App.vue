<template>
  <div id="app">
    <div>
      <input class="textfield" v-model="eventId" />
      <div class="btn" v-on:click="doTest">测试接口</div>
      <div>输出</div>
      <div>{{ result }}</div>
    </div>
  </div>
</template>

<script>
import { initJsBridge } from "./bridge";

export default {
  name: "App",
  data() {
    return {
      result: "",
      eventId: 12010,
    };
  },
  mounted() {

    initJsBridge();
  },
  methods: {
    doTest() {

      var funcNo = this.eventId;

      let url = 'https://www.baidu.com'

      let title = "我的"

      let coloString = '#00FF00'

      let code = "601788"

      let codedd = "601788"

      let param = {
        url,
        title,
        coloString,
        code
        };

      var callback = (nativeparams) => {

        this.result = JSON.stringify(nativeparams);
      };

      let data = {
        param,
        funcNo,
      };

      window.callIOSNative(data, callback);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}

.textfield {
  width: 10rem;
}

.btn {
  margin: 1rem;
  background-color: #42b983;
  text-align: center;
}
</style>
