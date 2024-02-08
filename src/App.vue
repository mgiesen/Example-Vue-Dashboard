<template>
  <div>
    <AppHeader />
    <div class="d-flex">
      <AppSidebar />
      <AppMain />
    </div>
  </div>
</template>

<script>
import AppHeader from './components/page/AppHeader.vue';
import AppSidebar from './components/page/AppSidebar.vue'; 
import AppMain from './components/page/AppMain.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppSidebar,
    AppMain
  }
};
</script>
