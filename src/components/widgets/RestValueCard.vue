<template>
  <div class="card info-card">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <div class="d-flex align-items-center">
        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center" :style="{ color: iconColor, backgroundColor: iconBgColor }">
          <i :class="icon"></i>
        </div>
        <div class="ps-3">
          <h6 v-if="isLoading">Lade...</h6>
          <h6 v-else-if="errorMessage">Netzwerkfehler</h6>
          <h6 v-else>{{ value }} {{ unit }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'RestValueCard',
    props: {
      title: String,
      icon: String,
      fetchUrl: String,
      iconColor: String,
      iconBgColor: String,
    },
    data() {
      return {
        value: null,
        unit: '', 
        status: null,
        isLoading: true,
        errorMessage: '',
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        this.isLoading = true;
        this.errorMessage = '';
        try {
          const response = await fetch(this.fetchUrl);
          if (!response.ok) {
            throw new Error('Netzwerkantwort war nicht ok.');
          }
          const data = await response.json();
          this.value = data.value;
          this.unit = data.unit; 
          this.status = data.status;
          this.isLoading = false;
        } catch (error) {
          this.errorMessage = 'Netzwerkfehler'; 
          this.isLoading = false;
        }
      },
    },
    computed: {
      
    },
  });
  </script>
  
  <style scoped>
  .card-icon {
    width: 50px; 
    height: 50px; 
  }
  </style>
  