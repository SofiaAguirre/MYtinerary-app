import axios from 'axios'

export const register = newUser => {
  return axios
    .post('/users/register', {
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
      profileImg: newUser.profileImg
    })
    .then(response => {
      return response.data;
    })
}

export const googlelogin = user => {
  return axios
    .post('/users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      console.log(response.data);
      if (typeof response.data === 'string'){
      localStorage.setItem('usertoken', response.data)
      window.location.reload();
      } else {
        console.log("password incorrect");
      }
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
export const login = user => {
  return axios
    .post('/users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      console.log(response.data);
      if (typeof response.data === 'string'){
      localStorage.setItem('usertoken', response.data)
      } else {
        console.log("password incorrect");
      }
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
export const getProfile = user => {
  return axios
    .get('/users/profile', {
      //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}