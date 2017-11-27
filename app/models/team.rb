class Team < ApplicationRecord
  validates :name, :owner_id, presence: true

  belongs_to :owner,
    primary_key: :id,
    class_name: :User,
    foreign_key: :owner_id

  has_many :joins,
    primary_key: :id,
    class_name: :JoinedTeam,
    foreign_key: :team_id
    
end
