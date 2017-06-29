class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable


  has_attached_file :avatar, styles: { large: "600x600", medium: "300x300>", thumb: "150x150#" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  # you can also explicitly define enum as:  enum access_level: [:candidate => 0, :company_admin => 1, :super_admin => 2}

  enum access_level: [:candidate, :company_admin, :super_admin]
end
