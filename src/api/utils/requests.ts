import {IAdmin} from "../../interfaces/admin";
import axios from "axios";
import Cookies from "universal-cookie";

const BASE_URL = 'http://localhost:4000/api';
const cookies = new Cookies();

//admin
const auth = (endpoint: string, body: IAdmin) => {
    return axios.post(`${BASE_URL}/${endpoint}`, body, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const POST = (endpoint: string, body: {}) => {
    return axios.post(`${BASE_URL}/${endpoint}`, body, {
        headers: {
            'Authorization': `Bearer ${cookies.get('adminToken')}`,
            'Content-Type': 'application/json'
        }
    });
}

const PUT = (endpoint: string, body: {}) => {
    return axios.put(`${BASE_URL}/${endpoint}`, body, {
        headers: {
            'Authorization': `Bearer ${cookies.get('adminToken')}`,
            'Content-Type': 'application/json'
        }
    });
}

const GET = (endpoint: string, body: {}) => {
    return axios.get(`${BASE_URL}/${endpoint}`, {
        headers: {
            'Authorization': `Bearer ${cookies.get('adminToken')}`,
        }
    });
}

const DELETE = (endpoint: string, body: {}) => {
    return axios.delete(`${BASE_URL}/${endpoint}`, {
        headers: {
            'Authorization': `Bearer ${cookies.get('adminToken')}`,
        }
    });
}

//user
const getNoToken = (endpoint: string, body: {}) => {
    return axios.get(`${BASE_URL}/${endpoint}`);
}


export default {auth, POST, PUT, GET, DELETE, getNoToken};