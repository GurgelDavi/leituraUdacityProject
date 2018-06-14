import * as postsApi from '../utils/postsApi'

export const VOTE_POST = 'VOTE_POST'
export const POST_SOMETHING = 'POST_SOMETHING'
export const COMMENT_ON_POST = 'COMMENT_ON_POST'
export const LOAD_POSTS = 'LOAD_POSTS'
export const LOAD_POST_BY_ID = 'LOAD_POST_BY_ID'
export const RECIVE_CATEGORIES = 'RECIVE_CATEGORIES'


export const reciveCategories = categories => ({
  type: RECIVE_CATEGORIES,
  categories,
})

export const loadCategories = () => dispatch => (
  postsApi.getCategories().then(
    categories=> dispatch(reciveCategories(categories))
  )
);

export function postSomething ({ post, category }) {
  return {
    type: POST_SOMETHING,
    post,
    category,
  }
}

export function votePost ({ postId, vote  }) {
  return {
    type: VOTE_POST,
    postId,
    vote,
  }
}

export function commentPost ({ parentPost, post  }) {
  return {
    type: COMMENT_ON_POST,
    post,
    parentPost,
  }
}

export function loadPosts ({  posts  }) {
  return {
    type: LOAD_POSTS,
    posts,
  }
}
