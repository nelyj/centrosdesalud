class Centro < ActiveRecord::Base

  geocoded_by :direccion
  after_validation :geocode, if: ->(obj){ obj.direccion.present? and obj.direccion_changed? }

  scope :projects_valid, -> { where.not(latitude: nil) }

end
