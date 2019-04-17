class RemoveDayFromDeals < ActiveRecord::Migration[5.2]
  def change
    remove_column :banks, :day, :integer
    remove_column :banks, :expiration_date, :integer
  end
end

