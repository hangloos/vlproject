class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable


  # you can also explicitly define enum as:  enum access_level: [:candidate => 0, :company_admin => 1, :super_admin => 2}

  enum access_level: [:candidate, :company_admin, :super_admin]

  has_many :jobs
end
