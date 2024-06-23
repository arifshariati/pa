import axios from 'axios';

export const testBackend = async (): Promise<string | undefined> => {
  try {
    const { data } = await axios.get('http://localhost:4000/api');
    return data.message;
  } catch (e) {
    console.log(e);
  }
};
