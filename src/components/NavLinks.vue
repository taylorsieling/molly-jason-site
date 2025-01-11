<template>
  <ul :class="{ 'flex-col text-center align-items-center': mobileStyle }" class="flex">
    <li><router-link to="/" :class=navLink >Home</router-link></li>
    <li><router-link to="/our-story" :class=navLink>Our Story</router-link></li>
    <li><router-link to="/schedule" :class=navLink>Schedule</router-link></li>
    <li><router-link to="/travel-info" :class=navLink>Travel</router-link></li>
    <li><router-link to="/faqs" :class=navLink>FAQs</router-link></li>
    <li><router-link to="/rsvp" :class=navLink>RSVP</router-link></li>
    <!-- <li><router-link to="/registry" :class=navLink>Registry</router-link></li> -->
  </ul>
</template>

<script>
  export default {
    props: { 
      mobileStyle: Boolean,
      navLink: String
    },
  }
</script>

<style>
a::before {
  content: "";
  position: absolute;
  display: block;
  width: 50%;
  height: 1px;
  bottom: 0;
  left: 25%;
  background-color: #000;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

a:hover::before {
  transform: scaleX(1);
}

li {
  padding: 0.25rem;
}
</style>
