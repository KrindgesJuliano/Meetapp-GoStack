import produce from 'immer';

const INITIAL_STATE = {
  event: null,
  editEvent: null,
  isUpdate: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/CREATE_NEW_MEETUP': {
        draft.event = null;
        break;
      }
      case '@meetup/OPEN_MEETUP_DETAILS': {
        draft.event = action.payload.meetup;
        break;
      }
      case '@meetup/OPEN_MEETUP_EDIT': {
        draft.editEvent = action.payload.meetup;
        draft.isUpdate = true;
        break;
      }
      case '@meetup/UPDATE_MEETUP_SUCCESS': {
        draft.editEvent = null;
        draft.isUpdate = false;
        break;
      }
      default:
    }
  });
}
