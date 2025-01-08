import axios from 'axios';
import configData from "../config.json";

const baseUrl = "https://676d61530e299dd2ddff5fab.mockapi.io/customer";

export default class MockApi {

  static get() {
    return axios.get(baseUrl);
  }
  
  static getbyid(id) {
    return axios.get(baseUrl + "/" + id);
  }

  static post(customer) {
    return axios.post(baseUrl, customer);
  }

  static put(customer) {
    return axios.put(baseUrl + "/" + customer.id, customer);
  }

  static delete(id)  {
    return axios.delete(baseUrl + "/" + id);
  }

}
