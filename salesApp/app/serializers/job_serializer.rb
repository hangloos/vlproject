class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :salary, :benefits, :description, :qualifications, :user_id
  has_one :user
end
