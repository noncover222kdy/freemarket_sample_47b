class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :category, null: false
      t.text :discription, null: false
      t.string :size, null: false
      t.string :brand, null: false
      t.string :status, null: false
      t.string :shopping_charges, null: false
      t.string :source_area, null: false
      t.string :shopping_days, null: false
      t.integer :price, null: false
      t.integer :saler_id, null: false, foreign_key: true
      t.timestamps
    end
  end
end
