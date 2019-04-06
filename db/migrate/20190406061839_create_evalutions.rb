class CreateEvalutions < ActiveRecord::Migration[5.2]
  def change
    create_table :evalutions do |t|
      t.references :user, null: false
      t.integer :result, null: false
      t.timestamps
    end
  end
end
