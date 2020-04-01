class TitleToApartments < ActiveRecord::Migration[6.0]
  def change
    add_column :apartments, :title, :string
  end
end
