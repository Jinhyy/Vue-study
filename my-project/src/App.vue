<template>
  <div id="app">
    <mainComponent :myProp1="dataForProp1">
      <!-- 네임드 slot -->
      <h1 slot="header"> {{ header }} </h1>
      <template slot="body">
        <h1> this is template slot </h1>
        <button> {{ body }} </button>
      </template>
    </mainComponent>
    <!-- props 객체 매핑 -->
    <main-component v-bind="myObject">
      <slot name="slotExample" :items="slotObject">
      </slot>
    </main-component>
  </div>
</template>


<script>
import mainComponent from "./views/main/index.vue"

export default {
  name: 'app',
  data () {
    return {
      header: 'App.vue header',
      body: 'App.vue body',
      dataForProp1: 'prop data1',
      myObject: { property1: 'property1', property2: 'property2' },
      slotObject: { slotProperty1: 'property1', slotProperty2: 'property2' },
      items: 'this is items from Parent!'
    }
  },
  components: {
    mainComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
