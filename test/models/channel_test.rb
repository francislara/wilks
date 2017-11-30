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

require 'test_helper'

class ChannelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
