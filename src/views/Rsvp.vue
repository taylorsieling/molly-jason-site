<template>
  <PageTitle :titleImage=titleImage overlayClass="bg-slate-600/30">
    <template #title>RSVP</template>
  </PageTitle>
  <CenteredTextSection>
    <template #supertitle>We hope you can join us on our special day.</template>
    <template #title>Invitations are coming soon!</template>
    <template #content>Official invitations will be sent out in 2024. Once you receive your invitation, you can revisit this page to send in your RSVP.</template>
  </CenteredTextSection>
</template>

<script>
import PageTitle from '../components/PageTitle.vue';
import CenteredTextSection from '../components/CenteredTextSection.vue';

export default {
  components: { CenteredTextSection, PageTitle },
  data() {
    return {
      titleImage: 'background-image: url(/images/mj-rsvp.jpg)'
    }
  }
};
</script>

<style></style>
