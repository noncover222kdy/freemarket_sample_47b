class UsersController < ApplicationController
  def index
  end

  def new
  end

  def create
  end

  def edit
  end

  def show
    @user = current_user
    @items = @user.items
  end

  def update
  end

  def destroy
  end
 
  def about
  end

  def log_out
  end
end
