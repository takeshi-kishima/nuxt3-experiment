<script setup></script>

<template>
  <div>
    <header>header</header>
    <slot /><!-- 子要素 -->
    <footer>&copy; foot</footer>
  </div>
</template>

<style scoped>
header {
  background: #00000042;
  color: #fff;
  text-align: center;
}
footer {
  background: #00000042;
  text-align: center;
}
</style>
