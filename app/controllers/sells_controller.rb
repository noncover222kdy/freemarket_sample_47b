class SellsController < ApplicationController
  def index
    @item = Item.new
    @item.item_images.build
    respond_to do |format|
      format.html
      format.json
    end
  end
end
