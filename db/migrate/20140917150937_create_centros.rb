class CreateCentros < ActiveRecord::Migration
  def change
    create_table :centros do |t|
      t.integer :region_id
      t.string :region
      t.integer :comuna_id
      t.integer :dependencia_id
      t.integer :tipo_id
      t.string :codigo_establecimiento
      t.string :nombre
      t.string :direccion
      t.float :latitude
      t.float :longitude
      t.string :telefono
      t.string :fax

      t.timestamps
    end
  end
end
