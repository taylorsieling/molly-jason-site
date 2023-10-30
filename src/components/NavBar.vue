<template>
  <header>
    <nav class="fixed w-full bg-white p-5 m-auto top-0 z-10 animated">
      <div class="flex items-center justify-between">
        <div>
          <router-link to="/" class="script text-4xl/none p-4">
            <span>Molly & Jason</span>
          </router-link>
        </div>
        <div class="hidden lg:flex muli-font">
          <NavLinks :navLink=navLink :mobileStyle=false />
        </div>
        <button id="menu-toggle" class="lg:hidden w-10 h-10 relative" aria-label="Expand Menu" @click="toggleNavbar">
          <div class="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
            <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" :class="{'rotate-45': showMenu,' -translate-y-1.5': !showMenu }"></span>
            <span aria-hidden="true" class="block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out" :class="{'opacity-0': showMenu } "></span>
            <span aria-hidden="true" class="block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out" :class="{'-rotate-45': showMenu, ' translate-y-1.5': !showMenu}"></span>
          </div>
        </button>
      </div>
      <div :class="[showMenu ? 'open' : 'closed']" class="lg:hidden muli-font">
        <NavLinks :navLink=navLink :mobileStyle=true />
      </div>
    </nav>
  </header>
</template>

<script>
  import NavLinks from './NavLinks.vue'

  export default {
    name: "nav-toggler",
    components: { NavLinks },
    data() {
      return {
        navLink: 'link no-underline px-4 py-1',
        showMenu: false,
      }
    },
    methods: {
      toggleNavbar() {
        this.showMenu = !this.showMenu;

      }
    }
  }
</script>

<style>
  .open {
    visibility: visible;
    transition: all;
    transition-delay: 150ms;
    transition-duration: 500ms;
    overflow: hidden;
    height: 160px;
    top: 20px;
  }

  .closed {
    visibility: hidden;
    transition: all;
    transition-delay: 150ms;
    transition-duration: 500ms;
    overflow: hidden;
    height: 0;
    top: 20px;
  }
</style>
