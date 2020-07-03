import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import SignIn from '@/components/SignIn.vue'
import LogIn from '@/components/LogIn.vue'
import store from '@/store/index';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: 'LogIn',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: 'SignIn',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: 'MentionsLegales',
    name: 'MentionsLegales',
    component: MentionsLegales
  },
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
	const userInStore = store.state.users.user;
	const isAuthenticated = userInStore !== null ? true : false;
	const isProtected = to.matched.some((route) => route.meta.needAuth);

	if (!isAuthenticated && isProtected) {
		next({ name: 'LogIn' });
	} else {
		next();
	}
});

export default router
 
