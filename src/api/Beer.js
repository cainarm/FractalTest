import { endpoint } from '../data';
import axios from 'axios';


export async function getBeers(page){
    return await axios(`${endpoint}?page=${page}&per_page=15`);
}

export async function getBeerById(id){
    return await axios(`${endpoint}/${id}`);
}