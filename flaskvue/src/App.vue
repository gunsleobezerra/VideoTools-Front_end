<script setup lang="ts">
  import NavBar from "./components/Navbar.vue";

  const routes = [
    { name: "Recent Videos", path: "/listall" },
    { name: "Add Video", path: "/add" },
    
  ];

</script>

<template>
  
  <NavBar :routes="routes" />
  
  <div class="container-fluid"  style="margin-top: 5rem;">
        <router-view></router-view>
    </div>
</template>

