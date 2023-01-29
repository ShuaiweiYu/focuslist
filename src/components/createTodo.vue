<template>
  <section class="create-todo">

    <div class="folding-bar">
      <h2 :class="`arrow-${this.isVisible ? 'down' : 'right'}`"  @click="toggleVisibility"></h2>
      <h2>Create Todo</h2>
    </div>

    <form @submit.prevent="addTodoItem" v-if="isVisible">

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
      isVisible: true
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
    },
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    }
  }
}
</script>

<style scoped>

.folding-bar {
  display: flex;
}

.arrow-down {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 17px solid black;

  margin-top: 10px;
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
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 17px solid black;

  margin-top: 7px;
  margin-right: 5px;

  cursor: pointer;
}

/*todo: hover effect*/
/*.arrow-right:hover {*/
/*  background: rgba(128, 128, 128, 0.5);*/
/*}*/

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