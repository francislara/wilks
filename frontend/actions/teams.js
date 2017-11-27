import * as APIUtil from '../utils/teams';

export const RECEIVE_TEAM = "RECEIVE_TEAM";
export const REMOVE_TEAM = "REMOVE_TEAM";
export const RECEIVE_TEAM_ERRORS = "RECEIVE_TEAM_ERRORS";

const receiveTeam = team => ({
  type: RECEIVE_TEAM,
  team
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