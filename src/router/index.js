import Vue from 'vue';
import Router from 'vue-router';
import HomePage from "@/components/HomePage.vue";
import AboutPage from "@/components/AboutPage.vue";
import NotificationPage from "@/components/NotificationPage.vue";

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/AboutPage',
        name: 'AboutPage',
        component: AboutPage
    },
    {
        path: '/NotificationPage',
        name: 'NotificationPage',
        component: NotificationPage
    }
];

const router = new Router({
    mode: 'history',
    routes
});

export default router;