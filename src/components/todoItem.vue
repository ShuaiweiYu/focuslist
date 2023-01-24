<template>
  <div class="todo-item">
    <input type="checkbox" v-model="todo.done">
    <span class="todo-title">
      {{ todo.title }}
    </span>
  </div>
</template>

<script>
export default {
  name: "todoItem",
  props: ["todo"]
}
</script>

<style scoped>


</style>