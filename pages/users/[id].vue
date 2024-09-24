<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div>
    <h1>users/{{ route.params.id }}</h1>
  </div>
</template>

<style scoped></style>
