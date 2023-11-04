<template>
  <PageTitle :titleImage=titleImage overlayClass="bg-zinc-700/40">
    <template #title>Our Story</template>
  </PageTitle>
  <div class="mt-24">
    <div class="p-4 md:py-4 md:px-48">
      <ImageLeftSection :imgSrc=meetingImage>
        <template #supertitle>It all started...</template>
        <template #title>January 2018</template>
        <template #content>
          Molly and Jason met back in January 2018 at the Hope Lodge. I have no idea what Molly wants to write here, so I will go ahead and type some nonsense as a placeholder. All I know is that I heard about Jason on the phone a whole bunch for a long time. Who knows how much detail we will actually get in here, but I hope there is enough to make this section look all nice and filled out.
        </template>
      </ImageLeftSection>
    </div>
    <div class="p-4 md:py-4 md:px-48">
      <ImageRightSection :imgSrc=engagementImage>
        <template #supertitle>He popped the question in...</template>
        <template #title>May 2022</template>
        <template #content>
          A vacation to New York City turned out to be the trip of a lifetime when Jason got down on one knee and asked Molly to marry him! Finally! Then we can write something here about Central Park and all of the fun New York things that they did on the trip. Did they see a Broadway show? Did they go to the National Museum of Natural History and lie down underneath the whale? The world may never know. But they probably will when I talk to Molly about it.
        </template>
      </ImageRightSection>
    </div>
    <div class="p-4 md:py-4 md:px-48">
      <ImageLeftSection :imgSrc=anotherImage>
        <template #supertitle>The new chapter begins...</template>
        <template #title>April 2025</template>
        <template #content>
          Molly and Jason are so excited to see you while they exchange vows! Can I go where you go? Can we always be this close? Forever and ever and I - take me out and take me home. You're my, my, my, my lover. Ladies and gentlemen will you please stand. With every guitar string scar on my hand, I take this magnetic force of a man to be my lover.
        </template>
      </ImageLeftSection>
    </div>
  </div>

</template>

<script>
import PageTitle from '../components/PageTitle.vue';
import ImageLeftSection from '../components/ImageLeftSection.vue';
import ImageRightSection from '../components/ImageRightSection.vue';

export default { 
  components: { ImageLeftSection, ImageRightSection, PageTitle },
  data() {
    return {
      anotherImage: '/images/mj-toast.jpeg',
      engagementImage: '/images/mj-engagement.jpg',
      titleImage: 'background-image: url(/images/mj-holdinghands.jpg)',
      meetingImage: '/images/mj-ukgame.jpg'
    }
  } 
};
</script>

<style lang="scss" scoped></style>
