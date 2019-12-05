class Place < ApplicationRecord
  # validates :address, presence: true
  # geocoded_by :address
  # after_validation :geocode
  validates :latitude, presence: true
  validates :longitude, presence: true

  reverse_geocoded_by :latitude, :longitude
  after_validation :reverse_geocode
end
