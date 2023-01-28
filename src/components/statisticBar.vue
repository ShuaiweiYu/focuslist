<template>
  <div>
    <h2 v-if="finishedTodos!==0 || unfinishedTodos !==0">Todo Overview</h2>
    <div class="statistic">
      <p v-if="unfinishedTodos !== 0">Number of todos: {{unfinishedTodos}}</p>
      <p v-if="finishedTodos !== 0">Number of finished todos: {{finishedTodos}}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "statisticBar",
  props: ["finishedTodos", "unfinishedTodos"],
}
</script>

<style scoped>
p {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: whitesmoke;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
}

.statistic {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin-bottom: 1.5rem;
  max-width: 700px;
}
</style>