export const postMessage = message => (
  $.ajax({
    url: '/api/messages',
    method: 'POST',
    data: { message }
  })
);

export const getMessage = message => (
  $.ajax({
    url: `api/messages/${message.id}`,
    method: 'GET',
  })
);

export const getMessageIndex = () => (
  $.ajax({
    url: 'api/messages',
    method: 'GET'
  })
);