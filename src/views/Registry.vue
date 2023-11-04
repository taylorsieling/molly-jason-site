<template>
  <PageTitle :titleImage=titleImage overlayClass="bg-zinc-700/40">
    <template #title>Registry</template>
  </PageTitle>
</template>

<script>
import PageTitle from '../components/PageTitle.vue';

export default {
  data() {
    return {
      titleImage: 'background-image: url(/images/mj-registry.jpg)'
    }
  },
  components: { PageTitle }
};
</script>

<style></style>
