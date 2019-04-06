class CreateWorks < ActiveRecord::Migration[5.2]
  def change
    create_table :works do |t|
      t.text :work_text
      t.references :user, null: false
      t.timestamps
    end
  end
end
