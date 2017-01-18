Rails.application.routes.draw do
  root 'timeline#index'
  get 'timeline/index'
end
