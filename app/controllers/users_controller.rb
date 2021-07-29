class UsersController < ApplicationController

    def show
        user = User.find(params[:id])
        render json:article
    end

    def index
        session[:session_hello] ||= "World"
        cookies[:cookies_hello] ||= "World"
        render json: { session: session, cookies: cookies.to_hash }
    end 

end
