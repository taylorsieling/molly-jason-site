<template>
  <section>
    <!-- Hero Image -->
    <div id="hero w-100 m-4">
      <img src="/images/molly-jason-achandler-316.jpg">
    </div>
    <!-- Invitation -->
    <div id="welcome" class="text-center">
      <div class="mt-10">
        <p class="mb-5 italic">You are cordially invited to the wedding of</p>
        <h1 class="mb-10 text-6xl script italic">Molly Gosky & Jason Young</h1>
        <h2 class="mb-5 text-3xl uppercase">April 26, 2025</h2>
        <h2 class="mb-5 text-xl">Charleston, South Carolina</h2>
      </div>
    </div>
    <!-- Countdown -->
    <div class="text-center text-4xl">
      <h1>JUST THE TWO OF US</h1>
      <vue-countdown :time="time" v-slot="{ days, hours, minutes, seconds }">
        {{ days }} days, {{ hours }} hours, {{ minutes }} minutes
      </vue-countdown>
    </div>
  </section>
</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown';

export default {
  components: { VueCountdown },
  data() {
    const now = new Date();
    const weddingDay = new Date('April 26, 2025 18:00:00');
    console.log(weddingDay)

    return {
      time: weddingDay - now,
    };
  },
};
</script>

<style lang="scss" scoped></style>
