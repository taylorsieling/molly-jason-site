<script setup>
import NavBar from "./components/NavBar.vue"
import Footer from "./components/Footer.vue";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAKlhD4h_8sZPuSCcXxo6Ec2imbP0uxy6g",
  authDomain: "wedding-rsvps-a40ed.firebaseapp.com",
  databaseURL: "https://wedding-rsvps-a40ed-default-rtdb.firebaseio.com",
  projectId: "wedding-rsvps-a40ed",
  storageBucket: "wedding-rsvps-a40ed.firebasestorage.app",
  messagingSenderId: "805605309777",
  appId: "1:805605309777:web:9295c384a4067af6176770",
  measurementId: "G-CWGMPY9G11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

</script>

<template>
  <div class="flex flex-col min-h-screen justify-between">
    <NavBar />
    <main class="bg-white w-full mt-12 flex-grow">
      <RouterView />
    </main>
    <Footer></Footer>
  </div>
</template>
