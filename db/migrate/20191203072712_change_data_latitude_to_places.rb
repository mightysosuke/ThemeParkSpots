class ChangeDataLatitudeToPlaces < ActiveRecord::Migration[5.2]
  def up
    change_column :places, :latitude, :decimal, precision: 11, scale: 8
  end
end
