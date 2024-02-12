<template>
  <div>
   
    <!-- Widget konfiguriert für REST Datenaustausch -->
    <ValueWidget
      title="Temperatur III (REST)"
      fetchUrl="http://localhost:3000/temperature"
      icon="bi-thermometer-sun"
      iconColor="#fff"
      iconBgColor="#4e73df"
    />

  </div>
</template>

<script>
  import ValueWidget from '../widgets/ValueWidget.vue';

  export default {
    name: 'MyDashboard2',
    components: {
      ValueWidget
    },
  };
</script>
