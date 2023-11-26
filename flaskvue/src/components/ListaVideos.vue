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

 function deleteVideo (event: any) {
   let Video: Video = {
     id: event.target.parentElement.id,
     name: event.target.parentElement.children[0].innerText,
     description: event.target.parentElement.children[1].innerText,
     url: event.target.parentElement.children[2].innerText
   }

    videosApi.deleteVideo(Video).then((response) => {
      console.log(response)
      
      let card = document.getElementById(Video.id.toString())
      card?.remove()
      }
    
    )



   
    

}
 

</script>

<template>

    
<div v-if="isLoading && cards.length!=0" class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col" v-for="card in cards">
    <div  class="card mycard">
      <div class="card-body" :id="card.id.toString()">
        
        <h5 class="card-title">{{ card.name }}</h5>
        <p class="card-text">{{ card.description!="" ? card.description : "No description" }}</p>
        <a :href="card.url">{{ card.url }}</a>
        <button type="button" class="btn btn-danger" @click="deleteVideo">Delete</button>
      </div>
    </div>
  </div>
</div>

<div v-else="cards.length!=0" class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>

<div v-else class="d-flex justify-content-center">
  <h1>No videos</h1>
</div>


</template>

<style>
.mycard {
  width: 18rem;
  margin: 1rem;
}
</style>