class InterviewSetup < ApplicationMailer

  def interview_email(user,company)
      @user = user
      @company = company
      @url  = 'http://www.gmail.com'
      mail(to: 'ericloos00@gmail.com', bcc: 'ericloos00@gmail.com', cc: 'ericloos00@gmail.com', subject: 'A Victory Lap Partner Wants To Start Talking!')
      # @user.email 
   end


end