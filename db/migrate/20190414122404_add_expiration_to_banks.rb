class AddExpirationToBanks < ActiveRecord::Migration[5.2]
  def change
    add_column :banks, :expiration_month, :integer
    add_column :banks, :expiration_year, :integer
  end
end
