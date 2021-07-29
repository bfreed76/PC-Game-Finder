class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def show #profile
        user = User.find_by(id: params[:id])
        render json: user
    end

    def create #signup
        user = User.new(user_params)
        if user.save
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: "Not Created"}, status: :bad_request
        end
    end

    def me #maintain login
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def user_alerts
        
    end

    def user_games

    end

    private

    def user_params
        params.permit(:email, :password)
    end
end
