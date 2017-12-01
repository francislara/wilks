json.extract! team, :id, :owner_id, :name, :img_url
json.channels team.channels.pluck(:id)
json.members team.members.pluck(:user_id)