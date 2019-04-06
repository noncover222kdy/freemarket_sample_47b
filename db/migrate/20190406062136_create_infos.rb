class CreateInfos < ActiveRecord::Migration[5.2]
  def change
    create_table :infos do |t|
      t.references :user, null: false
      t.text :info
      t.timestamps
    end
  end
end
