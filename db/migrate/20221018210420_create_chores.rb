class CreateChores < ActiveRecord::Migration[6.1]
  def change
    create_table :chores do |t|
      t.string :name
      t.boolean :starred
      t.integer :user_id
      t.integer :room_id

      t.timestamps
    end
  end
end
