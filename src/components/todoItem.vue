<template>

  <div :class="`todo-item ${todo.done && 'done'}`" >
    <label>
      <input type="checkbox" v-model="todo.done"/>
      <span class="bubble" v-if="todo.done"></span>
      <span class="bubble high" v-else-if="todo.category==='high'"></span>
      <span class="bubble medium" v-else-if="todo.category==='medium'"></span>
      <span class="bubble normal" v-else></span>

    </label>

    <div class="todo-content">
      <input type="text" v-model="todo.title"/>
    </div>

    <div class="actions">
      <button class="delete" @click="removeTodo(todo)">{{ $t('items.delete') }}</button>
    </div>
  </div>

</template>

<script>

export default {
  name: "todoItem",
  props: ["todo"],
  methods: {
    removeTodo(todo) {
      this.$emit("remove-todo", todo);
    }
  }
}

</script>

<style scoped>

.bubble {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid var(--theme);
  box-shadow: var(--theme-glow);
}

.bubble::after {
  content: "";
  display: block;
  opacity: 0;
  width: 0;
  height: 0;
  background-color: var(--theme);
  box-shadow: var(--theme-glow);
  border-radius: 50%;
  transition: 0.2s ease-in-out;
}

input:checked ~ .bubble::after {
  width: 10px;
  height: 10px;
  opacity: 1;
}

.todo-item {
  display: flex;
  align-items: center;
  background-color: #FFF;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-right: 1rem;
  cursor: pointer;
}

.todo-content {
  flex: 1 1 0;
}

.todo-content input {
  color: var(--dark);
  font-size: 1.125rem;
  width: 100%;
}

.actions {
  display: flex;
  align-items: center;
}

.actions button {
  display: block;
  padding: 0.5rem;
  border-radius: 0.25rem;
  color: #FFF;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.actions button:hover {
  opacity: 0.75;
}

.actions .delete {
  background-color: var(--danger);
}

.todo-item.done .todo-content input {
  text-decoration: line-through;
  color: var(--grey);
}
</style>