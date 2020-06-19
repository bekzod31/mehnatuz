import axios from 'axios';
import { AUTH_SUCCESS } from '../Constants/Actions';



export function loginRequest(data) {
    return (dispatch) => {
        return axios.post('http://localhost:9000/api/auth/signin', data).then(res => {
            if (res.data.accessToken !== '') {
                // localStorage.setItem('user', res.data.username);
                // localStorage.setItem('token', res.data.accessToken);
                sessionStorage.setItem('user', res.data.username);
                sessionStorage.setItem('token', res.data.accessToken);
                axios.defaults.headers.common['Authorization'] = "Bearer" + res.data.accessToken;
                dispatch({ type: AUTH_SUCCESS, auth: res.data.username })
                window.location.reload(false);
            }
            else {
                console.log('javob kelmadi')
            }
        }).catch(error => {
            alert(error)
        })
}
}
