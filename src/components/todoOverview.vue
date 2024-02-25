<template>

  <section class="todo-list">
    <statistic-bar :unfinished-todos="unfinishedTodos" :finished-todos="finishedTodos"/>

    <h3 v-if="unfinishedTodos!==0">{{ $t('overviews.unfinished') }}</h3>
    <div class="todo-overview">
      <div v-for="todo in items" :key="todo.id" class="list">
        <todo-item :todo="todo" v-if="!todo.done" @remove-todo="deleteTodo"/>
      </div>
    </div>

    <div class="folding-bar" v-if="finishedTodos > 0">
      <h2 :class="`arrow-${this.finishedItemIsHidden ? 'right' : 'down'}`" @click="changeVisibility"></h2>
      <h3>{{ $t('overviews.finished') }}</h3>
    </div>
    <div class="todo-overview" v-if="!finishedItemIsHidden">
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

.todo-list {
  margin-bottom: 50px;
  padding-bottom: 50px;
}

.list {
  margin: 1rem 0;
  /*border: 1px solid var(--dark);*/
}

h3 {
  color: var(--dark);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.folding-bar {
  display: flex;
}

.arrow-down {
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 11px solid black;

  margin-top: 5px;
  margin-right: 5px;

  cursor: pointer;
}

/*todo: hover effect*/
/*.arrow-down:hover {*/
/*  background: rgba(128, 128, 128, 0.5);*/
/*}*/

.arrow-right {
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 11px solid black;

  margin-top: 4px;
  margin-right: 5px;

  cursor: pointer;
}

/*todo: hover effect*/
/*.arrow-right:hover {*/
/*  background: rgba(128, 128, 128, 0.5);*/
/*}*/

</style>