class CreateTeams < ActiveRecord::Migration[5.1]
  def change
    create_table :teams do |t|
      t.string :name, null: false
      t.integer :owner_id, null: false
      t.string :img_url
      t.string :description

      t.timestamps
    end
    add_index :teams, :owner_id
  end
end
