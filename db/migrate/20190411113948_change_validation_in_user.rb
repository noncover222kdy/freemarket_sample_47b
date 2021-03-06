class ChangeValidationInUser < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :nickname, :string, null: true
    change_column :users, :email, :string, null: true
    change_column :users, :encrypted_password, :string, null: true
    change_column :users, :first_name, :string, null: true
    change_column :users, :last_name, :string, null: true
    change_column :users, :first_name_kana, :string, null: true
    change_column :users, :last_name_kana, :string, null: true
    change_column :users, :birthday, :datetime, null: true
  end
end
