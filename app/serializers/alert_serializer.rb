class AlertSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :user_id, :game_id
end
