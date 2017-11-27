import * as APIUtil from '../utils/teams';

export const RECEIVE_TEAM = "RECEIVE_TEAM";
export const RECEIVE_ALL_TEAMS = "RECEIVE_ALL_TEAMS";
export const REMOVE_TEAM = "REMOVE_TEAM";
export const RECEIVE_TEAM_ERRORS = "RECEIVE_TEAM_ERRORS";

const receiveTeam = team => ({
  type: RECEIVE_TEAM,
  team
});

const receiveAllTeams = teams => ({
  type: RECEIVE_ALL_TEAMS,
  teams
});

const removeTeam = team => ({
  type: REMOVE_TEAM,
  team
});

const receiveErrors = errors => ({
  type: RECEIVE_TEAM_ERRORS,
  errors
});

export const createTeam = newTeam => dispatch => (
  APIUtil.postTeam(newTeam).then(team => (
    dispatch(receiveTeam(team))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const getTeam = newTeam => dispatch => (
  APIUtil.getTeam(newTeam).then(team => (
    dispatch(receiveTeam(team))
  ))
);

export const getTeamsIndex = () => dispatch => (
  APIUtil.getTeamsIndex().then(teams => (
    dispatch(receiveAllTeams(teams))
  ))
);

export const updateTeam = team => dispatch => (
  APIUtil.updateTeam(team).then(updatedTeam => (
    dispatch(receiveTeam(team))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteTeam = teamId => dispatch => (
  APIUtil.deleteTeam(teamId).then(team =>(
    dispatch(removeTeam(team))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const joinTeam = teamId => dispatch => (
  APIUtil.joinTeam(teamId).then(team => (
    dispatch(receiveTeam(team))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const leaveTeam = teamId => dispatch => (
  APIUtil.leaveTeam(teamId).then(team => (
    dispatch(removeTeam(team))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);