Rails.application.routes.draw do


  resources :centros, only: [:index]
  
  root 'home#index'


end
