class IntervieweesController < ApplicationController

def index
   render json: Interviewee.eager_load(job: [:user]).all

  #render json: Interviewee.eager_load(:job).all

  # Interviewee.all[1].job.user.company
end

end
