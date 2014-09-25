class CentrosController < ApplicationController
  respond_to :json

  def index
  	respond_with Centro.projects_valid
  end
end
