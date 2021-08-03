class GamesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        games = Game.all
        render json: games
    end

    def show
        game = Game.find_by(id: params[:id])
        render json: game
    end

    def create
        game = Game.create(game_params)
        alert = game.alerts.create(alert_params)
        # byebug
        render json: alert, status: :created
    end

    # new route add game_alert, permit alert params below

    private

    def game_params
        params.permit(:title, :game_code)
    end

    def alert_params
        params[:alerts][0].permit(:name, :price, :user_id)
    end

end