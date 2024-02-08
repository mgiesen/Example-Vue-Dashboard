<template>
    <header class="d-flex align-items-center justify-content-between bg-dark text-white p-3">
      <div class="d-flex align-items-center">
        <img src="@/assets/logo.png" alt="Logo" class="logo">
        <div style="margin-left: 20px">
            <h5 style="margin: 0">Vue Dashboard Example</h5>
            <p style="margin: 0">mgiesen</p>
        </div>
    
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AppHeader',
  };
  </script>
  
  <style>
  .logo {
    width: 50px; 
  }
  </style>
  