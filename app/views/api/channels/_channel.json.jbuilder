json.extract! channel, :id, :team_id, :name, :description
json.messages channel.messages.pluck(:id)