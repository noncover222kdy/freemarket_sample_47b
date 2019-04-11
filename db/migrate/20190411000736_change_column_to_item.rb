class ChangeColumnToItem < ActiveRecord::Migration[5.2]
  def change
    change_column :items, :brand, :string, null: true
    change_column :items, :size, :string, null: true
    change_column :items, :name, :string, null: false
  end
end
