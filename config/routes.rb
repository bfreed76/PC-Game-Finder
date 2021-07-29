Rails.application.routes.draw do
  
  resources :games
  resources :alerts
  resources :users

  post "/login", to: "sessions#login"

  post "/signup", to: "users@create"

  delete "/logout", to: "session#logout"

  get "/me", to: "users#me"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
