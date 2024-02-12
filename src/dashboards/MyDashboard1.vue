<template>
  <div>
    <!-- Widget konfiguriert für REST Datenaustausch -->
    <ValueWidget
      title="Temperatur I (REST)"
      fetchUrl="http://localhost:3000/temperature"
      icon="bi-thermometer-sun"
      iconColor="#fff"
      iconBgColor="#4e73df"
    />

    <!-- Widget konfiguriert für WSS Datenaustausch -->
    <ValueWidget
      title="Temperatur II (Websocket)"
      icon="bi-thermometer-snow"
      fetchUrl="ws://localhost:3001"
      iconColor="#fff"
      iconBgColor="#1cc88a"
      id="wss_temperature"
    />

    <div style="height: 1000px"></div>
  </div>
</template>

<script>
  import ValueWidget from '../widgets/ValueWidget.vue';

  export default {
    name: 'MyDashboard1',
    components: {
      ValueWidget
    },
  };
</script>
