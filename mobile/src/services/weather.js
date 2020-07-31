// ba9bd08c
import axios from 'axios';

const weather = axios.create({
  baseURL: 'https://api.hgbrasil.com/weather?key=ba9bd08c&user_ip=remote'
});

export default weather;