<template>
  <PageTitle :titleImage=titleImage overlayClass="bg-zinc-700/40">
    <template #title>Travel & Accomodations</template>
  </PageTitle>
  <CenteredTextSection class="p-4 md:py-4 md:px-48" data-aos="fade-in">
    <template #supertitle>We are so excited to have all of our favorite people in one place!</template>
    <template #title>Charleston, South Carolina</template>
    <template #content>
      <ul class="menu menu-vertical md:menu-horizontal bg-base-200 rounded-box content-center mt-8">
        <li class="content-center"><a href="#lodging">Lodging</a></li>
        <li class="content-center"><a href="#fun">Fun Things To Do</a></li>
        <li class="content-center"><a href="#venue">The Venue</a></li>
      </ul>
    </template>
  </CenteredTextSection>
  <hr>
  <div id="lodging" class="bg-primary text-white text-center p-8 md:py-4 md:px-24">
    <h3 class="text-5xl cormorant uppercase tracking-wide p-4">Lodging</h3 >
    <p class="text-md leading-relaxed mb-4">Charleston is a popular location! We want our guests to have fun and book a trip they will love. Therefore, we will not have a room blocks at any hotels to allow guests as much flexibility as possible.</p>
    <p class="text-md leading-relaxed mb-4">See our hotel recommendations below for nearby options in a variety of prices ranges.</p>
    <p class="">* * *</p>
    <div class="flex flex-col lg:flex-row justify-center text-center">
      <div class="lg:basis-1/3 m-2 p-2">
        <img class="rounded-xl mb-3 mx-auto h-40 w-full object-cover md:w-3/4" src="https://cache.marriott.com/content/dam/marriott-renditions/CHSMT/chsmt-exterior-0001-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*">
        <h4 class="text-4xl cormorant mb-3">SpringHill Suites by Marriot</h4>
        <p class="text-sm mb-2">
          245 Magrath Darby Blvd <br>
          Mt Pleasant, SC 29464
        </p>
        <p class="italic text-sm mb-8">Price Range: $</p>
        <a href="https://www.marriott.com/en-us/hotels/chsmt-springhill-suites-charleston-mount-pleasant/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0" class="px-5 py-3 bg-white text-primary italic text-bold hover:bg-primary hover:text-white hover:border-2">Reservations</a>
      </div>
      <div class="lg:basis-1/3 m-2 mt-12 md:mt-2 p-2">
        <img class="rounded-xl mb-3 mx-auto h-40 w-full object-cover md:w-3/4" src="https://www.hilton.com/im/en/CHSSCES/15644848/es-chssces-night-exterior.jpg?impolicy=crop&cw=5000&ch=3255&gravity=NorthWest&xposition=0&yposition=40&rw=768&rh=500">
        <h4 class="text-4xl cormorant mb-3">Embassy Suites by Hilton</h4>
        <p class="text-sm mb-2">
          100 Ferry Wharf Road <br>
          Mt Pleasant, SC 29464
        </p>
        <p class="italic text-sm mb-8">Price Range: $</p>
        <a href="https://www.hilton.com/en/hotels/chssces-embassy-suites-charleston-harbor-mt-pleasant/rooms/" class="px-5 py-3 bg-white text-primary italic text-bold hover:bg-primary hover:text-white hover:border-2">Reservations</a>
      </div>
      <div class="lg:basis-1/3 m-2 mt-12 md:mt-2 p-2">
        <img class="rounded-xl mb-3 mx-auto h-40 w-full object-cover md:w-3/4" src="https://www.charlestonharborresort.com/files/3792/img-beachclub-002.jpg">
        <h4 class="text-4xl cormorant mb-3">Charleston Harbor Resort & Marina</h4>
        <p class="text-sm mb-2">
          20 Patriots Point Rd <br>
          Mt Pleasant, SC 29464
        </p>
        <p class="italic text-sm mb-8">Price Range: $$</p>
        <a href="https://bookings.travelclick.com/110419?adobe_mc=MCMID=10089339946301935712685362941743018248|MCORGID=1C1238B352785AA60A490D4C%40AdobeOrg|TS=1723506574&domain=www.charlestonharborresort.com#/guestsandrooms" class="px-5 py-3 bg-white text-primary italic text-bold hover:bg-primary hover:text-white hover:border-2">Reservations</a>
      </div>
    </div>
  </div>
  <div id="fun" class="p-8 md:py-4 md:px-24">
    <h3 class="text-4xl text-center cormorant tracking-wide p-4">Fun Things To Do in Charleston</h3 >
    <div class="join join-vertical w-full mt-2">
      <div class="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" checked="checked" />
        <div class="collapse-title text-xl font-medium">Food</div>
        <div class="collapse-content">
          <p>
            <ul class="list-none">
              <li><a href="https://millersallday.com/" class="link p-2" target="_blank">Millers All Day</a></li>
              <li><a href="https://elistable.com/" class="link p-2" target="_blank">Eli's Table</a></li>
              <li><a href="https://www.tacoboy.net/location/downtown-taco-boy/" class="link p-2" target="_blank">Taco Boy</a></li>
              <li><a href="https://leonsoystershop.com/" class="link p-2" target="_blank">Leon's Oyster House</a></li>
              <li><a href="https://gracegrit.com/" class="link p-2" target="_blank">Grace & Grit</a></li>
            </ul>
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" />
        <div class="collapse-title text-xl font-medium">Activities</div>
        <div class="collapse-content">
          <p>
            <ul class="list-none">
              <li><a href="https://scaquarium.org/" class="link p-2" target="_blank">South Carolina Aquarium</a></li>
              <li><a href="https://travelerofcharleston.com/attractions/the-battery/" class="link p-2" target="_blank">Sightseeing and The Battery</a></li>
              <li><a href="https://www.tripadvisor.com/Attractions-g54171-Activities-c55-Charleston_South_Carolina.html" class="link p-2" target="_blank">Harbor Cruises</a></li>
              <li><a href="https://www.tripadvisor.com/Attractions-g54171-Activities-c42-t204-Charleston_South_Carolina.html" class="link p-2" target="_blank">Charleston Food Tours</a></li>
            </ul>
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" />
        <div class="collapse-title text-xl font-medium">Shopping</div>
        <div class="collapse-content">
          <p>
            <ul class="list-none">
              <li><a href="https://walksofcharleston.com/blog/everything-you-need-to-know-about-king-street-charleston/" class="link p-2" target="_blank">King Street</a></li>
              <li><a href="https://www.thecharlestoncitymarket.com/" class="link p-2" target="_blank">Charleston City Market</a></li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div id="venue" class="p-4 md:py-4 md:px-48">
    <ImageLeftSection :imgSrc=venueImage>
      <template #supertitle>The Venue</template>
      <template #title>Charleston Harbor Resort & Marina</template>
      <template #content>
        20 Patriots Point Road <br>
        Mount Pleasant, South Carolina 29464 <br>
        Phone: (843) 856-0028
      </template>
    </ImageLeftSection>
    <ImageRightSection :imgSrc=ceremonyImage>
      <template #supertitle>The Ceremony</template>
      <template #title>Harborside Beach</template>
      <template #content>
        Our ceremony will take place on the Harborside Beach at the Charleston Harbor Resort and Marina. Please take the sand and outdoor nature of the event into consideration when choosing your outfit and footware.
      </template>
    </ImageRightSection>
  </div>
</template>

<script>
  import ImageLeftSection from '../components/ImageLeftSection.vue';
  import ImageRightSection from '../components/ImageRightSection.vue';
  import PageTitle from '../components/PageTitle.vue';
  import CenteredTextSection from '../components/CenteredTextSection.vue';

  export default {
    components: { ImageLeftSection, ImageRightSection, PageTitle, CenteredTextSection },
    data() {
      return {
        ceremonyImage: 'https://www.charlestonharborresort.com/files/3792/img-harborsideresort-006.jpg',
        titleImage: 'background-image: url(/images/mj-dunes.jpg)',
        venueImage: 'https://www.charlestonharborresort.com/files/3792/img-beachclub-001.jpg'
      }
    }
  };
</script>
