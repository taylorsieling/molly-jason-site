<template>
  <div class="-my-6">
    <div class="relative pl-8 sm:pl-32 py-6 group mb-2">
      <div class="text-sm italic mb-1 sm:mb-0">5:30 PM</div>
      <div :class="timeline">
        <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-white bg-primary rounded-full">April 25</time>
        <div class="text-xl text-stone-900 playfair uppercase tracking-wider">Party at the Point: Welcome Party
        </div>
      </div>
      <div class="text-stone-500">
        <span class="font-bold">Charleston Harbor Resort & Marina | Beachfront </span><br>
        Come hang out with us at a welcome party on the beachfront! Party at the Point is hosted by the Charleston Harbor Resort and features live music and plenty of food and drinks.        <span class="italic">Tickets will be provided and you can purchase drinks and food at the event.</span>
      </div>
    </div>
    <div class="relative pl-8 sm:pl-32 py-6 group mb-2">
      <div class="text-sm italic mb-1 sm:mb-0">4:30 PM - 5:00 PM</div>
      <div :class="timeline">
        <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-white bg-primary rounded-full">April 26</time>
        <div class="text-xl text-stone-900 playfair uppercase tracking-wider">Ceremony</div>
      </div>
      <div class="text-stone-500">
        <span class="font-bold">Charleston Harbor Resort & Marina | Harborside Beach</span><br>
        Join us for a waterfront view as we exchange vows on the beach.
      </div>
    </div>
    <div class="relative pl-8 sm:pl-32 py-6 group">
      <div class="text-sm italic mb-1 sm:mb-0">5:00 PM - 6:00 PM</div>
      <div :class="timeline">
        <time class="sm:absolute left-0 translate-y-0.5 md:hidden inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-white bg-primary rounded-full">April 26</time>
        <div class="text-xl text-stone-900 playfair uppercase tracking-wider">Cocktail Hour</div>
      </div>
      <div class="text-stone-500">
        <span class="font-bold">Charleston Harbor Resort & Marina | Sunrise Terrace & Deck</span><br>
        Enjoy an open bar while dinner is being prepared!
      </div>
    </div>
    <div class="relative pl-8 sm:pl-32 py-6 group">
      <div class="text-sm italic mb-1 sm:mb-0">6:00 PM - 10:00 PM</div>
      <div :class="timeline">
        <time class="sm:absolute left-0 translate-y-0.5 md:hidden inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-white bg-primary rounded-full">April 26</time>
        <div class="text-xl text-stone-900 playfair uppercase tracking-wider">Dinner & Dancing</div>
      </div>
      <div class="text-stone-500">
        <span class="font-bold">Charleston Harbor Resort & Marina | Sunrise Terrace & Deck</span><br>
        The knot has been tied... let's celebrate! We will have a buffet dinner, open bar, and lots of dancing!
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        timeline: 'flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-primary after:border-2 after:box-content after:border-primary after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5'
      }
    }
  }
</script>

<style>

</style>
