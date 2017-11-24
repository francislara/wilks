class AddImgUrlValidation < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :img_url, :string, null: false
  end
end
