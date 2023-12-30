<template>
  <div :style=bgImage>
    <div class="w-2/3 p-2 pt-12">
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
