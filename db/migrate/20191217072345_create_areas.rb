class CreateAreas < ActiveRecord::Migration[5.2]
  def change
    create_table :areas do |t|
      t.integer :park_id
      t.string :name

      t.timestamps
    end
  end
end
