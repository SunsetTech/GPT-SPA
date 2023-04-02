
# app/controllers/api/v1/posts_controller.rb
class Api::V1::PostsController < ApplicationController
  def index
    @posts = Post.all
    render json: @posts
  end


  def create
    result = Post::Operation::Create.(params: post_params)

    if result.success?
      render json: result[:model], status: :created
    else
      if result['contract.default']
        render json: result['contract.default'].errors, status: :unprocessable_entity
      else
        render json: { error: "An error occurred while processing the request." }, status: :unprocessable_entity
      end
    end
  end
  def show
    @post = Post.find(params[:id])
    render json: @post
  end
  # ... (Implement other CRUD actions using Trailblazer operations)

  private

  def post_params
    params.require(:post).permit(:title, :content)
  end
end

