# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  channel_id :integer          not null
#  author_id  :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
  validates :body, :author_id, :channel_id, presence: true

  belongs_to :channel

  belongs_to :author,
    primary_key: :id,
    class_name: :User,
    foreign_key: :author_id
end
