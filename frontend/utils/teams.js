export const postTeam = team => {
  return $.ajax({
    url: '/api/teams',
    method: 'POST',
    data: { team }
  });
};

export const getTeam = team => {
  return $.ajax({
    url: `/api/teams/${team.id}`,
    method: 'GET',
    data: { team }
  });
};

export const updateTeam = team => {
  return $.ajax({
    url: `/api/teams/${team.id}`,
    method: 'PATCH',
    data: { team }
  });
};

export const deleteTeam = team => {
  return $.ajax({
    url: `/api/teams/${team.id}`,
    method: 'DELETE',
    data: { team }
  });
};