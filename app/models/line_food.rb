class LineFood < ApplicationRecord
  belongs_to :food
  belongs_to :restaurant
  belongs_to :order, optional: true

  validates :count, numericality: { greater_than: 0 }

  # モデル側であらかじめ特定の条件式に対して名前をつけて定義し、
  # その名前でメソッドの様に条件式を呼び出すことが出来る仕組みのことです。
  # scope :スコープの名前, -> { 条件式 }
  scope :active, -> { where(active: true) }
  scope :other_restaurant, -> (picked_restaurant_id) { where.not(restaurant_id: picked_restaurant_id) }

  def total_amount
    food.price * count
  end
end