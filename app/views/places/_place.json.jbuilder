json.extract! place, :id, :name, :description, :address, :latitude, :longitude, :created_at, :updated_at
json.url place_url(place, format: :json)
