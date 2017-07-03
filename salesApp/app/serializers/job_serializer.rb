class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :salary, :benefits,:url, :description, :qualifications, :user_id, :company_name, :user
  has_one :user
end
