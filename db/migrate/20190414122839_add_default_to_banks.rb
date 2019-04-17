class AddDefaultToBanks < ActiveRecord::Migration[5.2]
  def change
    change_column_null :banks, :expiration_month, false
    change_column_null :banks, :expiration_year, false
  end
end
