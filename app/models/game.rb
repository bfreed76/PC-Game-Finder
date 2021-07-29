class Game < ApplicationRecord
    has_many :alerts
    has_many :users, through: :alerts
end
