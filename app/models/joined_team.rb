class JoinedTeam < ApplicationRecord
  validates :user_id, :team_id, presence: true
  validates :user_id, uniqueness: { scope: :team_id }

  belongs_to :user
  belongs_to :team
end
