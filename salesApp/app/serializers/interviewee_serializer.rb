class IntervieweeSerializer < ActiveModel::Serializer 
attributes :id, :user_id, :job_id, :job

belongs_to :job
# belongs_to :interviewees


end