import { LOCAL_STORAGE_KEY } from "../constants/local-storage-key";

const load = (key) => {
  try {
    const response = localStorage.getItem(key);
    console.log("load - JSON.parse(response): ", JSON.parse(response));
    return response === null ? undefined : JSON.parse(response);
  } catch (error) {
    // console.error('Get state error: ', error.message);
    alert('Get state error: ', error.message);
  }
}

const save = (key, value) => {
  try {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
  } catch (error) {
    // console.error('Set state error: ', error.message);
    alert('Set state error: ', error.message);
  }
}

export const loadContacts = () => {
  return load(LOCAL_STORAGE_KEY);
};

export const saveContacts = (value) => {
  console.log('saveContacts - contacts: ', value);
  save(LOCAL_STORAGE_KEY, value);
};