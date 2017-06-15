class UserSerializer < ActiveModel::Serializer 
attributes :id, :first_name, :last_name, :resume_url, :notes, :access_level, :email, :phone, :zipcode, :linkedin, :college, :major, :college_graduation, :company, :graduated, :hired



end