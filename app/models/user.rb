class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :authentication_keys => [:account_id]

  validates_uniqueness_of :account_id
  validates_presence_of :name
  validates_presence_of :account_id
  validates_presence_of :email

  def email_required?
    false
  end
  def email_changed?
    false
  end

  has_many :places

end
