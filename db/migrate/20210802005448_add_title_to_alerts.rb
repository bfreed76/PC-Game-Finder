class AddTitleToAlerts < ActiveRecord::Migration[6.1]
  def change
    add_column :alerts, :title, :string
  end
end
