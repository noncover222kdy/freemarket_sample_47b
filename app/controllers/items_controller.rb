class ItemsController < ApplicationController
  before_action :authenticate_user!, only: :new
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
    @nickname = Item.saler.nickname
    @item = Item.find(params[:id])
  end

  def update
  end

  def destroy
    item = Item.find(params[:id])
    item.destroy if item.user_id == current_user.id
  end

  private

  def item_params
    params.require(:item).permit(:name, :category, :discription, :size, :brand, :status, :shopping_charges, :source_area, :shopping_days, :price, item_images_attributes:[:id, :image, :_destroy]).merge(saler_id: current_user.id)
  end

end
