class Item < ApplicationRecord
  has_many :likes, dependent: :destroy
  has_many :comments
  has_many :item_images, dependent: :destroy
  has_many :trading_comments

  has_many :likes, through: :users
  accepts_nested_attributes_for :item_images, allow_destroy: true

  belongs_to :user, class_name: 'User', primary_key: :id, foreign_key: :saler_id

end
