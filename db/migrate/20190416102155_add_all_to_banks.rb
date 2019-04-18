class AddAllToBanks < ActiveRecord::Migration[5.2]
  def change
    add_column :banks, :customer_id, :string
    add_column :banks, :card_id, :string
  end
end
