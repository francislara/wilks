json.extract! @user, :username, :id, :email, :img_url
json.teams @user.joined_teams.pluck(:team_id)
