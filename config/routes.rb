Rails.application.routes.draw do
  devise_for :users
  root 'items#index'

  resources :items do
    resources :item_images
    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:create]
  end
  resources :users do
    member do
      get 'log_out'
      get 'about'
      get 'exhibitindex'
    end
    resources :addresses, only: [:new, :create, :edit, :show, :update, :destroy]
    resources :banks, only: [:new, :create, :edit, :update, :destroy]
  end

end
