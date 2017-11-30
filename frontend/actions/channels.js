import * as APIUtil from '../utils/channels';

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";

const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

const receiveAllChannels = channels => ({
  type: RECEIVE_ALL_CHANNELS,
  channels
});

const removeChannel = channel => ({
  type: REMOVE_CHANNEL,
  channel
});

const receiveErrors = errors => ({
  type: RECEIVE_CHANNEL_ERRORS,
  errors
});

export const createChannel = newChannel => dispatch => (
  APIUtil.postChannel(newChannel).then(channel => (
    dispatch(receiveChannel(channel))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const getChannelsIndex = teamId => dispatch => (
  APIUtil.getChannelsIndex(teamId).then(channels => (
    dispatch(receiveAllChannels(channels))
  ))
);

export const deleteChannel = channelId => dispatch => (
  APIUtil.deleteChannel(channelId).then(channel => (
    dispatch(removeChannel(channel))
  ))
);