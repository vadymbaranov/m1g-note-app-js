import { client } from '../utils/storage';

export function getAll() {
  return client.get();
}

export function addOne(data) {
  return client.post(data);
}

export function updateOne(id, newData) {
  return client.patch(id, newData);
}
