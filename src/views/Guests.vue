<template>
  <div class="mt-12">
    <div class="overflow-x-auto">
      <table class="table m-4">
        <!-- head -->
        <thead>
          <tr>
            <th class="font-bold text-xl">Reservation Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rsvp, index) in rsvps" :key="index">
            <td class="font-bold">{{ rsvp.reservationName }}</td>
            <td v-for="guest in rsvp.guests">
              {{ guest.firstName }} {{ guest.lastName }} <br>
              <span v-if="guest.dinner === true" class="badge badge-info badge-sm m-1">Dinner</span>
              <span v-if="guest.party === true" class="badge badge-secondary badge-sm m-1">Party</span>
              <span v-if="guest.ceremony === true" class="badge badge-primary badge-sm m-1">Ceremony</span>
              <span v-if="guest.dinner === false && guest.party === false && guest.ceremony === false" class="badge badge-neutral badge-sm m-1">Not Attending</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { getDatabase, ref, onValue} from "firebase/database";

export default {
  components: { },
  data() {
    return {
      resID: '',
      rsvps: []
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
        if (res.responded) { 
          this.rsvps.push(res)
        }
      });
    });

    console.log('rsvps', this.rsvps)
  }
}
</script>

<style lang="scss" scoped>

</style>
