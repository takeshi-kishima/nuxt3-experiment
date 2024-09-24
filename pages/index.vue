<script setup lang="ts">
console.log("メイン画面");
</script>

<template>
  <div>
    メイン画面
    <!-- 5回ループして<NuxtLink to="/users/[]">タグを書く -->
    <div
      v-for="i in 5"
      :key="i"
    >
      <NuxtLink :to="`/users/${i}`">
        ユーザー{{ i }}
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
