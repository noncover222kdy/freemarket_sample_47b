# README

* Database creation

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false, unique: true, index: true|
|email|varchar|null: false, unique: true|
|email_password|varchar|null: false|
|first_name|string|null: false|
|last_name|string|null: false|
|first_name_kana|string|null: false|
|last_name_kana|string|null: false|
|birthday|date|null: false|
|icon|string|
|introduction|text|
|point|integer|
|expiration|date|
|bought_items|reference|null: false, foreign_key:true|
|selling_items|reference|null: false, foreign_key:true|
|sold_items|reference|null: false, foreign_key:true|

### Association

- has_many :items
- has_many :works
- has_many :infos
- has_many :news
- has_many :commments
- has_many :trading_comments
- has_many :evalutions, dependent: :destroy
- has_many :banks, dependent: :destroy
- has_many :addresses, dependent: :destroy
- has_many :likes, dependent: :destroy
- has_many :likes_items, through: :likes, source: :item
- has_many :bought_items, foreign_key: "buyer_id", class_name: "Item"
- has_many :selling_items, -> { where("buyer_id is not NULL") }, foreign_key: "saler_id", class_name: "Item"
- has_many :sold_items, -> { where("buyer_id is not NULL") }, foreign_key: "saler_id", class_name: "Item"
<!-- sourceは「参照元のモデル」をさすオプション -->


## worksテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false|
|work_text|text|

### Association
- belongs_to :user


## evalutionsテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false|
|result|integer|null: false|

### Association
- belongs_to :user


## infosテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false|
|info|text|

### Association
- belongs_to :user


## newsテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false|
|news|text|

### Association
- belongs_to :user


## banksテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false|
|card_number|integer|null: false|
|expiratin_date|integer|null: false|
|month|integer|null: false|
|day|integer|null: false|
|security_code|integer|null: false|

### Association
- belongs_to :user


## addressesテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false|
|post_address|string|
|prefectures|string|
|city|string|
|address|string|
|building_nama|string|
|tell_number|string|

### Association
- belongs_to :user


## itemsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|index: true|
|category|string|null: false|
|discription|text|null: false|
|size|string|null: false|
|brand|string|
|status|string|null: false|
|shopping_charges|string|null: false|
|source_area|string|null: false|
|shopping_days|string|null: false|
|price|integer|null: false, validates :price, numericality: { only_integer: true }|
|saler_id|references|null: false, foreign_key:true|
|buyer_id|references|null: false, foreign_key:true|

<!-- priceは、整数でなくてはならないバリデーション設定 -->
### Association
- has_many :likes, dependent: :destroy
- has_many :comments
- has_many :item_images
- has_many :trading_comments
- belongs_to :user
- has_many :likes_users, through: :likes, source: :user
- belongs_to :saler, class_name: "User"
- belongs_to :buyer, class_name: "User"


## likesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|item_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :item
- validates_uniqueness_of :item_id, scope: :user_id
<!-- 1つの記事に対しては1ユーザー当たり1回しかLikeできない -->

## commentsテーブル

|Column|Type|Options|
|------|----|-------|
|item|references|null: false|
|user|references|null: false|
|text|text|

### Association
- belongs_to :item
- belongs_to :user


## item_imagesテーブル

|Column|Type|Options|
|------|----|-------|
|item|references|null: false|
|image|string|null: false

### Association
- belongs_to :item


## trading_commentsテーブル

|Column|Type|Options|
|------|----|-------|
|item|reference|null: false|
|user|integer|null: false|
|message|text|

### Association
- belongs_to :item
