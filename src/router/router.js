import { createRouter, createWebHistory } from 'vue-router';
import MyDashboard1 from '../dashboards/MyDashboard1.vue';
import MyDashboard2 from '../dashboards/MyDashboard2.vue';

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'MyDashboard1',
            component: MyDashboard1,
        },
        {
            path: '/mydashboard2',
            name: 'MyDashboard2',
            component: MyDashboard2,
        },
    ],
});

export default router;
