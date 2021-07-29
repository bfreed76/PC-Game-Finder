class User < ApplicationRecord
    has_many :alerts 
    has_many :games, through: :alerts
end
