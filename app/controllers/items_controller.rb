class ItemsController < ApplicationController
  before_action :authenticate_user!, only: :new
  require "payjp"
  def index
    @items = Item.where("category = 'レディース'").order('id DESC').limit(4)
  end

  def new
    @item = Item.new
    @item.item_images.new
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      redirect_to controller: :items, action: :index
    else
      render "new"
    end
  end

  def edit
    @item = Item.find(params[:id])
  end

  def show
    @item = Item.find(params[:id])
    @nickname = @item.user.nickname
  end

  def update
  end

  def destroy
    item = Item.find(params[:id])
    item.destroy if item.user_id == current_user.id
  end
  def buy
    @item = Item.find(params[:id])
    bank = Bank.where(user_id: current_user.id).first
    if bank.blank?
      redirect_to action: "new"
    else
      Payjp.api_key = 'sk_test_dc85de7c8ac600a07ac7c4d5'
      customer = Payjp::Customer.retrieve(bank.customer_id)
      @default_card_information = customer.cards.retrieve(bank.card_id)
    end
  end

  def pay
    @item = Item.find(params[:id])
    @bank = current_user.banks.first
    Payjp.api_key = 'sk_test_dc85de7c8ac600a07ac7c4d5'
    charge = Payjp::Charge.create(
    amount: "#{@item.price}",
    customer: @bank.customer_id,
    currency: 'jpy',
  )
  end
  private

  def item_params
    params.require(:item).permit(:name, :category, :discription, :size, :brand, :status, :shopping_charges, :source_area, :shopping_days, :price, item_images_attributes:[:id, :image, :_destroy]).merge(saler_id: current_user.id)
  end

end
