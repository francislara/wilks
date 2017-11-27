class CreateJoinedTeams < ActiveRecord::Migration[5.1]
  def change
    create_table :joined_teams do |t|
      t.integer :user_id, null: false
      t.integer :team_id, null: false

      t.timestamps
    end

    add_index :joined_teams, :user_id
    add_index :joined_teams, :team_id
  end
end
