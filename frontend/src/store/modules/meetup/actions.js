export function createNewMeetup(data) {
  return {
    type: '@meetup/CREATE_NEW_MEETUP',
    payload: { data },
  };
}

export function openMeetupDetails(meetup) {
  return {
    type: '@meetup/OPEN_MEETUP_DETAILS',
    payload: { meetup },
  };
}

export function openMeetupEdit(meetup) {
  return {
    type: '@meetup/OPEN_MEETUP_EDIT',
    payload: { meetup },
  };
}

export function updateMeetupRequest(data, editMeetup) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: { data, editMeetup },
  };
}

export function updateMeetupSuccess() {
  return {
    type: '@meetup/UPDATE_MEETUP_SUCCESS',
  };
}

export function cancelMeetupRequest(id) {
  return {
    type: '@meetup/CANCEL_MEETUP_REQUEST',
    payload: { id },
  };
}

export function updateMeetupFailure() {
  return {
    type: '@meetup/UPDATE_MEETUP_FAILURE',
  };
}
