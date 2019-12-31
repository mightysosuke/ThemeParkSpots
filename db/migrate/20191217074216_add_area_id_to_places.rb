class AddAreaIdToPlaces < ActiveRecord::Migration[5.2]
  def change
    add_column :places, :area_id, :integer
  end
end
