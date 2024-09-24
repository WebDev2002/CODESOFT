import API from '../axios/Axiosinstance';

const Refreshtoken = async () => {
  try {
    const { data } = await API.post('/auth/token');
    localStorage.setItem('accessToken', data.accessToken);
    return data.accessToken;
  } catch (error) {
    console.error('Token refresh failed', error);
    return null;
  }
};

export default Refreshtoken

