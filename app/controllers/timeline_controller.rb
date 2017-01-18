class TimelineController < ApplicationController
  def index
    @people = Person.all
  end
end
