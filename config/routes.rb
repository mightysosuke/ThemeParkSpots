Rails.application.routes.draw do
  get 'spots/new'
  devise_for :users
  get 'pages/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'

  resources :spots
end
