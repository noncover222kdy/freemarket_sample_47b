class Item < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  has_many :likes, dependent: :destroy
  has_many :comments
  has_many :item_images, dependent: :destroy
  has_many :trading_comments

  has_many :likes
  accepts_nested_attributes_for :item_images, allow_destroy: true

  belongs_to :user, class_name: 'User', primary_key: :id, foreign_key: :saler_id

  belongs_to_active_hash :prefecture

  enum status: {
    very_new: "新着、未使用",
    somewhat_new: "未使用に近い",
    nomal: "目立った傷や汚れなし",
    somewhat_dirty: "やや傷や汚れあり",
    dirty: "傷や汚れなし",
    very_dirty: "全体的に状態が悪い"
  }

  enum shopping_charges: {
    postage_included: "送料込み",
    cash_on_delivery: "着払い"
  }

  enum shopping_days: {
    one_to_two: "1~2日で発送",
    two_to_three: "2~3日で発送",
    four_to_seven: "4~7日で発送"
  }
end
