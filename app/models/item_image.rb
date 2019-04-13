class ItemImage < ApplicationRecord
  validates :image, presence: true
  belongs_to :item, optional: true
  mount_uploader :image, ImageUploader
end
