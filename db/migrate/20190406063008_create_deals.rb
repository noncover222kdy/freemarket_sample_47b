class CreateDeals < ActiveRecord::Migration[5.2]
  def change
    create_table :deals do |t|
      t.integer :buyer_id, null: false, foreign_key: true
      t.integer :selling_id, null: false, foreign_key: true
      t.integer :bought_items_id, null: false, foreign_key: true
      t.integer :sold_items_id, null: false, foreign_key: true
      t.timestamps
    end
  end
end
