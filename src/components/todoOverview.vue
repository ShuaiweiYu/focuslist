<template>

  <section class="todo-list">
    <statistic-bar :unfinished-todos="unfinishedTodos" :finished-todos="finishedTodos"/>

    <h3 v-if="unfinishedTodos!==0">unfinished todos</h3>
    <div class="todo-overview">
      <div v-for="todo in items" :key="todo.id" class="list">
        <todo-item :todo="todo" v-if="!todo.done" @remove-todo="deleteTodo"/>
      </div>
    </div>

    <h3 v-if="finishedTodos > 0">finished todos</h3>
    <div class="todo-overview">
      <div v-for="todo in items" :key="todo.id" class="list">
        <todo-item :todo="todo" v-if="todo.done" @remove-todo="deleteTodo"/>
      </div>
    </div>
  </section>

</template>

<script>
import TodoItem from "@/components/todoItem.vue";
import StatisticBar from "@/components/statisticBar.vue";

export default {
  components: {TodoItem, StatisticBar},
  name: "todoView",
  props: ["items"],
  data() {
    return {
      finishedItemIsHidden: true
    }
  }, computed: {
    unfinishedTodos() {
      return this.items.filter(todo => !todo.done).length;
    },
    finishedTodos() {
      return this.items.filter(todo => todo.done).length;
    }
  }, methods: {
    deleteTodo(todo) {
      this.items.splice(this.items.indexOf(todo), 1);
    },
    changeVisibility() {
      this.finishedItemIsHidden = !this.finishedItemIsHidden;
    },
  }
}

</script>

<style scoped>

.list {
  margin: 1rem 0;
}

h3 {
  color: var(--dark);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

</style>