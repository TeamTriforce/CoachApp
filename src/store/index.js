import Vue from 'vue'
import Vuex from 'vuex'
import dailyReport from '@/store/modules/dailyReport';
import user from '@/store/modules/user';

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	},
	mutations: {
	},
	actions: {
	},
	modules: {
		dailyReport,
		user
	}
});
