<template>
  <div class="text-center p-4 md:py-4 md:px-8">
    <div class="pt-12 p-2 md:p-8 md:max-w-5xl mx-auto">
      <section v-if="formData.response" class="notification">
        <h2>{{ formData.response }}</h2>
      </section>
      <p class="text-xl italic leading-relaxed mb-4"> RSVP for {{ selectedRes.reservationName }} </p>
      <div class="mt-2 mx-auto">
        <form name="rsvp" method="post" @submit.prevent="submitForm" data-netlify="true" data-netlify-honeypot="bot-field">
          <div v-for="(guest, index) in selectedRes.guests" :key="guest.firstName">
            <div class="flex items-start justify-center gap-4">
              <p class="basis-1/3 pt-2">{{ guest.firstName }} {{ guest.lastName }}</p>
              <div class="basis-2/3">
                <div v-if="guest.dinnerInvite" id="welcome-dinner" class="form-control">
                  <label :for="`${index}-dinner`" class="label cursor-pointer justify-start gap-2">
                    <input :id="`${index}-dinner`" v-model="guest.dinnerRsvp" type="checkbox" class="checkbox checkbox-sm" name="dinner"/>
                    <span class="label-text">Welcome Dinner</span>
                  </label>
                </div>
                <div id="welcome-party" class="form-control">
                  <label :for="`${index}-party`" class="label cursor-pointer justify-start gap-2">
                    <input :id="`${index}-party`" v-model="guest.partyRsvp" type="checkbox" class="checkbox checkbox-sm" name="party"/>
                    <span class="label-text">Welcome Party</span>
                  </label>
                </div>
                <div id="ceremony" class="form-control">
                  <label :for="`${index}-ceremony`" class="label cursor-pointer justify-start gap-2">
                    <input :id="`${index}-ceremony`" v-model="guest.ceremonyRsvp" type="checkbox" class="checkbox checkbox-sm" name=ceremony/>
                    <span class="label-text">Ceremony/Reception</span>
                  </label>
                </div>
              </div>
            </div>
            <div v-if="index < selectedRes.guests.length - 1 ? ', ' : '' " class="divider"></div>
          </div>
          <button class="btn btn-wide bg-primary m-8" type="submit">Submit RSVP</button>
        </form>
      </div>
    </div>
  </div> 
</template>

<script>

  export default {
    props: {
      selectedRes: Object
    },

    methods: {
      encode(data) {
        return Object.keys(data)
          .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join('&');
      },

      submitForm() {
        console.log('data', this.formData)
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: this.encode({ 'form-name': 'rsvp', ...this.formData }),
        })
        .then(() => {
          console.log('success')
          this.formResponse = '✅ Your response was successfully submitted!'
        })
        .catch(error => {
          console.log('error', error)
          this.formResponse = `❌ There was an error submitting your response: ${error.message}. Please refresh to try again.`
        })
      },
    },

    data() {
      return {
        formData: this.selectedRes,
        formResponse: ''
      }
    }  
}
</script>

<style>

</style>
