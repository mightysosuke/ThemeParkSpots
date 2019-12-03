class ChangeDataLongitudeToPlaces < ActiveRecord::Migration[5.2]
  def change
    change_column :places, :longitude, :decimal, precision: 11, scale: 8
  end
end
