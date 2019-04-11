class Item < ApplicationRecord
  has_many :likes, dependent: :destroy
  has_many :comments
  has_many :item_images, dependent: :destroy
  has_many :trading_comments
  has_many :users, through: :likes
  belongs_to :saler, class_name: "User"
  accepts_nested_attributes_for :item_images
end
