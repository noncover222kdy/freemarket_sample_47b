class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :omniauthable

  has_many :items

  has_many :works
  has_many :infos
  has_many :news
  has_many :comments
  has_many :trading_comments
  has_many :evalutions
  has_many :banks
  has_many :addresses
  has_many :likes, dependent: :destroy
  has_many :likes_items, through: :likes, source: :item

  has_many :items, class_name: 'Item', foreign_key: :saler_id , primary_key: :id
end
