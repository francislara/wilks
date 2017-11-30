Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, except: %i(edit new)
    resource :session, only: %i(new create destroy)
    resources :teams, only: %i(create show update destroy) do
      resources :joined_teams, only: %i(create)
      resource :joined_team, only: %i(destroy)
      resources :channels, only: %i(index create)
    end
    resources :joined_teams, only: %i(index)
    resources :channels, only: %i(destroy show)
  end

  root to: 'root#root'

end
