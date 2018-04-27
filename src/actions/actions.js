export const VOTE_POST = 'VOTE_POST'
export const POST_SOMETHING = 'POST_SOMETHING'
export const COMMENT_ON_POST = 'COMMENT_ON_POST'

export function postSomething ({ text, category }) {
  return {
    type: POST_SOMETHING,
    text,
    category,
  }
}

export function votePost ({ post, vote  }) {
  return {
    type: VOTE_POST,
    post,
    vote,
  }
}

export function commentPost ({ post, comment  }) {
  return {
    type: commentPost,
    post,
    comment,
  }
}
