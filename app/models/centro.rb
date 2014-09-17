class Centro < ActiveRecord::Base

  geocoded_by :direccion
  after_validation :geocode, :if => :direccion_changed?
  
end
