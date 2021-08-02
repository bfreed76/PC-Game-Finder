Rails.application.routes.draw do
  
  ####! Check controller methods before limiting routes
  resources :users 
  resources :alerts 
  resources :games

  get '/users/:user_id/alerts', to: 'users#user_alerts'
  get '/users/:user_id/games', to: 'users#user_games'
  get "/me", to: "users#me"
  post "/signup", to: "users#create"

  post "/add_alert", to: "alerts#new"
  post "/add_game", to: "games#create"

  delete "alerts/:alert_id", to: 'alerts#destroy'
  patch "alerts/:alert_id", to: 'alerts#update' 

  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#destroy"





  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
