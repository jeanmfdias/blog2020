Rails.application.routes.draw do
  resources :posts do
    # comments belongs to posts /post/:post_id/comments
    resources :comments
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
