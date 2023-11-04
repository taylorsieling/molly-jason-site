<template>
  <div class="flex flex-wrap-reverse md:flex-nowrap justify-end md:justify-around text-end">
    <div class="basis-2/3 p-2 md:px-8 mt-4 md:mt-0">
      <div class="min-w-3 mt-8">
        <h2 class="text-sm uppercase tracking-wide mb-4">
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
    <div class="basis-1/3 p-2 md:px-8">
      <img id="side-image" class="sharp-right" :src=imgSrc>
    </div>
  </div>
</template>

<script>
  export default {
    props: { 
      imgSrc: String
    },
  }
</script>

<style>
.sharp-right {
  border-top-left-radius: 5rem;
  border-bottom-left-radius: 5rem;
  border-bottom-right-radius: 5rem;
}
</style>
