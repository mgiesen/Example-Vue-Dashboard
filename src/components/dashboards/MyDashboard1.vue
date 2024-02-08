<template>
  <div>
    <h2>Dashboard 1</h2>

    <div style="margin-top:30px">
      <h6 class="example_label">Pulled from REST server</h6>
      <RestValueCard
        title="Temperature 1"
        fetchUrl="http://localhost:3000/temperature"
        icon="bi-thermometer-sun"
        iconColor="#ff6384"
        iconBgColor="#ffe5e5"
      />
    </div>
  
    <div style="margin-top:20px">
      <h6 class="example_label">Live synced from Websocket server</h6>
      <WssValueCard
        title="Temperature 2"
        fetchUrl="ws://localhost:3001"
        id="wss_temperature"
        icon="bi-thermometer-snow"
        iconColor="#ff6384"
        iconBgColor="#ffe5e5"
      />
    </div>

  </div>
</template>

<script>
import RestValueCard from '../widgets/RestValueCard.vue';
import WssValueCard from '../widgets/WssValueCard.vue';

export default {
  name: 'MyDashboard1',
  components: {
    RestValueCard,
    WssValueCard
  },
};
</script>
