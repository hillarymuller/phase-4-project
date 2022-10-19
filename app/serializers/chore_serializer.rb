class ChoreSerializer < ActiveModel::Serializer
  attributes :id, :name, :starred
  has_one :user
end
