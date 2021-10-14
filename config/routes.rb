Rails.application.routes.draw do
  resources :users, only: [:index, :show] 
  resources :alerts
  resources :games, only: [:index, :show]

  # Users Controller
  get '/users/:user_id/alerts', to: 'users#user_alerts'
  get '/users/:user_id/games', to: 'users#user_games' 
  get "/me", to: "users#me" 
  post "/signup", to: "users#create"

  # Alerts Controller
  post "/add_alert", to: "alerts#new"
  delete "alerts/:alert_id", to: 'alerts#destroy'
  patch "alerts/:alert_id", to: 'alerts#update' 

  # Games Controller
  post "/add_game", to: "games#create" 

  # Sessions Controller
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
