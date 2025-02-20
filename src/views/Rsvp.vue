<template>
  <CenteredTextSection class="my-4 p-2 md:py-4 md:px-48" v-if="!showForm">
    <template #title>You're Invited!</template>
    <template #content>Please enter your <span class="font-bold">last name</span> to find your reservation.</template>
    <template #body>
      <div class="md:w-1/2 md:m-auto">
        <div>
          <label class="input input-bordered flex items-center gap-2 mb-4">
            <input type="text" class="grow" placeholder="Last Name" v-model="searchTerm" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="h-4 w-4 opacity-70">
              <path
                fill-rule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clip-rule="evenodd" />
            </svg>
          </label>
          <button class="btn btn-block bg-primary text-white" @click="filteredGuests">Find Reservation</button>
        </div>
        <div v-if="showRes">
          <p v-if="reservations.length > 0" class="text-lg italic leading-relaxed mb-8 mt-12">Please select your party to RSVP</p>
          <div v-else>
            <p class="text-md italic leading-relaxed mb-2 mt-12">We did not find a reservation under that name. <span class="font-bold">Please enter the last name of any of your party's members.</span></p>
            <p class="text-sm" mb-8>If you continue to experience issues, please reach out to the bride or groom.</p>
          </div>
          <ul>
            <li v-for="(reservation, i) in reservations" @click="showRsvpForm(reservation)">
              <p>Reservation for:</p>
              <span v-for="(guest, index) in reservation.guests" :key=index>{{ guest.firstName }} {{ guest.lastName }}{{ index < reservation.guests.length - 1 ? ', ' : '' }}</span>
              <div v-if="i < reservations.length - 1 ? ', ' : '' " class="divider"></div>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </CenteredTextSection>

  <RsvpForm class="my-8 p-4 md:py-4 md:px-48" v-if="showForm" :selectedRes="selectedRes" :resID="resID" @clear-id="this.resID = ''"></RsvpForm>
</template>

<script>
import CenteredTextSection from '../components/CenteredTextSection.vue';
import { getDatabase, ref, onValue} from "firebase/database";
import RsvpForm from '../components/RsvpForm.vue';

export default {
  components: { CenteredTextSection, RsvpForm },
  data() {
    return {
      guestList: [],
      selectedRes: null,
      reservations: [],
      resID: '',
      searchTerm: '',
      showForm: false,
      showRes: false,
      titleImage: 'background-image: url(/images/mj-rsvp.jpg)',
    };
  },

  mounted() {
    const db = getDatabase();
    const guestListRef = ref(db, 'reservations');

    onValue(guestListRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const res = childSnapshot.val()
        const id = childSnapshot.key
        res.id = id
        this.guestList.push(res)
      });
    });
  },

  methods: {
    showRsvpForm(reservation) {
      this.selectedRes = reservation
      this.showForm = true
    },    

    filteredGuests() {
      const searchName = this.searchTerm.toLowerCase();

      let reservations = this.guestList.filter(r => r.guests.some(g => g.lastName.toLowerCase() === searchName));
      this.reservations = reservations
      this.showRes = true
    },
  }
};
</script>

<style></style>
