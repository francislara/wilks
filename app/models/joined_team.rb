# == Schema Information
#
# Table name: joined_teams
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  team_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class JoinedTeam < ApplicationRecord
  validates :user_id, :team_id, presence: true
  validates :user_id, uniqueness: { scope: :team_id }

  belongs_to :user
  belongs_to :team
end
