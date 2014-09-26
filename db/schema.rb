# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140926201914) do

  create_table "centros", force: true do |t|
    t.integer  "region_id"
    t.integer  "comuna_id"
    t.integer  "dependencia_id"
    t.integer  "tipo_id"
    t.string   "codigo_establecimiento"
    t.string   "nombre"
    t.string   "direccion"
    t.float    "latitude"
    t.float    "longitude"
    t.string   "telefono"
    t.string   "fax"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "servicio_id"
  end

  create_table "colegios", force: true do |t|
    t.integer  "rbd"
    t.string   "nombre_establecimiento"
    t.string   "dependencia"
    t.string   "area_geografica"
    t.string   "estado"
    t.float    "latitude"
    t.float    "longitude"
    t.integer  "alumnos_psu"
    t.integer  "alumnos_psu_leng"
    t.integer  "alumnos_psu_mat"
    t.integer  "alumnos_psu_nem"
    t.string   "psu_lenguaje"
    t.integer  "psu_matematica"
    t.integer  "psu_nem"
    t.integer  "region"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
