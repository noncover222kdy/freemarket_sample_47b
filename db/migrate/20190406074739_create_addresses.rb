class CreateAddresses < ActiveRecord::Migration[5.2]
  def change
    create_table :addresses do |t|
      t.integer :user_id, null: false
      t.string :post_address
      t.string :prefectures
      t.string :city
      t.string :address
      t.string :building_nama
      t.string :tell_number
      t.timestamps
    end
  end
end
