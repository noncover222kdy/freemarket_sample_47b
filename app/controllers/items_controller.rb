class ItemsController < ApplicationController
  before_action :authenticate_user!, only: :new
  before_action :define_varialable, only: [:edit, :show, :update, :destroy]
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
  end

  def show
    @nickname = @item.user.nickname
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

  private

  def item_params
    params.require(:item).permit(:name, :category, :discription, :size, :brand, :status, :shopping_charges, :source_area, :shopping_days, :price, item_images_attributes:[:id, :image, :_destroy]).merge(saler_id: current_user.id)
  end

  def define_varialable
    @item = Item.find(params[:id])
  end
end
