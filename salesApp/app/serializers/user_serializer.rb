class UserSerializer < ActiveModel::Serializer 
attributes :id, :first_name, :food, :books, :skills, :hobbies, :fav_book, :idol, :last_name, :resume_url, :notes, :access_level, :email, :phone, :zipcode, :linkedin, :college, :major, :college_graduation, :company, :graduated, :hired, :jobs

has_many :jobs


end