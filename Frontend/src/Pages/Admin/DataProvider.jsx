import { fetchUtils } from 'react-admin';
import ServerProvider from './ra-data-springboot-rest.js';

export const dataProvider = ServerProvider('http://localhost:8080');