Rails.application.routes.draw do

  # ログインしている場合は投稿一覧がroot
  authenticated :user do
    root to: 'places#index', as: :user_root
  end

  root to: 'pages#index'

  get 'choices/new'
  get 'spots/new'
  devise_for :users, controllers: {
    omniauth_callbacks: 'users/omniauth_callbacks',
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  get 'pages/index'
  get 'places/myplace'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :comments
  resources :places

end
