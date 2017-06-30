class IntervieweesController < ApplicationController

def index
  render json: Interviewee.eager_load(:job).all
end

end
