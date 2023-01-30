<!--https://www.youtube.com/watch?v=61nRQynJI20-->
<!--https://www.youtube.com/watch?v=Kp6qajvTgS4-->

<template>

  <div class="actions">
    <button class="delete" @click="getCurrentTime">clock</button>
  </div>

</template>

<script>
export default {
  name: "clockSetting",
  data() {
    return {
      workingTimePlanned: 45,
      breakTimePlanned: 15,
      currentTime: "",
    }
  }, methods: {
    getCurrentTime() {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      console.log(`${hours}:${minutes}:${seconds}`);
    }
  }
}
</script>

<style scoped>
.actions .delete {
  background-color: var(--danger);
}
</style>