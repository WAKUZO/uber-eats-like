class Restaurant < ApplicationRecord
  has_many :foods
  has_many :line_foods, through: :foods
  belongs_to :order, optional: true

  validates :name, :fee, :time_required, presence: true
  validates :name, length: { maximum: 30 }
  # 0以上のバリデーション→手数料は0円以上であること
  validates :fee, numericality: { greater_than: 0 }
end