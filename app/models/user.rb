class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :authentication_keys => [:account_id]

  validates :name, presence: true
  validates :account_id, presence: true, uniqueness: true, format: { with: /\A[a-zA-Z0-9_\-.]{3,15}\z/ }
  validates :email, presence: true

  def email_required?
    false
  end
  def email_changed?
    false
  end

  has_many :places

end
