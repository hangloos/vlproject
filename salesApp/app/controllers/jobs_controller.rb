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

  def destroy
    job = Job.find(params[:id])
    if current_user.access_level == "company_admin"
      job.delete
    end
  end

  def show
    render json: Job.find(params[:id])
  end




  private

  def jobs_params
     params.require(:job).permit(:title, :salary, :benefits, :description, :qualifications)
  end
end
