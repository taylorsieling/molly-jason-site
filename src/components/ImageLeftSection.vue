<template>
  <div class="flex flex-wrap md:flex-nowrap justify-start md:justify-around">
    <div class="md:basis-1/3 md:p-6">
      <img id="side-image" class="sharp-left" :src=imgSrc>
    </div>
    <div class="md:basis-2/3 md:p-6 mt-4 md:mt-0 text-center md:text-left">
      <div class="min-w-3 mt-8">
        <h2 class="text-sm uppercase tracking-wide mb-4 ">
          <slot name="supertitle"></slot>
        </h2>
        <h3 class="cormorant text-6xl mb-4">
          <slot name="title"></slot>
        </h3>
        <p class="text-md leading-relaxed mb-4">
          <slot name="content"></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      imgSrc: String
    }
  }
</script>

<style>
#side-image {
  min-width: 365px;
  height: 432px;
  object-fit: cover;
}

.sharp-left {
  border-top-right-radius: 5rem;
  border-bottom-left-radius: 5rem;
  border-bottom-right-radius: 5rem;
}
</style>
