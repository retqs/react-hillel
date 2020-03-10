import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://5e4185d12001b900146ba830.mockapi.io',
  headers: { 'Content-Type': 'application/json' }
});

export const tableAPI = axios.create({
  baseURL: 'http://5e4185d12001b900146ba830.mockapi.io/tables',
  headers: { 'Content-Type': 'application/json' }
});

export const waitersAPI = axios.create({
  baseURL: 'http://5e4185d12001b900146ba830.mockapi.io/waiters',
  headers: { 'Content-Type': 'application/json' }
});
