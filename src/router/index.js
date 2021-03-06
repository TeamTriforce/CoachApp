import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import store from '@/store/index';
import Member from '@/views/Member.vue'
import MentionsLegales from '@/views/MentionsLegales.vue'
import CoachSpace from '@/views/CoachSpace.vue'


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
    component: Member
  },
  {
    path: '/Coach',
    name: 'Coach',
    component: CoachSpace
  },
  {
    path: '/MentionsLegales',
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
