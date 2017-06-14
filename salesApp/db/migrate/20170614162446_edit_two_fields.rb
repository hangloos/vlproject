class EditTwoFields < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :hired, :boolean, default: false
    change_column :users, :graduated, :boolean, default: false
  end
end
