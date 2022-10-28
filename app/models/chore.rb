class Chore < ApplicationRecord
    belongs_to :user
    belongs_to :room, dependent: :destroy
    validates :name, presence: true
end
