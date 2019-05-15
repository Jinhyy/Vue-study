<template>
    <div>
        <!-- 네임드 slot -->
        <slot name="header"></slot>
        <slot name="body"></slot>
        <p> {{ myProp1 }} </p>
        <p v-if="property1">{{ property1 }}</p>
        <p v-if="property2">{{ property2 }}</p>
        <h4>-----------구분선----------</h4>
        <slot v-for="item in items"
          :item="item">
      <!-- fallback content here -->
        </slot> 
    </div>
</template>

<script>
export default {
  name: 'mainComponent',
  data () {
    return {
      msg: 'Welcome to Main Component!',
      todos: [ { todos1: 'todosPvalue1' }, { todos2: 'todosPvalue2' }, { isComplete: true } ],
      todo: []
    }
  },
  props: ['myProp1', 'property1', 'property2']
}
</script>


<style>
#mainComponent {
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