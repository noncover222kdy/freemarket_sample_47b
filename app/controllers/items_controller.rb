class ItemsController < ApplicationController
  before_action :authenticate_user!, only: :new
  def index
  end

  def new
    @item = Item.new
    @item.item_images.build

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
  end

  def update
  end

  def destroy
    item = Item.find(params[:id])
    item.destroy if item.user_id == current_user.id
  end

  private

  def item_params
    params.require(:item).permit(:name, :category, :discription, :size, :brand, :status, :shopping_charges, :source_area, :shopping_days, :price).merge(saler_id: current_user.id)
  end

  def item_images_params
    params.require(:item_images).permit(:image)
  end

end
