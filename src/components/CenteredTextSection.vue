<template>
  <div class="text-center p-8 md:py-4 md:px-48">
    <div class="pt-12">
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
    
  }
</script>

<style>

</style>
