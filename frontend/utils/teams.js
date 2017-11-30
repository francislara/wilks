export const postTeam = team => (
  $.ajax({
    url: '/api/teams',
    method: 'POST',
    data: { team }
  })
);

export const getTeam = team => (
  $.ajax({
    url: `/api/teams/${team.id}`,
    method: 'GET'
  })
);

export const getTeamsIndex = () => (
  $.ajax({
    url: '/api/joined_teams',
    method: 'GET'
  })
);

export const updateTeam = team => (
  $.ajax({
    url: `/api/teams/${team.id}`,
    method: 'PATCH',
    data: { team }
  })
);

export const deleteTeam = teamId => (
  $.ajax({
    url: `/api/teams/${teamId}`,
    method: 'DELETE'
  })
);

export const joinTeam = teamId => (
  $.ajax({
    url: `api/teams/${teamId}/joined_teams`,
    method: 'POST'
  })
);

export const leaveTeam = teamId => (
  $.ajax({
    url: `api/teams/${teamId}/joined_team`,
    method: 'DELETE'
  })
);