Rails.application.routes.draw do
  get 'choices/new'
  get 'spots/new'
  devise_for :users
  get 'pages/index'
  get 'places/myplace'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'


  resources :comments
  resources :places

end
