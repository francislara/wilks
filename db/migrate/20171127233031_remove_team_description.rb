class RemoveTeamDescription < ActiveRecord::Migration[5.1]
  def change
    remove_column :teams, :description
  end
end
