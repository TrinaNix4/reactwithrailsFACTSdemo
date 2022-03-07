Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  namespace :api do

get 'facts', to: 'facts#index'
get 'facts/:id', to: 'facts#show'

#client sends in params {fact:{username, text, stars(0-5), source}}
post 'facts', to: 'facts#create'

put 'facts/:id', to: 'facts#update'
delete 'facts/:id', to: 'facts#destroy'



  end
end
