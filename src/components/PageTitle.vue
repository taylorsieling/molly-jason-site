<template>
  <div class="hero h-96 bg-top" :style=titleImage>
    <div :class=overlayClass class="hero-overlay"></div>
    <div class="hero-content text-center text-white">
      <div class="max-w-md">
        <h1 class="mb-5 text-4xl muli uppercase font-light tracking-wider">
          <slot name="title"></slot>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      overlayClass: String,
      titleImage: String
    }
  }
</script>

<style>

</style>
