# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170630225808) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "interviewees", force: :cascade do |t|
    t.integer "user_id"
    t.integer "job_id"
  end

  create_table "jobs", force: :cascade do |t|
    t.string   "title"
    t.string   "salary"
    t.string   "benefits"
    t.string   "description"
    t.string   "qualifications"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.integer  "user_id"
    t.string   "url"
    t.string   "company_name"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "",    null: false
    t.string   "encrypted_password",     default: "",    null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,     null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
    t.integer  "access_level"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "phone"
    t.string   "zipcode"
    t.string   "linkedin"
    t.string   "college"
    t.integer  "college_graduation"
    t.string   "major"
    t.boolean  "hired",                  default: false
    t.boolean  "graduated",              default: false
    t.integer  "class_number"
    t.string   "company"
    t.string   "notes"
    t.string   "resume_url"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.string   "food"
    t.string   "books"
    t.string   "skills"
    t.string   "hobbies"
    t.string   "fav_book"
    t.string   "idol"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

end
