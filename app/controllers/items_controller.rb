class ItemsController < ApplicationController
  before_action :authenticate_user!, only: :new
  require "payjp"
  before_action :define_varialable, only: [:edit, :show, :update, :destroy]
  def index
    @ladies = Item.where("category LIKE?", "a%").order(created_at: :desc).limit(4)

    @mens = Item.where("category LIKE?", "b%").order(created_at: :desc).limit(4)
  end

  def new
    @item = Item.new
    @item_image = @item.item_images.build
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      params[:item_images][:image].each do |img|
        @item_image = @item.item_images.create!(image: img)
      end
      redirect_to root_path, notice: "出品しました"
    else
      render :new
    end
  end


  def edit
  end

  def show
    @nickname = @item.user.nickname
    @comment = Comment.new
    @comments = @item.comments
  end

  def update
    if @item.update(item_params)
      redirect_to items_path
    else
      render "edit"
    end
  end

  def destroy
    if @item.destroy
      redirect_to users_path
    else
      render "show"
    end
  end

  def category
    @items = Item.where("category = ?", "#{params[:category]}")
  end
  def buy
    @item = Item.find(params[:id])
    bank = Bank.where(user_id: current_user.id).first
    if bank.blank?
      redirect_to action: "new"
    else
      Payjp.api_key = ENV['PAYJP_SECRET_KEY']
      customer = Payjp::Customer.retrieve(bank.customer_id)
      @default_card_information = customer.cards.retrieve(bank.card_id)
    end
  end

  def search
    @items = Item.search(params[:search])
  end

  def pay
    @item = Item.find(params[:id])
    @bank = current_user.banks.first
    if @bank.blank?
      redirect_to action: "buy"
    else
      Payjp.api_key = ENV['PAYJP_SECRET_KEY']
      charge = Payjp::Charge.create(
      amount: "#{@item.price}",
      customer: @bank.customer_id,
      currency: 'jpy',
      )
    end
  end

  private

  def item_params
    params.require(:item).permit(:name, :category, :discription, :size, :brand, :status, :shopping_charges, :source_area, :shopping_days, :price, item_images_attributes: [:id, :image, :_destroy]).merge(saler_id: current_user.id)
  end

  def define_varialable
    @item = Item.find(params[:id])
  end
end
