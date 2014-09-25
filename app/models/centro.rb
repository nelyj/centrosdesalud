class Centro < ActiveRecord::Base

  geocoded_by :direccion
  after_validation :geocode, if: ->(obj){ obj.address.present? and obj.address_changed? }
  
end
