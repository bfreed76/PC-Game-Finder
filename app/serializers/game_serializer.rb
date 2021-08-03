class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :game_code

  has_many :alerts
end
