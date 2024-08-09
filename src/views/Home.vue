<template>
  <section id="hero" class="h-screen max-w-full">
    <div class="hero h-full bg-top bg-cover" style="background-image: url(/images/mj-home.jpg);">
      <div class="hero-overlay bg-slate-700/50"></div>
      <div class="hero-content text-center text-white">
        <div class="max-w-2xl">
          <div class="mb-12">
            <p class="text-2xl uppercase cormorant tracking-widest mb-4">Save the Date</p>
            <div class="w-full h-full p-4">
              <FirstNames id="hero-svg" class="max-w-md md:max-w-xl" alt="Molly and Jason"/>
            </div>
            <p class="text-xl uppercase cormorant tracking-widest mt-4 mb-12">are tying the knot</p>
            <p class="text-6xl cormorant italic tracking-wider">April 26, 2025</p>  
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="countdown">
    <div id="cd-container" class="container w-9/12 mx-auto p-12 mt-8">
      <p class="text-xl text-center uppercase tracking-widest mb-12">Let the countdown begin!</p>        
      <vue-countdown :time="time" v-slot="{ days, hours, minutes, seconds }">
        <div class="flex flex-col md:flex-row justify-between text-center">
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
  <section id="photo-section">
    <div class="max-w-3xl mx-auto">
      <img :src=rightImage class="object-cover" alt="Molly and Jason hold hands on the beach.">
      <div class="hero-overlay bg-slate-600/20"></div>
    </div>
  </section>
  <section id="invitation">
    <div class="text-center">
      <div class="bg-white w-2/3 py-16 px-12 mx-auto">
        <p class="mb-5 uppercase cormorant tracking-wider">You are cordially invited to the wedding of</p>
        <div><FullNames /></div>
        <h2 class="mb-5 text-3xl uppercase tracking-widest">April 26, 2025</h2>
        <h2 class="mb-5 text-xl cormorant tracking-wider">Charleston, South Carolina</h2>
      </div>
    </div>
  </section>
  <section id="photo-corousel" class="p-8">
    <div>
      <div class="carousel rounded-box">
        <div class="carousel-item ">
          <img src="/images/c-1.jpg" class="object-cover"/>
        </div>
        <div class="carousel-item">
          <img src="/images/c-2.jpg" class="object-cover"/>
        </div>
        <div class="carousel-item">
          <img src="/images/c-3.jpg" class="object-cover"/>
        </div>
        <div class="carousel-item">
          <img src="/images/c-4.jpg" class="object-cover"/>
        </div>
        <div class="carousel-item">
          <img src="/images/c-5.jpg" class="object-cover"/>
        </div>
        <div class="carousel-item">
          <img src="/images/c-6.jpg" class="object-cover"/>
        </div>
        <div class="carousel-item">
          <img src="/images/c-7.jpg" class="object-cover"/>
        </div>
        <div class="carousel-item">
          <img src="/images/c-8.jpg" class="object-cover"/>
        </div>
        <div class="carousel-item">
          <img src="/images/c-9.jpg" class="object-cover"/>
        </div>
      </div>
    </div>
  </section>
    <!-- <section>
    <TwoColSection :rightImage=rightImage>
      <template #supertitle>You are cordially invited to the wedding of</template>
      <template #title>
        <div><FullNames /></div>
      </template>
      <template #subtitle>April 26, 2025</template>
      <template #content>Charleston, South Carolina</template>
    </TwoColSection>
  </section> -->
</template>

<script lang="ts">
import VueCountdown from '@chenfengyuan/vue-countdown';
import TwoColSection from '../components/TwoColSection.vue'
import FullNames from '../assets/FullNames.vue';
import FirstNames from '../assets/FirstNames.vue';

export default {
  components: { VueCountdown, TwoColSection, FullNames, FirstNames },
  data() {
    const now = new Date();
    const weddingDay = new Date('April 26, 2025 18:00:00');

    return {
      btnClass: 'cormorant italic tracking-widest border py-2 px-6 hover:scale-110 transition duration-300 ease-in-out',
      cdClass: 'flex flex-col basis-1/4 justify-center uppercase mb-8 p-2',
      rightImage: '/images/mj-dunes.jpg',
      time: weddingDay.getTime() - now.getTime(),
    };
  },
};
</script>

<style>
  #hero-svg {
    width: 400px;
  }

  .hero-content {
    max-width: 5rem;
  }

  .carousel-item > .object-cover {
    width: 300px;
    height: 400px;
  }
</style>
