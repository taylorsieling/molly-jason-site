<template>
  <div class="text-center p-4 md:py-4 md:px-8">
    <div class="pt-12 p-2 md:p-8 md:max-w-5xl mx-auto">
      <div class="mt-2 mx-auto">
        <form name="guestList" method="post" @submit.prevent="submitForm" class="flex flex-col items-center">
          <input type="text" v-model="reservation.reservationName" placeholder="Reservation Name" class="input input-bordered w-full max-w-xs" />
          <div class="form-control">
            <label class="label cursor-pointer w-32">
              <span class="label-text">Dinner Invite?</span>
              <input type="checkbox" v-model="reservation.dinnerInvite" checked="checked" class="checkbox" />
            </label>
          </div>
          <div v-for="(guest, index) in reservation.guests" :key="index" class="flex flex-col m-4">
            <input type="text" v-model="guest.firstName"  placeholder="First Name" class="input input-bordered w-full max-w-xs m-2" >
            <input type="text" v-model="guest.lastName"  placeholder="Last Name" class="input input-bordered w-full max-w-xs m-2" >
            <button @click.prevent="removeGuest(index)">Remove</button>
          </div>
          <button class="btn bg-secondary btn-sm m-1" @click.prevent="addGuest">Add Guest</button>
          <button class="btn btn-wide bg-primary m-8" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div> 
</template>

<script>
import { getDatabase, ref, push, set } from "firebase/database";

  export default {

    methods: {
      submitForm() {
        console.log('data', this.reservation)
        console.log('data', this.reservation)
        const db = getDatabase();     
        const reservationRef = ref(db, 'reservations');
        const newGuest = push(reservationRef);
        
        set(newGuest, this.reservation)
      },

      addGuest() {
        console.log('click addField')
        this.reservation.guests.push({ firstName: '', lastName: '', dinner: false, party: false, ceremony: false });    
      },

      removeGuest(index) {
        this.fields.splice(index, 1);
      },
    },

    data() {
      return {
        reservation: {
          reservationName: "",
          dinnerInvite: false,
          guests: []
        }
      }
    }  
}
</script>

<style>

</style>

import { getDatabase, ref, set } from "firebase/database";

function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
