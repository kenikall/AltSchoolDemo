class TimelineController < ApplicationController
  def index
    @people = Person.all
    p @awesome_data = @people.order("birth").to_json
  end
end
