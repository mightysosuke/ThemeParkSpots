class Place < ApplicationRecord
  # validates :address, presence: true
  # geocoded_by :address
  # after_validation :geocode
  validates :latitude, presence: true
  validates :longitude, presence: true

  # 緯度、経度から住所を取得
  reverse_geocoded_by :latitude, :longitude
  after_validation :reverse_geocode

  has_many_attached :images
  belongs_to :area
  belongs_to :user
end
