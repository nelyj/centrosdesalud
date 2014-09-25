class Centro < ActiveRecord::Base

  geocoded_by :direccion
  after_validation :geocode, if: ->(obj){ obj.direccion.present? and obj.direccion_changed? }
  
end
