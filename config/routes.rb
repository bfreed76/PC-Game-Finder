Rails.application.routes.draw do
  
  # resources :games
  # resources :alerts
  resources :users

  get '/user/:user_id/alerts', to: 'users#user_alerts'
  get '/user/:user_id/games', to: 'users#user_games'
  get "/me", to: "users#me"
  
  post "/signup", to: "users#create"
  post "/login", to: "sessions#login"

  delete "/logout", to: "sessions#destroy"



  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
