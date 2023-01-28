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
  --primary: #EA40A4;

  --light: #EEE;
  --grey: #888;
  --dark: #313154;
  --danger: #ff5b57;

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

</style>
