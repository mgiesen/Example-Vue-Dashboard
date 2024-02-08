<template>
  <div>
    <h2>Dashboard 2</h2>

    <div style="margin-top:30px">
      <h6 class="example_label">Pulled from REST server</h6>
      <RestValueCard
      title="Humidity"
      fetchUrl="http://localhost:3000/humidity"
      icon="bi-moisture"
      iconColor="#007bff" 
      iconBgColor="#e0f4ff" 
    />
    </div>
   

  </div>
</template>

<script>
import RestValueCard from '../widgets/RestValueCard.vue';

export default {
  name: 'MyDashboard2',
  components: {
    RestValueCard,
  },
};
</script>
