class RoomSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :chores
  

end
