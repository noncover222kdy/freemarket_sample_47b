Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks', registrations: 'users/registrations' }
  root 'items#index'

  resources :items do
    collection do
      get 'category/:category' => 'items#category'
    end
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
    resources :banks, only: [:index, :new, :create, :edit, :update, :destroy]
    collection do
      get 'select'
    end
  end

end
