import axios from 'axios';

const ERR_OK = 0;

export function get (url) {
  return function (params) {
    return axios.get(url, { params }).then(res => {
      const { data } = res.data;
      if (data.error === ERR_OK) {
        return data;
      }
    });
  };
}
