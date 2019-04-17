class RemoveAllFromBanks < ActiveRecord::Migration[5.2]
  def change
    remove_column :banks, :card_number
    remove_column :banks, :security_code
    remove_column :banks, :expiration_month
    remove_column :banks, :expiration_year
  end
end
