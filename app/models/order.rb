class Order < ApplicationRecord
  has_many :line_foods
  has_one :restaurant, through: :line_food

  validates :total_price, numericality: { greater_than: 0 }
line_foods
  def save_with_update_line_foods!()
    ActiveRecord::Base.transaction do
      line_foods.each do |line_food|
        line_food.update_attributes!(active: false, order: self)
      end
      self.save!
    end
  end
end