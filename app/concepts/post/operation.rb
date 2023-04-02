
# app/concepts/post/operation.rb
class Post::Operation < Trailblazer::Operation
  class Create < Trailblazer::Operation
    step Model(Post, :new)
    step Contract::Build(constant: Post::Contract::Create)
    step Contract::Validate()
    step Contract::Persist()
  end
end

