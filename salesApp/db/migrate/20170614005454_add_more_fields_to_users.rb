class AddMoreFieldsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :last_name, :string
    add_column :users, :phone, :string
    add_column :users, :zipcode, :string
    add_column :users, :linkedin, :string
    add_column :users, :college, :string
    add_column :users, :college_graduation, :integer
    add_column :users, :major, :string
    add_column :users, :hired, :boolean
    add_column :users, :graduated, :boolean
    add_column :users, :class_number, :integer
    add_column :users, :company, :string
  end
end
