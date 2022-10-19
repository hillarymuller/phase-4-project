class User < ApplicationRecord
    has_many :chores
    has_many :rooms, through: :chores
end
