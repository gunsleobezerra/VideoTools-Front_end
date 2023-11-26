<script setup lang="ts">
import { reactive, ref } from 'vue';
import videosApi from '../../services/videosApi';
import  Video  from '../../types';

const video = reactive<Video>({
    id: 0,
    name: '',
    description: '',
    url: '',
});


const isAdding = ref(false);

function addVideo() {
    isAdding.value = true;
    videosApi.addVideo(video).then((response) => {
        console.log(response);
        isAdding.value = false;
    });
}

</script>


<template>
  <div class="container">
    <!--Tres inputs e um botão-->
    <div class="row">
      <div class="col">
        <input type="text" class="form-control" placeholder="Nome" v-model="video.name" />
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="Descrição" v-model="video.description" />
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="URL" v-model="video.url" />
      </div>
      <div class="col">
        <button class="btn btn-primary" @click="addVideo">Adicionar</button>
      </div>
    </div>
    </div>
    
    <!--Loading Spinner-->
    <div v-if="isAdding" class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
</template>