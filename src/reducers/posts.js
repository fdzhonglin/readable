
import { RECEIVE_POSTS } from '../actions/post_actions';

export default function posts(state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    default:
      return state;
  }
}
