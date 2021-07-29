class AddPriceToAlerts < ActiveRecord::Migration[6.1]
  def change
    add_column :alerts, :price, :integer
  end
end
