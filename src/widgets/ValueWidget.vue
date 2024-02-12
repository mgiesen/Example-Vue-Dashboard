<template>
    <div class="card info-card">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <div class="d-flex align-items-center">
                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                    :style="{ color: iconColor, backgroundColor: iconBgColor }">
                    <i :class="icon"></i>
                </div>
                <div class="ps-3">
                    <h6 v-if="status === 'connecting'">Lade...</h6>
                    <h6 v-else-if="status === 'open'">Warte auf Daten...</h6>
                    <h6 v-else-if="status === 'close'">Keine Verbindung</h6>
                    <h6 v-else>{{ value }} {{ unit }}</h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { webSocketService } from '../WebSocketService.js';

export default defineComponent({
    name: 'ValueWidget',
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
    mounted() {
        if (this.fetchUrl.startsWith('ws') || this.fetchUrl.startsWith('wss')) {
            this.connectWebSocket();
        } else if (this.fetchUrl.startsWith('http') || this.fetchUrl.startsWith('https')) {
            this.fetchData();
        }
    },
    beforeUnmount() {
        if (this.fetchUrl.startsWith('ws') || this.fetchUrl.startsWith('wss')) {
            webSocketService.unsubscribe(this.fetchUrl, this.handleData);
        }
    },
    methods: {
        async fetchData() {
            this.status = 'connecting';
            try {
                const response = await fetch(this.fetchUrl);
                if (!response.ok) {
                    throw new Error('Netzwerkantwort war nicht ok.');
                }
                const data = await response.json();
                this.value = data.value;
                this.unit = data.unit;
                this.status = 'message';
            } 
            catch (error) {
                this.status = 'close';
            }
        },
        connectWebSocket() {
            webSocketService.connect(this.fetchUrl);
            webSocketService.subscribe(this.fetchUrl, this.handleData);
        },
        handleData(message) {
            if (message.status) {
                this.status = message.status;
            } else if (message.id === this.id) {
                this.value = message.data.value;
                this.unit = message.data.unit;
                this.status = "message";
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

.card {
    margin-bottom: 30px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0 30px rgba(1, 41, 112, 0.1);
}

.card-title {
    padding: 20px 0 15px 0;
    font-size: 18px;
    font-weight: 500;
    color: #160d50;
    font-family: "Poppins", sans-serif;
}

.card-title span {
    color: #899bbd;
    font-size: 14px;
    font-weight: 400;
}

.card-body {
    padding: 0 20px 20px 20px;
}

</style>
  