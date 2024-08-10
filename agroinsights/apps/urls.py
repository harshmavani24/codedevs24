from django.urls import path
from .views import location_view, autocomplete_view, get_historical_ag_weather, get_ag_weather_forecast, get_current_air_quality, get_soil_data, get_soil_type, crop_prediction_view

urlpatterns = [
    path('location/', location_view, name='location'),
    path('autocomplete/', autocomplete_view, name='autocomplete'),
    path('historical-ag-weather/', get_historical_ag_weather, name='historical_ag_weather'),
    path('ag-weather-forecast/', get_ag_weather_forecast, name='ag_weather_forecast'),
    path('current-air-quality/', get_current_air_quality, name='current_air_quality'),
    path('soil-property/',get_soil_data, name='soil_properties'),
    path('soil-type/', get_soil_type, name='soil-type'),
    path('crop-prediction/', crop_prediction_view, name='crop_prediction'),


]


