<template>
  <div class="text-center p-4 md:py-4 md:px-8">
    <div v-if="formSubmitted" class="pt-12 p-2 md:p-8 md:max-w-5xl mx-auto">
      <p class="text-xl italic leading-relaxed mb-6">Thank you for your RSVP!</p>
      <p class="text-lg mb-4">Please visit our other pages for more information about our Big Day:</p>
      <div class="flex flex-col justify-center items-center">
        <router-link to="/registry" class="btn btn-wide m-2" >Registry</router-link>
        <router-link to="/faqs" class="btn btn-wide m-2" >FAQs</router-link>
        <router-link to="/travel-info" class="btn btn-wide m-2" >Travel</router-link>
      </div>
    </div>
    <div v-else class="pt-12 p-2 md:p-8 md:max-w-5xl mx-auto">
      <p class="text-xl italic leading-relaxed mb-8"> RSVP for {{ selectedRes.reservationName }} </p>
      <div class="mt-2 mx-auto">
        <form name="rsvp" method="post" @submit.prevent="submitForm" data-netlify="true" data-netlify-honeypot="bot-field">
          <div v-for="(guest, index) in selectedRes.guests" :key="guest.firstName">
            <div class="flex items-start justify-center gap-4">
              <p class="basis-1/3 pt-2">{{ guest.firstName }} {{ guest.lastName }}</p>
              <div class="basis-2/3">
                <div v-if="selectedRes.dinnerInvite || guest.dinnerInvite" id="welcome-dinner" class="form-control">
                  <label :for="`${index}-dinner`" class="label cursor-pointer justify-start gap-2">
                    <input :id="`${index}-dinner`" v-model="guest.dinner" type="checkbox" class="checkbox checkbox-sm" name="dinner"/>
                    <span class="label-text">Welcome Dinner</span>
                  </label>
                </div>
                <div id="welcome-party" class="form-control">
                  <label :for="`${index}-party`" class="label cursor-pointer justify-start gap-2">
                    <input :id="`${index}-party`" v-model="guest.party" type="checkbox" class="checkbox checkbox-sm" name="party"/>
                    <span class="label-text">Welcome Party</span>
                  </label>
                </div>
                <div id="ceremony" class="form-control">
                  <label :for="`${index}-ceremony`" class="label cursor-pointer justify-start gap-2">
                    <input :id="`${index}-ceremony`" v-model="guest.ceremony" type="checkbox" class="checkbox checkbox-sm" name=ceremony/>
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
  import { getDatabase, ref, update } from "firebase/database";

  export default {
    props: {
      resID: String,
      selectedRes: Object
    },

    methods: {
      submitForm() {
        const db = getDatabase();
        const resRef = ref(db, `reservations/${this.selectedRes.id}`)

        this.selectedRes.responded = true;

        update(resRef, this.formData)
          .then(() => {
            console.log("Success")
            this.formSubmitted = true
            this.$emit('clearId')
          })
          .catch((error) => {
            console.log('Error: ', error)
          })
      },
    },

    data() {
      return {
        formSubmitted: false,
        formData: this.selectedRes,
      }
    }  
}
</script>

<style>

</style>
