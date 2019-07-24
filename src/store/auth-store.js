import authService from './../services/auth-service';
import router from './../router';

const getUserFromLocalStorage = () => {
	const user = localStorage.getItem('user');
	
	if(user) {
		return JSON.parse(user);
	}
}

export default {
	state: {
		user: getUserFromLocalStorage(),
		errors: null
	},
	mutations: {
		SET_DATA(state, { user }) {
			state.user = user,
			state.errors = null
		},
		SET_ERRORS(state, errors) {
			state.errors = errors
		}
	},
	actions: {
		async login({ commit } , { email, password }) {
			try {
				const { data } =  await authService.login(email, password)
				commit('SET_DATA', data)
				router.push({ name: 'home'})
			} catch (error) {
				commit('SET_ERRORS', error.response.data.message)
			}
		},
		logout({ commit }) {
			authService.logout()
			.then(() => {
				commit('SET_DATA', { user: null })
				router.push({ name: 'home' })
			})
		}
	},
	getters: {
		getUser: state => state.user,
		getErrors: state => state.errors
	}
}