class AddSomeMoreColumnsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :food, :string
    add_column :users, :books, :string
    add_column :users, :skills, :string
    add_column :users, :hobbies, :string
    add_column :users, :fav_book, :string
    add_column :users, :idol, :string
  end
end
