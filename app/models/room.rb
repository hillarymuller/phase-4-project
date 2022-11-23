class Room < ApplicationRecord
    has_many :chores
    has_many :users, through: :chores
    validates :name, uniqueness: true, presence: true

    def starred
      self.chores.select {|c| c.starred}  
    end
end
