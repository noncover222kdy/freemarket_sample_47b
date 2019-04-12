Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
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
    end
    resources :addresses, only: [:new, :create, :edit, :show, :update, :destroy]
    resources :banks, only: [:new, :create, :edit, :update, :destroy]
    collection do
      get 'select'
    end
  end
  # get 'users/log_out'  => 'users#log_out', as: 'log_out_user'
  # get 'users/about'    => 'users#about',   as: 'about_user'
end
