class ChoreSerializer < ActiveModel::Serializer
  attributes :id, :name, :starred, :user
  
end
