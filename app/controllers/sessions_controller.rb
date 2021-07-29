class SessionsController < ApplicationController

    def login
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
        session[:user_id] = user.id
        p "***********LOGIN**********"
        p session
        render json: user, status: accepted
        else
            render json: { error: "Wrong email or password"}, status: :unauthorized
            end
        end

    def logout
        session.delete :user_id
        render json: { message: "Logged Out"}
    end

end
