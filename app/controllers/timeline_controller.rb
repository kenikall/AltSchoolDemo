class TimelineController < ApplicationController
  def index
    @people = Person.all
    p @people = @people.order("birth").to_json
  end
end
