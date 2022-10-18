class ChoreSerializer < ActiveModel::Serializer
  attributes :id, :name, :starred, :user_id, :room_id
end
