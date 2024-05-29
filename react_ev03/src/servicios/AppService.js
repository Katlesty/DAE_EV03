import axios from 'axios';

class AppService {

    baseUrl = 'http://localhost:8000/biblioteca';

    getAutores(){
        return axios.get(this.baseUrl + '/autor')
        .then(res => res.data); 
    }

    getLibros(){
        return axios.get(this.baseUrl + '/libro')
        .then(res => res.data); 
    }

    getUsuarios(){
        return axios.get(this.baseUrl + '/usuario')
        .then(res => res.data); 
    }

    getPrestamos(){
        return axios.get(this.baseUrl + '/prestamos')
        .then(res => res.data); 
    }

    postPrestamos(nuevoPrestamo){
        return axios.post(this.baseUrl + '/prestamos',nuevoPrestamo)
        .then(res => res.data); 
    }

    deletePrestamo(idPrestamo){
        return axios.delete(this.baseUrl + '/prestamos/' + idPrestamo)
        .then(res => res.data);
    }

    putPrestamo(idPrestamo,datos){
        return axios.put(this.baseUrl + '/prestamos/' + idPrestamo,datos)
        .then(res => res.data)
    }

}

export default new AppService;