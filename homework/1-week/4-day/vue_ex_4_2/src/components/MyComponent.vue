<template>
  <div>
    <header>
      <h1>Gallery</h1>
    </header>

    <main class="container mt-5 pt-5"> <!-- 여백 추가 -->
      <div class="row">
        <div v-for="n in numberOfItems" :key="n" class="col-12 col-sm-6 col-md-4 mb-3">
          <div class="card" style="width: 100%;"> <!-- 100%로 변경 -->
            <img src="../assets/sample.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card {{ n }}</h5>
              <p class="card-text">Some quick example text...</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>


<script setup>

import {ref} from 'vue'

const numberOfItems = ref(9)

</script>


<style scoped>

header{
  z-index: 100;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: aqua;
  margin: auto;
  text-align: center;
}
.card {

  background-color: #f8f9fa;
  text-align: center;
}

</style>
