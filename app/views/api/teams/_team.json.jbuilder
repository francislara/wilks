json.extract! team, :id, :owner_id, :name, :img_url
json.channels team.channels.pluck(:id)