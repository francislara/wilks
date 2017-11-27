import * as APIUtil from '../utils/teams';

export const RECEIVE_TEAM = "RECEIVE_TEAM";
export const REMOVE_TEAM = "REMOVE_TEAM";

const receiveTeam = team => ({
  type: RECEIVE_TEAM,
  team
});

const removeTeam = team => ({
  type: REMOVE_TEAM,
  team
});