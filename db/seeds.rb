# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "📃 Seeding data..."

User.delete_all
Alert.delete_all
Game.delete_all

puts "SEEDING USERS"

u1 = User.create(email: "thom@thom.com", password: '123')
u2 = User.create(email: "Willow@willow.com", password: '123')
u3 = User.create(email: "Andy@andy.com", password: '123')
u4 = User.create(email: "lori@lori.com", password: '123')

puts "SEEDING GAMES"

g1 = Game.create(title: "Call of Duty 3", game_code: "4444") 
g2 = Game.create(title: "Last of Us 2", game_code: "4333") 
g3 = Game.create(title: "Diablo 3", game_code: "6345") 
g4 = Game.create(title: "Call of Duty 5", game_code: "234234") 


puts "SEEDING ALERTS (join table)"

a1 = Alert.create(name: "cod3", title: "COD3", price: "10", user_id: u1.id, game_id: g1.id)
a2 = Alert.create(name: "lofu2", title: "The Last of Us 2", price: "13", user_id: u2.id, game_id: g2.id)
a3 = Alert.create(name: "diablo3", title: "Diablo 3", price: "14", user_id: u2.id, game_id: g3.id)
a4 = Alert.create(name: "D3", title: "Diablo 3", price: "16", user_id: u4.id, game_id: g3.id)
a5 = Alert.create(name: "lastofus2", title: "The Last of Us 2", price: "3", user_id: u3.id, game_id: g2.id)
a6 = Alert.create(name: "diabloIII", title: "Diablo 3", price: "4", user_id: u3.id, game_id: g3.id)
a7 = Alert.create(name: "callduty5", title: "COD5", price: "2", user_id: u1.id, game_id: g4.id)

puts "SEEDED"