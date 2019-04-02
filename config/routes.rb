Rails.application.routes.draw do
  devise_for :users
  root 'items#index'

  resources :users do
    resources :items do
      resources :item_images
    end
    resources :addresses, only: [:new, :create, :edit, :show, :update, :destroy]
    resources :banks, only: [:new, :create, :edit, :update, :destroy]
  end

end
