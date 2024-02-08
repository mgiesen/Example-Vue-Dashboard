<template>
  <main id="main">
    <router-view />
  </main>
</template>

<script>
  export default {
    name: 'AppMain',
  };
</script>

<style>
  #main {
    padding: 20px; 
    flex-grow: 1; 
    overflow: auto; 
  }

  .example_label {
    margin-bottom: 5px;
    color: #21252969;
    font-size: 0.9rem;
  }
</style>
