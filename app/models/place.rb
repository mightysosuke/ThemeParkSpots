class Place < ApplicationRecord
  validate :add_error_sample

  validates :name, presence: true
  validates :description, presence: true
  validates :latitude, presence: true
  validates :longitude, presence: true
  # validates :images, presence: { message: "をアップロードしてください" }

  after_validation :remove_unnecessary_error_messages

  # 緯度、経度から住所を取得
  reverse_geocoded_by :latitude, :longitude
  after_validation :reverse_geocode

  has_many_attached :images
  belongs_to :area
  belongs_to :user

  def add_error_sample
    # 地図上の選択が空のときにエラーメッセージを追加する
    if latitude.nil?
      errors.add(:base, "地図上に場所を設定してください")
    end
  end

  def remove_unnecessary_error_messages
    # 緯度、経度のエラーメッセージを削除
    if latitude.nil?
      errors.messages.delete(:latitude)
      errors.messages.delete(:longitude)
    end
  end

end
