<!--https://www.youtube.com/watch?v=61nRQynJI20-->
<!--https://www.youtube.com/watch?v=Kp6qajvTgS4-->

<template>

<div>
    <div v-if="!timerOn">
      <input type="number" v-model="workingMinutes" min="1" placeholder="输入分钟数">
      <button @click="startTimer">开始番茄钟</button>
    </div>
    <div v-else>
      <div>{{ displayTime }}</div>
      <button @click="resetTimer">重置番茄钟</button>
    </div>
  </div>

</template>

<script>
export default {
  name: "clockSetting",
  data() {
    return {
      workingMinutes: 25,
      workingSeconds: 0,
      isWorking : true,
      restingMinutes: 10,
      restingSeconds: 0,
      isResting: false,
      timerOn: false,
      timer: null
    };
  }, computed: {
    displayTime() {
      if (this.isWorking) {
        return `${this.padZero(this.workingMinutes)}:${this.padZero(this.workingSeconds)}`;
      } else{
        return `${this.padZero(this.restingMinutes)}:${this.padZero(this.restingSeconds)}`;
      }
      
    }
  },
  methods: {
    startTimer() {
      this.timerOn = true;
      this.timer = setInterval(this.countDown, 1000);
    },
    countDown() {
      if (this.isWorking) {
        if (this.workingMinutes === 0 && this.workingSeconds === 0) {
          // clearInterval(this.timer);
          // this.timerOn = false;
          // alert('番茄钟时间到！');
          // return;
          this.isWorking = false
          this.isResting = true
        }
        if (this.workingSeconds === 0) {
          this.workingMinutes--;
          this.workingSeconds = 59;
        } else {
          this.workingSeconds--;
        }
      } else {
        if (this.restingMinutes === 0 && this.restingSeconds === 0) {
          // clearInterval(this.timer);
          // this.timerOn = false;
          // alert('番茄钟时间到！');
          // return;
          this.isWorking = true
          this.isResting = false
        }
        if (this.restingSeconds === 0) {
          this.restingMinutes--;
          this.restingSeconds = 59;
        } else {
          this.restingSeconds--;
        }
      }
    },
    resetTimer() {
      clearInterval(this.timer);
      this.timerOn = false;
      this.workingMinutes = 25;
      this.workingSeconds = 0;
    },
    padZero(num) {
      return num < 10 ? '0' + num : num;
    }
  }
}
</script>

<style scoped>

</style>