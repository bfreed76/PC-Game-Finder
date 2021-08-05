class AlertsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        alerts = Alert.all
        render json: alerts
    end

    def show
        alert = Alert.find_by(id: params[:id])
        render json: alert
    end
    
    def destroy
        alert = Alert.find_by(id: params[:id])
        alert.delete
        render json: alert
    end

    def update
        alert = Alert.find_by(id: params[:id])
        if alert
            alert.update(alerts_params)
            render json: alert
        else
            render json: { error: "Alert ID not found" }, status: :not_found 
        end
    end

    def new
        user = User.find_by(id: session[:user_id])
        alert = user.alerts.new(alerts_params)
        if alert.save
            render json: alert, status: :created
        else
            render json: { error: "Not Created" }, status: :bad_request
        end 
    end

    private

    def alerts_params
        params.permit(:name, :price, :game_id, :title)
    end

    def render_not_found_response
        render json: { error: "Alert not found" }, status: :not_found
    end

end
