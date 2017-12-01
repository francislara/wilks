export const postUser = user => (
  $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user }
  })
);

export const getUserIndex = () => (
  $.ajax({
    url: 'api/users',
    method: 'GET'
  })
);

export const postSession = user => (
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user }
  })
);

export const deleteSession = () => (
  $.ajax({
    url: '/api/session',
    method: 'DELETE'
  })
);

export const updateUser = user => (
  $.ajax({
    url: `api/users/${user.id}`,
    method: 'PATCH',
    data: { user }
  })
);
