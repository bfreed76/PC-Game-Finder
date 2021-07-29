class AddUserIdToAlerts < ActiveRecord::Migration[6.1]
  def change
    add_column :alerts, :user_id, :integer
  end
end
