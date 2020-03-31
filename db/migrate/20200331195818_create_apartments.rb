class CreateApartments < ActiveRecord::Migration[6.0]
  def change
    create_table :apartments do |t|
      t.string :street
      t.string :city
      t.string :state
      t.integer :postal_code
      t.string :manager_name
      t.string :manager_contact
      t.string :manager_contact_hours

      t.timestamps
    end
  end
end
