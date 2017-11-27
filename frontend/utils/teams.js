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

export const deleteTeam = teamId => {
  return $.ajax({
    url: `/api/teams/${teamId}`,
    method: 'DELETE'
  });
};

export const joinTeam = teamId => {
  return $.ajax({
    url: `api/teams/${teamId}/joined_teams`,
    method: 'POST'
  });
};

export const leaveTeam = teamId => {
  return $.ajax({
    url: `api/teams/${teamId}/joined_team`,
    method: 'DELETE'
  });
};