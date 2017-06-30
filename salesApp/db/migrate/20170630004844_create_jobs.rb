class CreateJobs < ActiveRecord::Migration[5.0]
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :salary
      t.string :benefits
      t.string :description
      t.string :qualifications

      t.timestamps
    end
  end
end
