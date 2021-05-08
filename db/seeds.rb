# レストランを３つ作成
3.times do |n|
  restaurant = Restaurant.new(
    name:"testレストラン_#{n}",
    fee: 100,
    time_required:10,
  )

  # レストラン１つにつき、12個の商品のfoodを作成
  12.times do |m|
    restaurant.foods.build(
      name: "フード名_#{m}",
      price: 500,
      description: "フード_#{m}の説明文です。"
    )
  end

  restaurant.save!

end
