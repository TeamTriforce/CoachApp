export default {
	state: {
		dailyReport: null
	},
	getters: {
		dailyReport: (state) => {
			return state.dailyReport;
		}
	},
	mutations: {
		updateDailyReport(state, payload) {
			state.dailyReport = payload;
		}
	},
	actions: {
		updateDailyReport({ commit }, payload) {
			commit('updateDailyReport', payload);
		}
	}
};
