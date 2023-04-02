
# app/concepts/post/contract.rb
class Post::Contract < Reform::Form
  class Create < Reform::Form
    property :title
    property :content

    validates :title, presence: true
    validates :content, presence: true
  end
end

