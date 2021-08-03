class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        users = User.all
        render json: users
    end

    # Profile page
    def show 
        user = User.find_by(id: params[:id])
        render json: user, include: :user
    end

    # Registration
    def create 
        user = User.new(user_params)
        if user.save
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: "Not Created"}, status: :bad_request
        end
    end

    # Persist login
    def me 
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def user_alerts
        user = User.find(params[:user_id])
        alerts = user.alerts
        render json: alerts, include: :user
    end

    def user_games
        user = User.find(params[:user_id])
        games = user.games
        render json: games, include: :user
    end

    private

    def user_params
        params.permit(:email, :password)
    end
end
