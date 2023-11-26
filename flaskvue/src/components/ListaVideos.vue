<script setup lang="ts">
import { ref } from 'vue';
import videosApi from '../../services/videosApi';
import  Video  from '../../types';



videosApi.getVideos().then((response) => {
    cards.value = response
    isLoading.value = true
    console.log(cards.value)
});



 const cards = ref<Video[]>([]);

 const isLoading = ref(false);

 

</script>

<template>

    
<div v-if="isLoading" class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col" v-for="card in cards">
    <div  class="card mycard">
      <div class="card-body">
        
        <h5 class="card-title">{{ card.name }}</h5>
        <p class="card-text">{{ card.description!="" ? card.description : "No description" }}</p>
        <a :href="card.url">{{ card.url }}</a>
      </div>
    </div>
  </div>
</div>

<div v-else class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>


</template>

<style>
.mycard {
  width: 18rem;
  margin: 1rem;
}
</style>