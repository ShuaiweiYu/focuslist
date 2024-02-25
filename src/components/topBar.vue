<template>
  <h1 class="top">Focus List</h1>

  <div class="language-dropdown">
    <button @click="toggleLanguageMenu">
      <img :src="langImage" alt="language" width="20" height="20"/>
    </button>
    <ul v-show="showLanguageMenu">
      <li class="option" @click="switchLanguage('en-US')">English</li>
      <li class="option" @click="switchLanguage('zh-CN')">中文</li>
    </ul>
  </div>

  <section class="greeting">
    <h2 class="title">
      {{ greeting }} <input type="text" :placeholder="$t('topBar.name')" v-model="name"/>
    </h2>
  </section>
</template>

<script>
import translationImage from "@/assets/translation.png";

export default {

  name: "topBar",
  data() {
    return {
      greeting: this.$t("topBar.greeting"),
      name: "",
      showLanguageMenu: false,
      langImage: translationImage
    }
  }, methods: {
    getGreeting() {
      const hour = new Date().getHours();
      if (hour < 12) {
        return this.$t("topBar.morning");
      } else if (hour < 18) {
        return this.$t("topBar.afternoon");
      } else {
        return this.$t("topBar.evening");
      }
    },
    toggleLanguageMenu() { // 新增，用于切换下拉菜单的显示状态
      this.showLanguageMenu = !this.showLanguageMenu;
    },
    switchLanguage(lang) { // 新增，用于切换语言
      this.$i18n.locale = lang;
      this.greeting = this.getGreeting(); // 切换语言后更新问候语
      this.showLanguageMenu = false; // 切换语言后隐藏下拉菜单
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

.language-dropdown {
  position: absolute;
  display: inline-block;
  margin: 1rem;
  top: 2px;
  right: 20px;
  width: 80px;
}

.language-dropdown button {
  background-color: #FFF;
  color: var(--theme);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.option {
  list-style: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  border-radius: 0.5rem;
  background-color: #FFF;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

</style>