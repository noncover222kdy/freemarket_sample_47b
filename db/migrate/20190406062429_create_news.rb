class CreateNews < ActiveRecord::Migration[5.2]
  def change
    create_table :news do |t|
      t.references :user,null: false
      t.text :news
      t.timestamps
    end
  end
end
