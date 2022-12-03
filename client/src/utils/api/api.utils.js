import axios from 'axios'

export const loginUser = async (email, password) => {
  await axios.post('http://localhost:9000/users/login', {
    email, 
    password
  })
    .then(function (response) {
      return response.data
    })
}

export const signUpUser = async (name, email, password) => {
  await axios.post('http://localhost:9000/users/', {
    name,
    email,
    password
  })
    .then(function (response) {
      return response.data
    })
}

// logout user
export const logoutUser = async (token) => {
  await axios.post('http://localhost:9000/users/logout', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(function (response) {
    console.log(response)
  })
}

// get current user
export const getCurrentUser = async () => {
  await axios.get('http://localhost:9000/users/me')
    .then(function (response) {
      console.log(response)
    })}