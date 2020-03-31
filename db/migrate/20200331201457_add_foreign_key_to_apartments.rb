class AddForeignKeyToApartments < ActiveRecord::Migration[6.0]
  def change
    add_column :apartments, :user_id, :integer
  end
end
