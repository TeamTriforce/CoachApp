import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import Home from '@/views/Member.vue'
import store from '@/store/index';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/Member',
    name: 'Member',
    component: Home
  }
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
  console.log(store.state)
	const userInStore = store.state.user.user;
	const isAuthenticated = userInStore !== null ? true : false;
	const isProtected = to.matched.some((route) => route.meta.needAuth);

	if (!isAuthenticated && isProtected) {
		next({ name: 'LogIn' });
	} else {
		next();
	}
});

export default router
