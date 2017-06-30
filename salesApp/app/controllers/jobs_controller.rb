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

  def update
    job = Job.find(params[:job][:id])
      if job.update(jobs_params.reject{|_, v| v.blank?})
        render json: {status: 'ok'}
      else
        render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
      end
  end

  private

  def jobs_params
     params.require(:job).permit(:title, :company_name, :salary, :benefits, :description, :qualifications, :url, :user_id)
  end
end
