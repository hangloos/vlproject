Rails.application.routes.draw do
  get '/', to: 'home#index'

  devise_for :users
  
  get '/RegisterAdminSecretPage', to: 'user#new'
  post '/RegisterAdminSecretPage', to: 'user#create'

  get '/user/:id', to: 'user#show'

  patch '/user/:id', to: 'user#update'

  get '/users', to: 'user#index'

  post '/setupInterview', to: 'user#interview'

  delete '/user/:id', to: 'user#destroy'

end
