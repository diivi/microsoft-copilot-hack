# Create a fastapi API endpoint that accepts a city's name and returns the current weather forecast. Leverage OpenWeatherMap API to fetch weather data and parse it using Python. Your solution should demonstrate how GitHub Copilot can help you with API usage, data parsing, and error handling.

# Importing required libraries
import requests
from fastapi import FastAPI
# import environemnt variable OWM_API_KEY
from dotenv import load_dotenv
import os
load_dotenv()


# Creating a FastAPI instance
app = FastAPI()

# Creating a GET route
@app.get('/')
def index():
    return {'message': 'Hello, World!'}

# @app.get('/weather/{city}')
# def get_weather(city: str):

#     geo_url = f'https://api.openweathermap.org/geo/1.0/direct?q={city}&limit=1&appid={os.getenv("OWM_API_KEY")}'
#     geo_response = requests.get(geo_url).json()
#     lat = geo_response[0]['lat']
#     lon = geo_response[0]['lon']

#     url = f'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={os.getenv("OWM_API_KEY")}'
#     response = requests.get(url).json()
#     return response

# add error handling for this route

@app.get('/weather/{city}')
def get_weather(city: str):
    
        geo_url = f'https://api.openweathermap.org/geo/1.0/direct?q={city}&limit=1&appid={os.getenv("OWM_API_KEY")}'
        geo_response = requests.get(geo_url).json()
        if geo_response == []:
            return {'message': 'City not found'}
        else:
            lat = geo_response[0]['lat']
            lon = geo_response[0]['lon']
    
            url = f'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={os.getenv("OWM_API_KEY")}'
            response = requests.get(url).json()
            return response
        
