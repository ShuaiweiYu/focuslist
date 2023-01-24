<script>

import {defineComponent} from "vue";
import TodoItem from "@/components/todoItem.vue";

export default defineComponent({
  components: {TodoItem},
  data() {
    return {
      todos: [
        {id: 0, title: "Do the dishes", done: false},
        {id: 1, title: "Take out the trash", done: false},
        {id: 2, title: "Mow the lawn", done: false}
      ]
    }
  }
})
</script>

<template>
  <todo-item v-for="todo in todos" :todo="todo" :key="todo.id"/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
