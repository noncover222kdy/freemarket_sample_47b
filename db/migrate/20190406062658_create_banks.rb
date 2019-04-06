class CreateBanks < ActiveRecord::Migration[5.2]
  def change
    create_table :banks do |t|
      t.references :user, null: false
      t.integer :card_number, null: false
      t.integer :expiration_date, null: false
      t.integer :day, null: false
      t.integer :security_code, null: false
      t.timestamps
    end
  end
end
