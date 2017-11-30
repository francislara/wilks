export const postChannel = channel => (
  $.ajax({
    url: '/api/channels',
    method: 'POST',
    data: { channel }
  })
);

export const getChannel = channelId => (
  $.ajax({
    url: `api/channels/${channelId}`,
    method: 'GET'
  })
);

export const getChannelsIndex = teamId => (
  $.ajax({
    url: `api/teams/${teamId}/channels`,
    method: 'GET'
  })
);

export const deleteChannel = channelId => (
  $.ajax({
    url: `api/channels/${channelId}`,
    method: 'DELETE'
  })
);