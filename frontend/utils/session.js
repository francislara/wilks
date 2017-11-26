export const postUser = user => {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user }
  });
};

export const postSession = user => {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user }
  });
};

export const deleteSession = () => {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  });
};

export const updateUser = user => {
  return $.ajax({
    url: `api/users/${user.id}`,
    method: 'PATCH',
    data: { user }
  });
};
