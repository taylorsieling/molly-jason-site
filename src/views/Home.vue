<template>
  <section id="hero" class="h-screen">
    <div class="hero h-full bg-top bg-cover" style="background-image: url(/images/mj-home.jpg);">
      <div class="hero-overlay bg-slate-700/50"></div>
      <div class="hero-content text-center text-white">
        <div>
          <div class="mb-12">
            <p class="text-2xl uppercase tracking-widest mb-6">Save the Date</p>        
            <h1 class="text-8xl playfair uppercase tracking-wider mb-6">Molly & Jason</h1>
            <p class="text-xl uppercase tracking-widest mb-12">are tying the knot</p>
            <p class="text-6xl cormorant italic tracking-wider">April 26, 2025</p>  
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="countdown">
    <div id="cd-container" class="container w-9/12 text-stone-500 mx-auto my-8 p-12">
      <p class="text-xl text-center uppercase tracking-widest mb-12">Let the countdown begin!</p>        
      <vue-countdown :time="time" v-slot="{ days, hours, minutes, seconds }">
        <div class="flex justify-between text-center">
          <div :class=cdClass>
            <span class="text-9xl leading-3 cormorant italic mb-20">{{ days }}</span>
            <span class="text-base tracking-widest">days</span>
          </div>
          <div :class=cdClass>
            <span class="text-9xl leading-3 cormorant italic mb-20">{{ hours }}</span>
            <span class="text-sm tracking-wide">hours</span>
          </div>
          <div :class=cdClass>
            <span class="text-9xl leading-3 cormorant italic mb-20">{{ minutes }}</span>
            <span class="text-sm tracking-wide">minutes</span>
          </div>
          <div :class=cdClass>
            <span class="text-9xl leading-3 cormorant italic mb-20">{{ seconds }}</span>
            <span class="text-sm tracking-wide">seconds</span>
          </div>
        </div>
      </vue-countdown>
    </div>
  </section>
  <section>
    <TwoColSection :rightImage=rightImage>
      <template #supertitle>You are cordially invited to the wedding of</template>
      <template #title>Molly Gosky & <br> Jason Young</template>
      <template #subtitle>April 26, 2025</template>
      <template #content>Charleston, South Carolina</template>
    </TwoColSection>
  </section>
  <section id="invitation">
    <div class="text-center p-12">
      <div class="bg-white w-2/3 py-16 px-12 mx-auto">
        <p class="mb-5 uppercase playfair tracking-wider">You are cordially invited to the wedding of</p>
        <h1 class="mb-10 text-6xl script italic">Molly Gosky & Jason Young</h1>
        <h2 class="mb-5 text-3xl uppercase tracking-widest font-light playfair">April 26, 2025</h2>
        <h2 class="mb-5 text-xl">Charleston, South Carolina</h2>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import VueCountdown from '@chenfengyuan/vue-countdown';
import TwoColSection from '../components/TwoColSection.vue'

export default {
  components: { VueCountdown, TwoColSection },
  data() {
    const now = new Date();
    const weddingDay = new Date('April 26, 2025 18:00:00');

    return {
      btnClass: 'cormorant italic tracking-widest border py-2 px-6 hover:scale-110 transition duration-300 ease-in-out',
      cdClass: 'flex flex-col basis-1/4 justify-center uppercase p-2',
      rightImage: '/images/mj-beachlaugh.jpg',
      time: weddingDay - now,
    };
  },
};
</script>

<style>

</style>
