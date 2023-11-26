<script setup lang="ts">

        import { defineProps } from "vue";

        const props = defineProps({
                routes: {
                        type: Array,
                        required: true,
                },
        });

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-purple fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">VideoTools</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li v-for="route in props.routes" class="nav-item">
                        <router-link :to="route.path" class="nav-link">{{ route.name }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    
</template>
   


