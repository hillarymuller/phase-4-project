class User < ApplicationRecord
    has_many :chores
    has_many :rooms, through: :chores
    validates :name, presence: true, uniqueness: true
    has_secure_password

end
