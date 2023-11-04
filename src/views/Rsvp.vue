<template>
  <PageTitle :titleImage=titleImage overlayClass="bg-slate-600/30">
    <template #title>RSVP</template>
  </PageTitle>
</template>

<script>
import PageTitle from '../components/PageTitle.vue';

export default {
  data() {
    return {
      titleImage: 'background-image: url(/images/mj-rsvp.jpg)'
    }
  },
  components: { PageTitle }
};
</script>

<style></style>
