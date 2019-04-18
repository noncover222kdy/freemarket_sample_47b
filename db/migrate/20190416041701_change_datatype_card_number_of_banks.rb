class ChangeDatatypeCardNumberOfBanks < ActiveRecord::Migration[5.2]
  def change
    change_column :banks, :card_number, :string
  end
end
