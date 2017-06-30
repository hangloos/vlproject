class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :salary, :benefits, :description, :qualifications
end
