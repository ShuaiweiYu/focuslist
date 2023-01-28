<template>
  <h1 class="top">Focus List</h1>

  <section class="greeting">
    <h2 class="title">
      {{ greeting }} <input type="text" placeholder="type your name here" v-model="name"/>
    </h2>
  </section>
</template>

<script>
export default {
  name: "topBar",
  data() {
    return {
      greeting: "Hello, ",
      name: ""
    }
  }, methods: {
    getGreeting() {
      const hour = new Date().getHours();
      if (hour < 12) {
        return "Good morning, ";
      } else if (hour < 18) {
        return "Good afternoon, ";
      } else {
        return "Good evening, ";
      }
    }
  },
  mounted() {
    this.name = localStorage.getItem("name") || "";
    this.greeting = this.getGreeting();
  }, watch: {
    name: (newVal) => {
      localStorage.setItem("name", newVal);
    }
  }
}
</script>

<style scoped>

.top {
  background-color: rgb(93, 157, 238);
  color: rgb(236, 236, 236);
  padding: 1rem;
}

.greeting .title {
  display: flex;
}

.greeting .title input {
  margin-left: 0.5rem;
  flex: 1 1 0;
  min-width: 0;
}

.greeting .title,
.greeting .title input {
  color: var(--dark);
  font-size: 1.5rem;
  font-weight: 700;
}

</style>