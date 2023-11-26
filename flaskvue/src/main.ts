import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import ListaVideos from './components/ListaVideos.vue'
import AdicionarVideo from './components/AdicionarVideo.vue'

// 1. Define route components.
// These can be imported from other files


// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  
  { path: '/listall', component: ListaVideos },
  { path: '/add', component: AdicionarVideo },
  { path: '/', redirect: '/listall' }

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
    })


const app = createApp(App)

app.use(router)

app.mount('#app')


