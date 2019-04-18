class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :omniauthable, omniauth_providers: %i[facebook google_oauth2]

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


  validates :nickname, presence: true
  validates :email, presence: true
  validates :encrypted_password, presence: true
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :first_name_kana, presence: true
  validates :last_name_kana, presence: true
  validates :birthday, presence: true
  def self.from_omniauth(auth)
      user = User.where(uid: auth.uid, provider: auth.provider).first

      unless user
        user = User.new(
        email: auth.info.email,
        password: Devise.friendly_token[0,20],
        nickname: auth.info.nickname,
        first_name: auth.info.first_name,
        last_name: auth.info.last_name,
        first_name_kana: auth.info.first_name_kana,
        last_name_kana: auth.info.last_name_kana,
        birthday: auth.info.birthday,
        introduction: auth.info.introduction,
        point: auth.info.point,
        expiration: auth.info.expiration,
        provider: auth.provider,
        uid: auth.uid
        )
        user.save(:validate => false)
      end
      user
  end
end
