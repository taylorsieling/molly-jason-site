<template>
  <div class="flex flex-wrap md:flex-nowrap justify-between items-start static">
    <div class="h-full hero lg:basis-1/3">
      <img class="h-72 md:min-h-screen w-full object-top object-cover self-auto" src="/images/mj-greenery.jpeg">
      <div class="hero-overlay bg-zinc-700/40"></div>
    </div>
    <div class="lg:basis-2/3 p-16">
      <Timeline />
    </div>
  </div>
</template>

<script>
import Timeline from '../components/TimeLine.vue'

export default {
  components: { Timeline }

};
</script>

<style>

</style>
