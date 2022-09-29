import http from './http-common'

class TechniciansApiService {
    getAll() {
        return http.get('/technicians');
    }

    getById(id) {
        return http.get(`/technicians/${ id }`);
    }

    getByUserId(userId) {
        return http.get(`/technicians/user/${ userId }`);
    }

    create(data) {
        return http.post('/technicians', data);
    }

    update(id, data) {
        return http.put(`/technicians/${ id }`, data);
    }

    delete(id) {
        return http.delete(`/technicians/${ id }`);
    }
}

export default new TechniciansApiService();