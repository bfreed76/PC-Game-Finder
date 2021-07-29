class AddNameToAlerts < ActiveRecord::Migration[6.1]
  def change
    add_column :alerts, :name, :string
  end
end
