<!--https://www.youtube.com/watch?v=61nRQynJI20-->
<!--https://www.youtube.com/watch?v=Kp6qajvTgS4-->

<template>

  <section class="clock-setting">
    <div class="center">
      <div v-if="!timerOn">
        <h4>{{ $t('pomodoro.work') }}</h4>
        <input type="number" v-model="workingMinutes" min="1">
        {{ $t('pomodoro.time') }}
        <h4>{{ $t('pomodoro.rest') }}</h4>
        <input type="number" v-model="restingMinutes" min="1">
        {{ $t('pomodoro.time') }}
        <button class="space" @click="startTimer">{{ $t('pomodoro.start') }}</button>
      </div>
      <div v-else>
        <h2 class="title" v-if="this.isWorking">{{ $t('pomodoro.leftWorkTime') }}{{ displayTime }}</h2>
        <h2 class="title" v-if="this.isResting">{{ $t('pomodoro.leftRestTime') }}{{ displayTime }}</h2>
        <button class="space" @click="resetTimer">{{ $t('pomodoro.stop') }}</button>
      </div>
    </div>
  </section>

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
.clock-setting input[type="number"] {
  //appearance: auto;
  font-size: 1.125rem;
  padding: 1rem 1.5rem;
  //color: #FFF;
  //background-color: var(--theme);
  border-radius: 0.5rem;
  box-shadow: var(--theme-glow);
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.clock-setting button {
  display: block;
  font-size: 1.125rem;
  padding: 1rem 1.5rem;
  color: #FFF;
  background-color: var(--theme);
  border-radius: 0.5rem;
  box-shadow: var(--theme-glow);
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.clock-setting .title {
  display: flex;
}

.clock-setting .space {
  margin: 1rem;
}

.clock-setting .center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>