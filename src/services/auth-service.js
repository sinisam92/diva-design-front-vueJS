import http from './http-service';

class AuthService {
	login(email, password) {
		return http.post('auth/login', {
				email,
				password
			})
			.then(response => {
				this.loggingIn(response.data);
				return response;
			})
	}
	async logout() {
		await http.get('auth/logout');
		localStorage.removeItem('user');
		localStorage.removeItem('token');
		this.setAuthHeaders();
	}

	setAuthHeaders(token) {
		if (!token) {
			delete http.defaults.headers.common['Authorization'];
			return
		}
		return http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	}

	loggingIn(data) {
		localStorage.setItem('user', JSON.stringify(data.user));
		localStorage.setItem('token', data.token);
		this.setAuthHeaders(data.token);
	}
}

const checkForToken = (service) => {
	let token = localStorage.getItem('token');
	if (token) {
		service.setAuthHeaders(token);
	}
}

const authService = new AuthService();

checkForToken(authService);

export default authService;