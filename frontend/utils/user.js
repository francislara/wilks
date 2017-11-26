
export const updateUser = user => {
  return $.ajax({
    url: 'api/users',
    method: 'PATCH',
    data: { user }
  });
};