<template>
  <main class="container mt-5 pt-5">
    <div class="row">
      <GalleryListItem
        v-for="n in numberOfItems"
        :key="n"
        :index="n"
        class="col-12 col-sm-6 col-md-4 mb-3"
      />
    </div>
  </main>
</template>

<script setup>
import {ref} from 'vue'
import GalleryListItem from './GalleryListItem.vue'
const numberOfItems = ref(9)
</script>

<style scoped>

</style>
