class BanksController < ApplicationController
  before_action :authenticate_user!
  require "payjp"
  def index
    bank = Bank.where(user_id: current_user.id).first
    if bank.blank?
      redirect_to action: "new"
    else
      Payjp.api_key = 'sk_test_dc85de7c8ac600a07ac7c4d5'
      customer = Payjp::Customer.retrieve(bank.customer_id)
      @default_card_information = customer.cards.retrieve(bank.card_id)
    end
  end

  def new
    bank = Bank.where(user_id: current_user.id)
  end

  def create
  end

  def pay
    Payjp.api_key = 'sk_test_dc85de7c8ac600a07ac7c4d5'
    if params['payjp-token'].blank?
      redirect_to action: "new"
    else
      customer = Payjp::Customer.create(
      card: params['payjp-token']
      )
      @bank = Bank.new(user_id: current_user.id, customer_id: customer.id, card_id: customer.default_card)
      if @bank.save
        redirect_to action: "index"
      else
        redirect_to action: "pay"
      end
    end
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
    bank = Bank.where(user_id: current_user.id).first
    if bank.blank?
    else
      Payjp.api_key = 'sk_test_dc85de7c8ac600a07ac7c4d5'
      customer = Payjp::Customer.retrieve(card.customer_id)
      customer.delete
      bank.delete
    end
      redirect_to action: "new"
  end

  private
  def bank_params
    params.require(:bank).permit(:card_id, :customer_id).merge(user_id: current_user.id)
  end
end
