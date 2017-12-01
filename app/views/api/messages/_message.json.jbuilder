json.extract! message, :id, :channel_id, :author_id, :body
json.timestamp message.created_at.strftime("%H:%M:%S")