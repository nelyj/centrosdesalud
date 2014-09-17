class RemoveRegionNameAndAddServicioId < ActiveRecord::Migration
  def change
  	add_column :centros, :servicio_id, :integer
  	remove_column :centros, :region
  end
end
