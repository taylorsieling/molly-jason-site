<template>
  <div class="bg-left-top bg-no-repeat p-8 md:py-4 md:px-48" :style=bgImage>
    <div class="w-2/3 pt-12">
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
</template>

<script>
  export default {
    props: {
      bgImage: String
    }
  }
</script>

<style>

</style>
