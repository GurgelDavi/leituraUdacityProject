export const VOTE_POST = 'VOTE_POST'
export const POST_SOMETHING = 'POST_SOMETHING'
export const COMMENT_ON_POST = 'COMMENT_ON_POST'

export function postSomething ({ post, category }) {
  return {
    type: POST_SOMETHING,
    post,
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

export function commentPost ({ parentPost, post  }) {
  return {
    type: COMMENT_ON_POST,
    post,
    parentPost,
  }
}
