class Item < ApplicationRecord
  has_many :likes, dependent: :destroy
  has_many :comments
  has_many :item_images, dependent: :destroy
  has_many :trading_comments

  has_many :likes
  accepts_nested_attributes_for :item_images, allow_destroy: true

  belongs_to :user, class_name: 'User', primary_key: :id, foreign_key: :saler_id

  def self.search(search)
    return Item.all unless search
    Item.where(['name LIKE ? OR discription LIKE ? OR size LIKE ? OR brand LIKE ? OR status LIKE ? OR price LIKE ?', "%#{search}%", "%#{search}%", "%#{search}%", "%#{search}%", "%#{search}%", "%#{search}%"])
  end

end
