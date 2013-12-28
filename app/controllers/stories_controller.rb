class StoriesController < ApplicationController
  def index
    render json: Story.all
  end

  def show
    render json: Story.find(params[:id])
  end

  def create
    sleep 1
    render json: Story.create(story)
  end

  private
  def story
    params[:story].permit(:title, :body)
  end
end
