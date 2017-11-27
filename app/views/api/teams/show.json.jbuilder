json.set! @team.id do
  json.partial! 'api/teams/team', team: @team
end


