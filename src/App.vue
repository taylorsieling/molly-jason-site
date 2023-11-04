<script setup>
import NavBar from "./components/NavBar.vue"
import Footer from "./components/Footer.vue";
</script>

<template>
  <NavBar />
  <main class="bg-white w-full mt-12 before:static after:static">
    <RouterView />
  </main>
  <Footer></Footer>
</template>
