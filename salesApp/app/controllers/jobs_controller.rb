class JobsController < ApplicationController


  def index
    render json: Job.all
  end
  
  def create
    user = User.find(params[:id])
    job = Job.create(jobs_params)
    user.jobs << job
    user.save
  end




  private

  def jobs_params
     params.require(:job).permit(:title, :salary, :benefits, :description, :qualifications)
  end
end
