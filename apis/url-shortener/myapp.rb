require 'sinatra'
require 'securerandom'

# create a url shortening service. for storing the data use a hash
# the hash will have two keys: the short url and the long url
# the short url will be a random string of 6 characters
# the long url will be the url that the user wants to shorten
# the user will enter the long url and the program will return the short url
# the user will then be able to enter the short url and be redirected to the long url

# create a hash to store the urls
urls = {}

# create a route to the home page
get '/' do
#   erb :index
#  return json { message: "Welcome to my url shortener" }
    "Welcome to my url shortener"
end

# create a route to the page that displays the short url
# the short url will be a random string of 6 characters
get '/short_url' do
  # create a variable to store the random string
  short_url = SecureRandom.hex(3)
  # create a variable to store the long url
  long_url = params[:long_url]
  # add the long url to the hash with the short url as the key
  urls[short_url] = long_url
  # display the short url
#   erb :short_url, locals: { short_url: short_url }
    short_url
end

# create a route to the page that displays the long url
# the user will enter the short url and be redirected to the long url
get '/:short_url' do
  # create a variable to store the short url
  short_url = params[:short_url]
  # create a variable to store the long url
  long_url = urls[short_url]
  # redirect to the long url
  redirect long_url
end