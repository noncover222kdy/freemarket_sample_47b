class CreateTradingComments < ActiveRecord::Migration[5.2]
  def change
    create_table :trading_comments do |t|
      t.integer :buyer_id, null: false
      t.integer :saler_id, null: false
      t.text :message
      t.timestamps
    end
  end
end
