class StoriesController < ApplicationController
  def index
    render json: Story.all
  end

  def show
    render json: Story.find(params[:id])
  end
end
