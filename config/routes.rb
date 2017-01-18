Rails.application.routes.draw do
  get 'timeline/index'
  root 'timeline#index'
end
