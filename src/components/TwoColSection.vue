<template>
  <div class="flex flex-wrap md:flex-nowrap justify-start md:justify-around mx-auto w-10/12">
    <div class="basis-1/2 p-4 md:p-6 text-center bg-primary text-white">
      <p class="mb-5 uppercase cormorant tracking-wider">
        <slot name="supertitle" ></slot>
      </p>
      <p class="">
        <slot name="title"></slot>
      </p>
      <p class="mb-5 text-3xl uppercase tracking-widest">
        <slot name="subtitle"></slot>
      </p>
      <p class="mb-5 text-xl cormorant tracking-wider">
        <slot name="content"></slot>
      </p>
    </div>
    <div class="hero basis-1/2">
      <img :src=rightImage class="object-cover" alt="Molly and Jason hold hands on the beach.">
      <div class="hero-overlay bg-slate-600/20"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      rightImage: String
    }
  }
</script>
