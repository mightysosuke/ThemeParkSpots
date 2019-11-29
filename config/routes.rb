Rails.application.routes.draw do
  resources :places
  get 'spots/new'
  devise_for :users
  get 'pages/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'

end
