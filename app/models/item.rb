class Item < ApplicationRecord
  has_many :likes, dependent: :destroy
  has_many :comments
  has_many :item_images
  has_many :trading_comments
  has_many :users, through: :likes
  belongs_to :saler, class_name: "User"
end
