<template>
  <div class="bg-right-top bg-no-repeat p-8 md:py-4 md:px-48" :style=bgImage>
    <div class="w-2/3 pt-12">
      <p class="text-sm uppercase tracking-wide mb-4">
        <slot name="supertitle"></slot>
      </p>
      <p class="cormorant text-6xl mb-4">
        <slot name="title"></slot>
      </p>
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
