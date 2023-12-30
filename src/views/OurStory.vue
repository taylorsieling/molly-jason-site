<template>
  <PageTitle :titleImage=titleImage overlayClass="bg-zinc-700/40">
    <template #title>Our Story</template>
  </PageTitle>
  <div class="mt-24">
    <div class="p-4 md:py-4 md:px-48">
      <ImageLeftSection :imgSrc=meetingImage>
        <template #supertitle>It all started...</template>
        <template #title>2015</template>
        <template #content>
          Molly and Jason met in 2015 at the Hope Lodge. Molly was doing a college internship for class credit. She was pretty set on working in oncology and wanted some applicable experience. They became fast friends talking about everything under the sun but especially Taylor Swift and The Kentucky Wildcats. After the internship was over, they kept their friendship going and started tailgating together. Eventually they figured out they liked each other a whole lot more than friends.
        </template>
      </ImageLeftSection>
    </div>
    <div class="p-4 md:py-4 md:px-48">
      <ImageRightSection :imgSrc=engagementImage>
        <template #supertitle>He popped the question in...</template>
        <template #title>May 2022</template>
        <template #content>
          A vacation to New York City turned out to be the trip of a lifetime when Jason got down on one knee and asked Molly to marry him! Finally! They had tons of fun exploring the city and seeing The Book of Mormon on Broadway. Jason surprised Molly with reservations at her favorite restaurant in the world, Tamarind on the night they got engaged. They ordered a mango martini and bourbon to toast to a bright future together.
        </template>
      </ImageRightSection>
    </div>
    <div class="p-4 md:py-4 md:px-48">
      <ImageLeftSection :imgSrc=anotherImage>
        <template #supertitle>The new chapter begins...</template>
        <template #title>April 2025</template>
        <template #content>
          Charleston holds a special place for Molly as her family vacations almost every year in Kiawah Island, SC. Her parents honeymooned there almost 32 years ago!! Molly and Jason are so excited to see you while they exchange vows! Their weekend in Charleston is bound to be straight out of Love Story…baby just say yes!! 
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
