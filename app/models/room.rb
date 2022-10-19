class Room < ApplicationRecord
    has_many :chores
    has_many :users, through: :chores
end
