import axios from 'axios';

const API = {
 addItem : (name) => axios.post('/api/items', name),
 getItems : () => axios.get('/api/items')

}

export default API