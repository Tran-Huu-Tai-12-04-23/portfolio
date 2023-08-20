import axios from 'axios';

class Service {
    async getProvinces() {
        let url = 'https://provinces.open-api.vn/api/';
        const provinces = await this.getDataFromApi(url);
        return provinces;
    }

    async getDataFromApi(linkApi: any, query = '') {
        const result = await axios.get(linkApi + query);
        return result;
    }
    async delete(linkApi: any, query = '') {
        const result = await axios.delete(linkApi + query);
        return result;
    }

    async callApi(linkApi: any, data: any) {
        const result = await axios.post(linkApi, data);
        return result;
    }

    async update(linkApi: any, data: any) {
        const result = await axios.put(linkApi, data);
        return result;
    }
}

export default new Service();
