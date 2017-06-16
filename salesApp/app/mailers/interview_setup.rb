class InterviewSetup < ApplicationMailer

  def interview_email(user,company)
      @user = user
      @company = company
      @url  = 'http://www.gmail.com'
      mail(to: @user.email, bcc: 'brian@victorylap.io', cc: @company.email, subject: 'A Victory Lap Partner Wants To Start Talking!')
      # to: @user.email , bcc: 'brian and kevin', cc: @company.email, from: info@victorylap.io
   end


   def signup_email(user)
      @user = user
      @url  = 'http://www.gmail.com'
      mail(to: @user.email, cc: 'brian@victorylap.io', subject: 'Sign Up Confirmation - Victory Lap Portal')
      # to: @user.email , bcc: 'brian and kevin', cc: @company.email, from: info@victorylap.io
   end


end