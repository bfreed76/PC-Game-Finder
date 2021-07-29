class User < ApplicationRecord
    has_secure_password
    validates :email, presence: true
    has_many :alerts 
    has_many :games, through: :alerts
end
