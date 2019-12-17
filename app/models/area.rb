class Area < ApplicationRecord
  belongs_to :park
  has_many :places
end
