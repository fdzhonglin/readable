
import fetchPostsApi from '../utils/posts_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts,
});

export const fetchPosts = () => dispatch => (
  fetchPostsApi()
    .then(posts => dispatch(receivePosts(posts)))
);
