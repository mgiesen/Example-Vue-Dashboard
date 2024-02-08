<template>
  <div class="card info-card">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <div class="d-flex align-items-center">
        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center" :style="{ color: iconColor, backgroundColor: iconBgColor }">
          <i :class="icon"></i>
        </div>
        <div class="ps-3">
          <h6 v-if="status === 'connecting'">Verbinde...</h6>
          <h6 v-else-if="status === 'open'">Warte auf Daten...</h6>
          <h6 v-else-if="status === 'close'">Netzwerkfehler</h6>
          <h6 v-else-if="status === 'error'">Netzwerkfehler</h6>
          <h6 v-else-if="status === 'message'">{{ value }} {{ unit }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
  import { defineComponent } from 'vue';
  import { webSocketService } from '../../WebSocketService.js'; 
  
  export default defineComponent({
  name: 'WssValueCard',
  props: {
    title: String,
    icon: String,
    fetchUrl: String,
    iconColor: String,
    iconBgColor: String,
    id: String,
  },
  data() {
    return {
      value: '',
      unit: '',
      status: 'connecting',
    };
  },
  created() {
    webSocketService.connect(this.fetchUrl);
    webSocketService.subscribe(this.fetchUrl, this.handleData);
  },
  beforeUnmount() {
    webSocketService.unsubscribe(this.fetchUrl, this.handleData);
  },
  methods: {
    handleData(message) 
    {
      if (message.status) 
      {
        this.status = message.status;
      } 
      else if (message.id === this.id) 
      {
        this.status = "message"
        this.value = message.data.value;
        this.unit = message.data.unit;
      }
    },
  },
});
  </script>
  
  <style scoped>
  .card-icon {
    width: 50px;
    height: 50px;
  }
  </style>
  