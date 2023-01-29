<script>

import TodoOverview from "@/components/todoOverview.vue";
import TodoItem from "@/components/todoItem.vue";
import TopBar from "@/components/topBar.vue";
import CreateTodo from "@/components/createTodo.vue";

export default {
  name: "App",
  components: {CreateTodo, TodoOverview, TodoItem, TopBar},
  data() {
    return {
      items: []
    }
  }, methods: {

  }, mounted() {
    this.items = JSON.parse(localStorage.getItem('items')) || []
  }, created() {
    document.title = "Focus List"
  },
  watch: {
    items: {
      deep: true,
      handler: (newVal) => {
        localStorage.setItem('items', JSON.stringify(newVal))
      }
    }
  }
}

</script>

<template>
  <top-bar/>
  <create-todo :items="items"/>
<!--  {{ items }}-->
  <todo-overview :items="items"/>
</template>

<style>

body {
  background: var(--light);
  color: var(--dark);
}

:root {
  --theme: rgb(93, 157, 238);

  --light: #EEE;
  --grey: #888;
  --dark: #313154;
  --danger: #fd4440;

  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  --theme-glow: 0px 0px 4px rgba(93, 157, 238, 0.75);

  --high: #ea0909;
  --medium: orange;
  --normal: green;

  --high-glow: 0px 0px 4px rgba(238, 10, 10, 0.75);
  --medium-glow: 0px 0px 4px rgba(232, 185, 55, 0.75);
  --normal-glow: 0px 0px 4px rgba(0, 255, 0, 0.75);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'montserrat', sans-serif;
}

input:not([type="radio"]):not([type="checkbox"]), button {
  appearance: none;
  border: none;
  outline: none;
  background: none;
  cursor: initial;
}

section {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5em;
}

h3 {
  color: var(--dark);
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
}

h4 {
  color: var(--grey);
  font-size: 0.875rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

input[type="radio"],
input[type="checkbox"] {
  display: none;
}

.bubble {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid;
  margin-right: 5px;
}

.bubble::after {
  content: "";
  display: block;
  opacity: 0;
  width: 0;
  height: 0;
  border-radius: 50%;
  transition: 0.2s ease-in-out;
}

.bubble.high {
  border-color: var(--high);
  box-shadow: var(--high-glow);
}

.bubble.high::after {
  background-color: var(--high);
  box-shadow: var(--high-glow);
}

.bubble.medium {
  border-color: var(--medium);
  box-shadow: var(--medium-glow);
}

.bubble.medium::after {
  background-color: var(--medium);
  box-shadow: var(--medium-glow);
}

.bubble.normal {
  border-color: var(--normal);
  box-shadow: var(--normal-glow);
}

.bubble.normal::after {
  background-color: var(--normal);
  box-shadow: var(--normal-glow);
}

</style>
