import axios from 'axios';
import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { BASE_URL } from '../config';
import createAuthStore from '../store/AuthStore';

const Header = () => {
  const token = createAuthStore((state) => state.token);
  const setToken = createAuthStore((state) => state.setToken);
  const successLogout = createAuthStore((state) => state.successLogout);

  const _handleMore = async () => {
    try {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      await axios.post(`${BASE_URL}/api/auth/logout`)
    .then((res) => {
      if (res.data.success) {
        setToken(null);
        successLogout();
      }
     
    })
    .catch((err) => {
      console.log(err);
      setError(err.response.data.message);

    })

    }catch{
      setError("Something went wrong");
    }
  };

  return (
    <Appbar.Header >
      <Appbar.Content title="10xTrucks"  style={{alignItems:'center'}}/>
      <Appbar.Action icon="logout" onPress={_handleMore} />
    </Appbar.Header>
  );
};

export default Header;