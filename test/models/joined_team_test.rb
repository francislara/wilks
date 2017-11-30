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

require 'test_helper'

class JoinedTeamTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
