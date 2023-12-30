<template>
  <PageTitle :titleImage=titleImage overlayClass="bg-zinc-700/40">
    <template #title>Travel & Accomodations</template>
  </PageTitle>
  <CenteredTextSection class="p-4 md:py-4 md:px-48">
    <template #supertitle>We are so excited to have all of our favorite people in one place!</template>
    <template #title>Charleston, South Carolina</template>
    <template #content>
      As we get closer to the big day, we will share plenty of information to make your travel as easy as possible, including lodging recommendations, transporation information, and the best ways to get around Charleston. We will even put together a guide to our favorite Charleston restaurants, hangouts, and activities. 
    </template>
  </CenteredTextSection>
  <hr>
  <div class="p-4 md:py-4 md:px-48">
    <ImageLeftSection :imgSrc=venueImage>
      <template #supertitle>The Venue</template>
      <template #title>Charleston Harbor Resort & Marina</template>
      <template #content>
        20 Patriots Point Road <br>
        Mount Pleasant, South Carolina 29464 <br>
        Phone: (843) 856-0028
      </template>
    </ImageLeftSection>
    <ImageRightSection :imgSrc=ceremonyImage>
      <template #supertitle>The Ceremony</template>
      <template #title>Harborside Beach</template>
      <template #content>
        Our ceremony will take place on the Harborside Beach at the Charleston Harbor Resort and Marina. Please take the sand and outdoor nature of the event into consideration when choosing your outfit and footware.
      </template>
    </ImageRightSection>
  </div>
  
  <!-- <div class="bg-primary text-white text-center p-8 md:py-4 md:px-48">
    <h3 class="text-4xl cormorant uppercase tracking-widest p-4">Lodging</h3>
    <p class="text-md leading-relaxed mb-4">We have room blocks at the following hotels - just mention the "Gosky/Young Wedding" when making your reservations.</p>
    <div class="flex flex-col lg:flex-row justify-center text-center text-zinc-800">
      <div class="lg:basis-1/3 m-2 p-8 bg-white sharp-right">
        <p></p>
      </div>
      <div class="lg:basis-1/3 m-2 p-8 bg-white sharp-right"></div>
      <div class="lg:basis-1/3 m-2 p-8 bg-white sharp-right">
        <h4>Charleston Harbor Resort & Marina</h4>
        <p>
          20 Patriots Point Rd <br>
          Mt Pleasant, SC 29464
        </p>
      </div>
    </div>
  </div> -->
</template>

<script>
  import ImageLeftSection from '../components/ImageLeftSection.vue';
  import ImageRightSection from '../components/ImageRightSection.vue';
  import PageTitle from '../components/PageTitle.vue';
  import CenteredTextSection from '../components/CenteredTextSection.vue';

  export default {
    components: { ImageLeftSection, ImageRightSection, PageTitle, CenteredTextSection },
    data() {
      return {
        ceremonyImage: 'https://www.charlestonharborresort.com/files/3792/img-harborsideresort-006.jpg',
        titleImage: 'background-image: url(/images/mj-dunes.jpg)',
        venueImage: 'https://www.charlestonharborresort.com/files/3792/img-beachclub-001.jpg'
      }
    }
  };
</script>
