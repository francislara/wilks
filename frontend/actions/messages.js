import * as APIUtil from '../utils/messages';

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_ALL_MESSAGES = "RECIEVE_ALL_MESSAGES";
export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS";

const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

const receiveAllMessages = messages => ({
  type: RECEIVE_ALL_MESSAGES,
  messages
});

const receiveErrors = errors => ({
  type: RECEIVE_MESSAGE_ERRORS,
  errors
});

export const createMessage = newMessage => dispatch => (
  APIUtil.postMessage(newMessage).then(message => (
    dispatch(receiveMessage(message))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const getMessageIndex = () => dispatch => (
  APIUtil.getMessageIndex().then(messages => (
    dispatch(receiveAllMessages(messages))
  ))
);