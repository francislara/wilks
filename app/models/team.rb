# == Schema Information
#
# Table name: teams
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  owner_id   :integer          not null
#  img_url    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Team < ApplicationRecord
  validates :name, :owner_id, presence: true

  belongs_to :owner,
    primary_key: :id,
    class_name: :User,
    foreign_key: :owner_id

  has_many :members,
    primary_key: :id,
    class_name: :JoinedTeam,
    foreign_key: :team_id

  has_many :channels
    
end
