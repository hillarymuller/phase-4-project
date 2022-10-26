# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
hillary = User.create(name: "Hillary", username: "hillarymuller")

kitchen = Room.create(name: "Kitchen")
livingroom = Room.create(name: "Living Room")
halfbath = Room.create(name: "Half Bath")

chore1 = kitchen.chores.create(name: "wash the dishes", starred: false, user_id: 1)
chore2 = livingroom.chores.create(name: "vacuum the rug", starred: false, user_id: 1)
chore3 = livingroom.chores.create(name: "clean the windows", starred: false, user_id: 1)
chore4 = halfbath.chores.create(name: "clean the mirror", starred: false, user_id: 1)
chore5 = halfbath.chores.create(name: "mop the floor", starred: false, user_id: 1)
