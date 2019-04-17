class UsersController < ApplicationController
  def index
    @user = current_user
    @items = @user.items
  end

  def new
  end

  def create
  end

  def edit
  end

  def show
    @user = User.find(params[:id])
    @items = @user.items
  end

  def update
  end

  def destroy
  end

  def select
  end

  def about
  end

  def log_out
  end

  private
  def user_params
    params.require(:user).permit(:nickname, :first_name, :last_name)
  end
  def exhibitindex
    user = User.find(params[:id])
    @items = user.items.order("created_at DESC")
  end
end
