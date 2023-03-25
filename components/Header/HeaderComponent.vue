<template>
  <div class="flex flex-col bg-brown-10 overflow-hidden header-radius">
    <HeaderNavBar />
    <HeaderHero />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.header-radius {
  border-bottom-left-radius: 30rem 2.5rem;
  border-bottom-right-radius: 30rem 2rem;
}

@media only screen and (max-width: 1024px) {
  .header-radius {
    border-bottom-left-radius: 20rem 12rem;
    border-bottom-right-radius: 20rem 12rem;
  }
}
</style>
