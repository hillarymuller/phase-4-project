class ChoreSerializer < ActiveModel::Serializer
  attributes :id, :name, :starred, :user, :room
  
end
