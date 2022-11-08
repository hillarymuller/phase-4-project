class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username
  has_many :chores
  

end
