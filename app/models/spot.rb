class Spot < ApplicationRecord
  validates :user_id, presence: true
  validates :spot_name, presence: true
  validates :spot_position, presence: true

  belongs_to :user
end
