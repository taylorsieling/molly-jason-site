<template>
  <header>
    <nav class="flex justify-between mx-8 my-4">
      <div>
        <router-link to="/" class="script text-4xl/none p-4">
          <span>Molly & Jason</span>
        </router-link>
      </div>

      <div :class="{'hidden': !showMenu, 'flex': showMenu}" class="">
        <ul class="md:flex md:flex-row">
          <li><router-link to="/" :class=linkClass >Home</router-link></li>
          <li><router-link to="/our-story" :class=linkClass>Our Story</router-link></li>
          <li><router-link to="/itinerary" :class=linkClass>Itinerary</router-link></li>
          <li><router-link to="/rsvp" :class=linkClass>RSVP</router-link></li>
          <li><router-link to="/travel-info" :class=linkClass>Travel Info</router-link></li>
          <li><router-link to="/registry" :class=linkClass>Registry</router-link></li>
        </ul>
      </div>

      <button id="menu-toggle" class="text-gray-500 w-10 h-10 relative focus:outline-none bg-white" @click="toggleNavbar">
        <span class="sr-only">showMenu Navigation</span>
        <div class="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
          <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" :class="{'rotate-45': showMenu,' -translate-y-1.5': !showMenu }"></span>
          <span aria-hidden="true" class="block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out" :class="{'opacity-0': showMenu } "></span>
          <span aria-hidden="true" class="block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out" :class="{'-rotate-45': showMenu, ' translate-y-1.5': !showMenu}"></span>
        </div>
      </button>


    </nav>
  </header>
</template>

<script>
  export default {
    name: "nav-toggler",
    data() {
      return {
        linkClass: 'link link-hover uppercase p-4',
        showMenu: false
      }
    },

    methods: {
      toggleNavbar: function(){
        console.log('CLICK')
        this.showMenu = !this.showMenu;
      }
    }
  }
</script>
