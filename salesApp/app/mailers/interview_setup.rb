class InterviewSetup < ApplicationMailer

  def interview_email(user,company)
      @user = user
      @company = company
      @url  = 'http://www.gmail.com'
      mail(to: 'ericloos00@gmail.com', bcc: 'ericloos00@gmail.com', cc: 'ericloos00@gmail.com', subject: 'A Victory Lap Partner Wants To Start Talking!')
      # to: @user.email , bcc: 'brian and kevin', cc: @company.email, from: info@victorylap.io
   end


end