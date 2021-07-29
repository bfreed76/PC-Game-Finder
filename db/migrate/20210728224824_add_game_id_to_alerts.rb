class AddGameIdToAlerts < ActiveRecord::Migration[6.1]
  def change
    add_column :alerts, :game_id, :integer
  end
end
