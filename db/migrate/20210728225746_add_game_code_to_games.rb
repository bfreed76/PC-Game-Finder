class AddGameCodeToGames < ActiveRecord::Migration[6.1]
  def change
    add_column :games, :game_code, :integer
  end
end
