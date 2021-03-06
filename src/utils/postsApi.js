const api = 'http://localhost:3001'

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)


const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getPostsByCat = (category) =>
    fetch(`${api}/${category}/posts/`, {
      method:'GET',
      headers: { Authorization:'whatever-you-want' },
     })
      .then(res => res.json())
      .then(data => data)

export const getPosts = () =>
    fetch(`${api}/posts`, { headers })
      .then(res => res.json())
      .then(data => data)

export const getPost = (postId) => //maybe working ??
  fetch(`${api}/posts/${postId}`, {
    method:'GET',
    headers: { Authorization:'whatever-you-want' },
  })
    .then(res => res.json())
    .then(data => data.posts)
