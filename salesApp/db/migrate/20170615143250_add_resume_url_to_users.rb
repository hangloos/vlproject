class AddResumeUrlToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :resume_url, :string
  end
end
