class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :salary, :benefits,:url, :description, :qualifications, :user_id, :company_name
  has_one :user
end
