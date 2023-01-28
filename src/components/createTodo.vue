<template>
  <section class="create-todo">
    <h2>Create Todo</h2>
    <form @submit.prevent="addTodoItem">

      <h4>what do you have in mind?</h4>
      <input type="text" placeholder="type your todo here" v-model="input"/>

      <h4>pick a priority</h4>
      <div class="options">
        <label>
          <input type="radio" name="category" value="high" v-model="priority"/>
          <span class="bubble high"></span>
          high
        </label>

        <label>
          <input type="radio" name="category" value="medium" v-model="priority"/>
          <span class="bubble medium"></span>
          medium
        </label>

        <label>
          <input type="radio" name="category" value="normal" v-model="priority"/>
          <span class="bubble normal"></span>
          normal
        </label>
      </div>

      <input type="submit" value="Add todo"/>
    </form>

  </section>
</template>

<script>
export default {
  name: "createTodo",
  props: ["items"],
  data() {
    return {
      input: "",
      priority: "normal",
    }
  },methods: {
    addTodoItem() {
      if (this.input.trim() === "" || this.priority === "null") {
        this.input = "";
        this.priority = "normal";
        return;
      }

      this.items.push({
        id: this.items.length + 1,
        title: this.input,
        done: false,
        category: this.priority
      });
      this.input = "";
      this.priority = "normal";
    }
  }
}
</script>

<style scoped>
.create-todo input[type="text"] {
  display: block;
  width: 100%;
  font-size: 1.125rem;
  padding: 1rem 1.5rem;
  color: var(--dark);
  background-color: #FFF;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
  margin-bottom: 1.5rem;
}

.create-todo .options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin-bottom: 1.5rem;
  max-width: 500px;
}

.create-todo .options label {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #FFF;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
  cursor: pointer;
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

input:checked ~ .bubble::after {
  width: 10px;
  height: 10px;
  opacity: 1;
}

.create-todo .options label div {
  color: var(--dark);
  font-size: 1.125rem;
  margin-top: 1rem;
}

.create-todo input[type="submit"] {
  display: block;
  width: 100%;
  font-size: 1.125rem;
  padding: 1rem 1.5rem;
  color: #FFF;
  background-color: var(--theme);
  border-radius: 0.5rem;
  box-shadow: var(--theme-glow);
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.create-todo input[type="submit"]:hover {
  opacity: 0.75;
}
</style>