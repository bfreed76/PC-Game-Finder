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
        render json: game, status: :created
    end

    private

    def game_params
        params.permit(:title, :game_code)
    end
end