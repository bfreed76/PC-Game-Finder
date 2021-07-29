class AlertsController < ApplicationController

    def index
        alerts = Alert.all
        render json: alerts
    end

    def show
        alert = Alert.find_by(id: params[:id])
        render json: alert
    end
end
