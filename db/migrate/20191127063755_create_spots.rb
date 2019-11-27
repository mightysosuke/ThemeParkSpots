class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.integer :user_id
      t.string :spot_name
      t.string :spot_position

      t.timestamps
    end
  end
end
