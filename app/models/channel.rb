# == Schema Information
#
# Table name: channels
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  team_id     :string           not null
#

class Channel < ApplicationRecord
  validates :name, :team_id, presence: true

  belongs_to :team
end
