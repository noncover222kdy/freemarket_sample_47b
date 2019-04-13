class Deal < ApplicationRecord
  belongs_to :buyer, class_name: "User"
  belongs_to :bought_item, foreign_key: "buyer_id", class_name: "Item"
  belongs_to :selling_item, -> { where("buyer_id is not NULL") }, foreign_key: "saler_id", class_name: "Item"
  belongs_to :sold_item, -> { where("buyer_id is not NULL") }, foreign_key: "saler_id", class_name: "Item"
  has_many :trading_comments
end
