<template>
    <aside class="bg-light p-3" style="height: 100vh;">
      <ul class="nav flex-column">

        <li class="nav-item">
          <router-link to="/" class="nav-link">Dashboard 1</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/mydashboard2" class="nav-link">Dashboard 2</router-link>
        </li>

      </ul>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'AppSidebar',
  };
  </script>
  