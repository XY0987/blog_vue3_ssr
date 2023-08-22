<template>
  <div
    class="app"
    style="border: 1px solid red"
  >
    <h2>Vue App</h2>
    <div>{{ count }}</div>
    <button @click="addCounter">+1</button>
    <hr />
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script setup>
import { ref } from "vue";

const count = ref(0);
const addCounter = () => {
  count.value++;
};
</script>

<style scoped></style>
