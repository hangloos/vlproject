Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  resources :jobs
  root 'home#index'

  devise_for :users
  
  get '/RegisterAdminSecretPage', to: 'user#new'
  post '/RegisterAdminSecretPage', to: 'user#create'

  get '/user/:id', to: 'user#show'

  patch '/user/:id', to: 'user#update'

  get '/users', to: 'user#index'

  post '/setupInterview', to: 'user#interview'

  delete '/user/:id', to: 'user#destroy'

  post '/createJob', to: 'jobs#create'

  get '/jobs', to: 'jobs#index'

  get '/jobs/:id', to: 'jobs#show'

  delete '/jobs/:id', to: 'jobs#destroy'

  patch '/jobs/:id', to: 'jobs#update'

  get '/interviewees', to: 'interviewees#index'

end
