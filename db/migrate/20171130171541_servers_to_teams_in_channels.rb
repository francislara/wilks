class ServersToTeamsInChannels < ActiveRecord::Migration[5.1]
  def change
    remove_column :channels, :server_id
    add_column :channels, :team_id, :string, null: false

    add_index :channels, :team_id

  end
end
