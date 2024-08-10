# import requests
# from django.http import JsonResponse
# from django.conf import settings
# from threading import Thread
# from django.views.decorators.csrf import csrf_exempt

# def get_location_data(lat, lon, response_data):
#     try:
#         url = f'https://us1.locationiq.com/v1/reverse.php?key={settings.LOCATIONIQ_API_KEY}&lat={lat}&lon={lon}&format=json'
#         response = requests.get(url)
#         data = response.json()
#         response_data['location_data'] = {
#             'address': data.get('display_name'),
#             'city': data.get('address', {}).get('city'),
#             'state': data.get('address', {}).get('state'),
#             'country': data.get('address', {}).get('country')
#         }
#     except Exception as e:
#         response_data['error'] = str(e)
# import json
# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt

# @csrf_exempt  # Temporarily bypass CSRF for testing purposes
# def location_view(request):
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body)  # Parse the JSON body
#             lat = data.get('latitude')
#             lon = data.get('longitude')
#             print(f"Latitude: {lat}, Longitude: {lon}")

#             # Use the LocationIQ API to get location data based on latitude and longitude
#             url = f'https://api.locationiq.com/v1/reverse.php?key={settings.LOCATIONIQ_API_KEY}&lat={lat}&lon={lon}&format=json'
#             response = requests.get(url)
#             location_data = response.json()
#             print(f"Location Data: {location_data}")

#             return JsonResponse({
#                 'address': location_data.get('display_name'),
#                 'city': location_data.get('address', {}).get('city'),
#                 'state': location_data.get('address', {}).get('state'),
#                 'country': location_data.get('address', {}).get('country'),
#                 'district': location_data.get('address', {}).get('state_district'),
#             })

#         except json.JSONDecodeError:
#             return JsonResponse({'error': 'Invalid JSON'}, status=400)
#         except Exception as e:
#             return JsonResponse({'error': str(e)}, status=500)
#     else:
#         return JsonResponse({'error': 'Invalid request method. Only POST allowed.'}, status=400)


# import requests
# from django.http import JsonResponse
# from django.conf import settings
# from django.views.decorators.csrf import csrf_exempt
# import logging

# logging.basicConfig(level=logging.DEBUG)
# @csrf_exempt
# def autocomplete_view(request):
#     if request.method == 'GET':
#         query = request.GET.get('q', '')
#         if not query:
#             return JsonResponse({'error': 'No query provided'}, status=400)
        
#         try:
#             logging.info(f"Query: {query}")
#             url = f'https://api.locationiq.com/v1/autocomplete.php?key={settings.LOCATIONIQ_API_KEY}&q={query}&limit=5'
#             response = requests.get(url)
#             autocomplete_data = response.json()
#             logging.info(f"Autocomplete Data: {autocomplete_data}")
#             return JsonResponse(autocomplete_data, safe=False)
        
#         except Exception as e:
#             logging.error(f"Error: {e}")
#             return JsonResponse({'error': str(e)}, status=500)
#     else:
#         return JsonResponse({'error': 'Invalid request method. Only GET allowed.'}, status=400)


# import requests
# from django.http import JsonResponse
# from django.conf import settings

# def get_historical_ag_weather(request):
#     lat = request.GET.get('lat')
#     lon = request.GET.get('lon')
#     start_date = request.GET.get('start_date')
#     end_date = request.GET.get('end_date')

#     url = f"https://api.weatherbit.io/v2.0/history/agweather"
#     params = {
#         'lat': lat,
#         'lon': lon,
#         'start_date': start_date,
#         'end_date': end_date,
#         'key': settings.WEATHERBIT_API_KEY
#     }

#     response = requests.get(url, params=params)
#     data = response.json()
#     print(data)

#     return JsonResponse(data)

# def get_ag_weather_forecast(request):
#     lat = request.GET.get('lat')
#     lon = request.GET.get('lon')

#     url = f"https://api.weatherbit.io/v2.0/forecast/agweather"
#     params = {
#         'lat': lat,
#         'lon': lon,
#         'key': settings.WEATHERBIT_API_KEY
#     }

#     response = requests.get(url, params=params)
#     data = response.json()
#     print(data)

#     return JsonResponse(data)


# import requests
# from django.http import JsonResponse
# from django.conf import settings



# def get_current_air_quality(request):
#     lat = request.GET.get('lat')
#     lon = request.GET.get('lon')
#     if not lat or not lon:
#         return JsonResponse({'error': 'Latitude and longitude are required'}, status=400)
    
#     url = f'http://api.weatherbit.io/v2.0/current/airquality?lat={lat}&lon={lon}&key={settings.WEATHERBIT_API_KEY}'
#     response = requests.get(url)
    
#     if response.status_code == 200:
#         return JsonResponse(response.json())
#     else:
#         return JsonResponse({'error': 'Failed to fetch data from Weatherbit API'}, status=500)

# def get_historical_ag_weather(request):
#     lat = request.GET.get('lat')
#     lon = request.GET.get('lon')
#     start_date = request.GET.get('start_date')
#     end_date = request.GET.get('end_date')

#     if not lat or not lon or not start_date or not end_date:
#         return JsonResponse({'error': 'Latitude, longitude, start date, and end date are required'}, status=400)
    
#     url = f'https://api.weatherbit.io/v2.0/history/agweather?lat={lat}&lon={lon}&start_date={start_date}&end_date={end_date}&key={settings.WEATHERBIT_API_KEY}'
#     response = requests.get(url)
    
#     if response.status_code == 200:
#         return JsonResponse(response.json())
#     else:
#         return JsonResponse({'error': 'Failed to fetch data from Weatherbit API'}, status=500)

# def get_ag_weather_forecast(request):
#     lat = request.GET.get('lat')
#     lon = request.GET.get('lon')

#     if not lat or not lon:
#         return JsonResponse({'error': 'Latitude and longitude are required'}, status=400)
    
#     url = f'https://api.weatherbit.io/v2.0/forecast/agweather?lat={lat}&lon={lon}&key={settings.WEATHERBIT_API_KEY}'
#     response = requests.get(url)
    
#     if response.status_code == 200:
#         return JsonResponse(response.json())
#     else:
#         return JsonResponse({'error': 'Failed to fetch data from Weatherbit API'}, status=500)

# from django.http import JsonResponse
# import httpx

# # Soil Data
# def get_soil_data(request):
#     lat = request.GET.get('lat')
#     lon = request.GET.get('lon')
#     depths = request.GET.getlist('depth')
#     properties = request.GET.getlist('property')
#     values = request.GET.getlist('value')

#     if not lat or not lon:
#         return JsonResponse({'error': 'Latitude and longitude are required.'}, status=400)

#     params = {
#         "lat": lat,
#         "lon": lon,
#         "depth": depths,
#         "property": properties,
#         "value": values,
#     }

#     url = "https://rest.isric.org/soilgrids/v2.0/properties/query"
#     response = requests.get(url, params=params)

#     if response.status_code != 200:
#         return JsonResponse({'error': 'Failed to fetch data from the SoilGrids API.'}, status=response.status_code)

#     data = response.json()

#     # Extracting soil properties
#     soil_layers = []
#     for layer in data["properties"]["layers"]:
#         layer_data = {
#             "name": layer["name"],
#             "unit": layer["unit_measure"]["mapped_units"],
#             "depths": []
#         }
#         for depth in layer["depths"]:
#             depth_data = {
#                 "depth": depth["label"],
#                 "values": depth["values"]
#             }
#             layer_data["depths"].append(depth_data)
#         soil_layers.append(layer_data)

#     return JsonResponse({"layers": soil_layers})

# from django.http import JsonResponse
# from httpx import Client
# from django.views.decorators.csrf import csrf_exempt

# @csrf_exempt
# def get_soil_type(request):
#     lat = request.GET.get('lat')
#     lon = request.GET.get('lon')
#     top_k = request.GET.get('top_k', 1)  # Default to 1 if top_k is not provided

#     if not lat or not lon:
#         return JsonResponse({'error': 'Latitude and longitude are required.'}, status=400)

#     params = {
#         "lat": lat,
#         "lon": lon,
#         "top_k": top_k,
#     }

#     try:
#         with Client() as client:
#             response = client.get(url="https://api-test.openepi.io/soil/type", params=params)
#             if response.status_code != 200:
#                 return JsonResponse({'error': 'Failed to fetch data from the soil type API.'}, status=response.status_code)

#             data = response.json()
#             return JsonResponse(data)

#     except Exception as e:
#         return JsonResponse({'error': str(e)}, status=500)

# import json
# import requests
# from threading import Thread
# from django.http import JsonResponse
# from django.conf import settings
# from django.views.decorators.csrf import csrf_exempt
# from sklearn.ensemble import RandomForestRegressor
# from sklearn.model_selection import train_test_split
# from sklearn.metrics import mean_squared_error
# from sklearn.preprocessing import StandardScaler
# import numpy as np
# import logging

# logging.basicConfig(level=logging.DEBUG)

# # Dummy dataset loader for model training - replace with actual data
# def load_data():
#     data = np.random.rand(100, 10)  # Replace with actual data loading logic
#     X = data[:, :-2]  # Features: soil properties, weather, etc.
#     y_P = data[:, -2]  # Target: Phosphorus levels
#     y_K = data[:, -1]  # Target: Potassium levels
#     return X, y_P, y_K

# # Training the model
# def train_model(X, y_P, y_K):
#     X_train, X_test, y_P_train, y_P_test, y_K_train, y_K_test = train_test_split(
#         X, y_P, y_K, test_size=0.2, random_state=42
#     )

#     scaler = StandardScaler()
#     X_train = scaler.fit_transform(X_train)
#     X_test = scaler.transform(X_test)

#     # Random Forest for Phosphorus prediction
#     rf_P = RandomForestRegressor()
#     rf_P.fit(X_train, y_P_train)
#     y_P_pred = rf_P.predict(X_test)
#     mse_P = mean_squared_error(y_P_test, y_P_pred)
#     logging.info(f"Phosphorus Model MSE: {mse_P}")

#     # Random Forest for Potassium prediction
#     rf_K = RandomForestRegressor()
#     rf_K.fit(X_train, y_K_train)
#     y_K_pred = rf_K.predict(X_test)
#     mse_K = mean_squared_error(y_K_test, y_K_pred)
#     logging.info(f"Potassium Model MSE: {mse_K}")

#     return rf_P, rf_K, scaler

# # Predicting P and K levels
# def predict_P_K(model_P, model_K, scaler, input_features):
#     input_scaled = scaler.transform([input_features])
#     P_level = model_P.predict(input_scaled)[0]
#     K_level = model_K.predict(input_scaled)[0]
#     return P_level, K_level

# # Dummy function to recommend crops based on P and K levels
# def recommend_crop(P_level, K_level):
#     if P_level > 50 and K_level > 50:
#         return "Crop A"
#     elif P_level > 30 and K_level > 30:
#         return "Crop B"
#     else:
#         return "Crop C"

# # Initialize the model at server start-up
# X, y_P, y_K = load_data()
# model_P, model_K, scaler = train_model(X, y_P, y_K)

# # Function to handle the prediction process in a separate thread
# def run_prediction(lat, lon, response_data):
#     try:
#         # Example input features based on fetched data
#         input_features = [lat, lon] + [0.5] * 8  # Dummy input features; replace with actual data

#         # Predict P and K levels
#         P_level, K_level = predict_P_K(model_P, model_K, scaler, input_features)

#         print(f"Predicted P: {P_level}, Predicted K: {K_level}")
#         # Recommend crop based on predicted P and K levels
#         recommended_crop = recommend_crop(P_level, K_level)
#         print(f"Recommended Crop: {recommended_crop}")

#         response_data['predicted_P'] = P_level
#         response_data['predicted_K'] = K_level
#         response_data['recommended_crop'] = recommended_crop
#     except Exception as e:
#         response_data['error'] = str(e)

# # Django view to handle crop prediction requests
# @csrf_exempt
# def crop_prediction_view(request):
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body)
#             lat = data.get('latitude')
#             lon = data.get('longitude')

#             response_data = {}

#             # Run the prediction in a separate thread
#             thread = Thread(target=run_prediction, args=(lat, lon, response_data))
#             thread.start()
#             thread.join()  # Wait for the thread to finish

#             return JsonResponse(response_data)
#         except json.JSONDecodeError:
#             return JsonResponse({'error': 'Invalid JSON'}, status=400)
#         except Exception as e:
#             return JsonResponse({'error': str(e)}, status=500)
#     else:
#         return JsonResponse({'error': 'Invalid request method. Only POST allowed.'}, status=400)

# import json
# import requests
# from threading import Thread
# from django.http import JsonResponse
# from django.conf import settings
# from django.views.decorators.csrf import csrf_exempt
# from sklearn.ensemble import RandomForestRegressor
# from sklearn.model_selection import train_test_split
# from sklearn.metrics import mean_squared_error
# from sklearn.preprocessing import StandardScaler
# import numpy as np
# import logging
# import joblib

# # Configure logging
# logging.basicConfig(level=logging.DEBUG)
# logger = logging.getLogger(__name__)

# # Dummy dataset loader for model training - replace with actual data
# def load_data():
#     logger.debug("Loading dummy data...")
#     data = np.random.rand(100, 10)  # Replace with actual data loading logic
#     X = data[:, :-2]  # Features: soil properties, weather, etc.
#     y_P = data[:, -2]  # Target: Phosphorus levels
#     y_K = data[:, -1]  # Target: Potassium levels
#     logger.debug("Data loaded successfully.")
#     return X, y_P, y_K

# # Training the model
# def train_model(X, y_P, y_K):
#     logger.debug("Training models...")
#     X_train, X_test, y_P_train, y_P_test, y_K_train, y_K_test = train_test_split(
#         X, y_P, y_K, test_size=0.2, random_state=42
#     )

#     scaler = StandardScaler()
#     X_train = scaler.fit_transform(X_train)
#     X_test = scaler.transform(X_test)

#     # Random Forest for Phosphorus prediction
#     rf_P = RandomForestRegressor()
#     rf_P.fit(X_train, y_P_train)
#     y_P_pred = rf_P.predict(X_test)
#     mse_P = mean_squared_error(y_P_test, y_P_pred)
#     logger.info(f"Phosphorus Model MSE: {mse_P}")

#     # Random Forest for Potassium prediction
#     rf_K = RandomForestRegressor()
#     rf_K.fit(X_train, y_K_train)
#     y_K_pred = rf_K.predict(X_test)
#     mse_K = mean_squared_error(y_K_test, y_K_pred)
#     logger.info(f"Potassium Model MSE: {mse_K}")

#     # Save the models and scaler
#     joblib.dump(rf_P, 'model_phosphorus.pkl')
#     joblib.dump(rf_K, 'model_potassium.pkl')
#     joblib.dump(scaler, 'scaler.pkl')
#     logger.debug("Models and scaler saved successfully.")

#     return rf_P, rf_K, scaler

# # Predicting P and K levels
# def predict_P_K(model_P, model_K, scaler, input_features):
#     logger.debug(f"Input features before scaling: {input_features}")
#     input_scaled = scaler.transform([input_features])
#     logger.debug(f"Input features after scaling: {input_scaled}")
#     P_level = model_P.predict(input_scaled)[0]
#     K_level = model_K.predict(input_scaled)[0]
#     logger.debug(f"Predicted P: {P_level}, Predicted K: {K_level}")
#     return P_level, K_level

# # Dummy function to recommend crops based on P and K levels
# def recommend_crop(P_level, K_level):
#     logger.debug(f"Recommending crop based on P: {P_level}, K: {K_level}")
#     if P_level > 50 and K_level > 50:
#         return "Crop A"
#     elif P_level > 30 and K_level > 30:
#         return "Crop B"
#     else:
#         return "Crop C"

# # Initialize the model at server start-up
# logger.debug("Initializing models at server start-up...")
# X, y_P, y_K = load_data()
# model_P, model_K, scaler = train_model(X, y_P, y_K)
# logger.debug("Models initialized successfully.")

# # Function to handle the prediction process in a separate thread
# def run_prediction(lat, lon, response_data):
#     try:
#         logger.debug(f"Running prediction for Latitude: {lat}, Longitude: {lon}")
        
#         # Example input features based on fetched data
#         input_features = [lat, lon] + [0.5] * 8  # Dummy input features; replace with actual data

#         # Predict P and K levels
#         P_level, K_level = predict_P_K(model_P, model_K, scaler, input_features)

#         logger.debug(f"Predicted P: {P_level}, Predicted K: {K_level}")
#         # Recommend crop based on predicted P and K levels
#         recommended_crop = recommend_crop(P_level, K_level)
#         logger.debug(f"Recommended Crop: {recommended_crop}")

#         response_data['predicted_P'] = P_level
#         response_data['predicted_K'] = K_level
#         response_data['recommended_crop'] = recommended_crop
#     except Exception as e:
#         logger.error(f"Error during prediction: {str(e)}")
#         response_data['error'] = str(e)

# # Django view to handle crop prediction requests
# @csrf_exempt
# def crop_prediction_view(request):
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body)
#             lat = data.get('latitude')
#             lon = data.get('longitude')
#             logger.debug(f"Received data: Latitude: {lat}, Longitude: {lon}")

#             response_data = {}

#             # Run the prediction in a separate thread
#             thread = Thread(target=run_prediction, args=(lat, lon, response_data))
#             logger.debug("Starting prediction thread...")
#             thread.start()
#             thread.join()  # Wait for the thread to finish

#             logger.debug("Prediction thread finished.")
#             return JsonResponse(response_data)
#         except json.JSONDecodeError as e:
#             logger.error(f"JSON Decode Error: {str(e)}")
#             return JsonResponse({'error': 'Invalid JSON'}, status=400)
#         except Exception as e:
#             logger.error(f"Error in crop_prediction_view: {str(e)}")
#             return JsonResponse({'error': str(e)}, status=500)
#     else:
#         logger.error("Invalid request method. Only POST is allowed.")
#         return JsonResponse({'error': 'Invalid request method. Only POST allowed.'}, status=400)



# # Your other views
# @csrf_exempt
# def location_view(request):
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body)
#             lat = data.get('latitude')
#             lon = data.get('longitude')

#             url = f'https://api.locationiq.com/v1/reverse.php?key={settings.LOCATIONIQ_API_KEY}&lat={lat}&lon={lon}&format=json'
#             response = requests.get(url)
#             location_data = response.json()

#             return JsonResponse({
#                 'address': location_data.get('display_name'),
#                 'city': location_data.get('address', {}).get('city'),
#                 'state': location_data.get('address', {}).get('state'),
#                 'country': location_data.get('address', {}).get('country'),
#                 'district': location_data.get('address', {}).get('state_district'),
#             })

#         except json.JSONDecodeError:
#             return JsonResponse({'error': 'Invalid JSON'}, status=400)
#         except Exception as e:
#             return JsonResponse({'error': str(e)}, status=500)
#     else:
#         return JsonResponse({'error': 'Invalid request method. Only POST allowed.'}, status=400)

# @csrf_exempt
# def autocomplete_view(request):
#     if request.method == 'GET':
#         query = request.GET.get('q', '')
#         if not query:
#             return JsonResponse({'error': 'No query provided'}, status=400)
        
#         try:
#             url = f'https://api.locationiq.com/v1/autocomplete.php?key={settings.LOCATIONIQ_API_KEY}&q={query}&limit=5'
#             response = requests.get(url)
#             autocomplete_data = response.json()
#             return JsonResponse(autocomplete_data, safe=False)
        
#         except Exception as e:
#             return JsonResponse({'error': str(e)}, status=500)
#     else:
#         return JsonResponse({'error': 'Invalid request method. Only GET allowed.'}, status=400)

# def get_historical_ag_weather(request):
#     lat = request.GET.get('lat')
#     lon = request.GET.get('lon')
#     start_date = request.GET.get('start_date')
#     end_date = request.GET.get('end_date')

#     if not lat or not lon or not start_date or not end_date:
#         return JsonResponse({'error': 'Latitude, longitude, start date, and end date are required'}, status=400)
    
#     url = f'https://api.weatherbit.io/v2.0/history/agweather?lat={lat}&lon={lon}&start_date={start_date}&end_date={end_date}&key={settings.WEATHERBIT_API_KEY}'
#     response = requests.get(url)
    
#     if response.status_code == 200:
#         return JsonResponse(response.json())
#     else:
#         return JsonResponse({'error': 'Failed to fetch data from Weatherbit API'}, status=500)

# def get_ag_weather_forecast(request):
#     lat = request.GET.get('lat')
#     lon = request.GET.get('lon')

#     if not lat or not lon:
#         return JsonResponse({'error': 'Latitude and longitude are required'}, status=400)
    
#     url = f'https://api.weatherbit.io/v2.0/forecast/agweather?lat={lat}&lon={lon}&key={settings.WEATHERBIT_API_KEY}'
#     response = requests.get(url)
    
#     if response.status_code == 200:
#         return JsonResponse(response.json())
#     else:
#         return JsonResponse({'error': 'Failed to fetch data from Weatherbit API'}, status=500)

# def get_current_air_quality(request):
#     lat = request.GET.get('lat')
#     lon = request.GET.get('lon')
#     if not lat or not lon:
#         return JsonResponse({'error': 'Latitude and longitude are required'}, status=400)
    
#     url = f'http://api.weatherbit.io/v2.0/current/airquality?lat={lat}&lon={lon}&key={settings.WEATHERBIT_API_KEY}'
#     response = requests.get(url)
    
#     if response.status_code == 200:
#         return JsonResponse(response.json())
#     else:
#         return JsonResponse({'error': 'Failed to fetch data from Weatherbit API'}, status=500)

# def get_soil_data(request):
#     lat = request.GET.get('lat')
#     lon = request.GET.get('lon')
#     depths = request.GET.getlist('depth')
#     properties = request.GET.getlist('property')
#     values = request.GET.getlist('value')

#     if not lat or not lon:
#         return JsonResponse({'error': 'Latitude and longitude are required.'}, status=400)

#     params = {
#         "lat": lat,
#         "lon": lon,
#         "depth": depths,
#         "property": properties,
#         "value": values,
#     }

#     url = "https://rest.isric.org/soilgrids/v2.0/properties/query"
#     response = requests.get(url, params=params)

#     if response.status_code != 200:
#         return JsonResponse({'error': 'Failed to fetch data from the SoilGrids API.'}, status=response.status_code)

#     data = response.json()

#     # Extracting soil properties
#     soil_layers = []
#     for layer in data["properties"]["layers"]:
#         layer_data = {
#             "name": layer["name"],
#             "unit": layer["unit_measure"]["mapped_units"],
#             "depths": []
#         }
#         for depth in layer["depths"]:
#             depth_data = {
#                 "depth": depth["label"],
#                 "values": depth["values"]
#             }
#             layer_data["depths"].append(depth_data)
#         soil_layers.append(layer_data)

#     return JsonResponse({"layers": soil_layers})

# @csrf_exempt
# def get_soil_type(request):
#     lat = request.GET.get('lat')
#     lon = request.GET.get('lon')
#     top_k = request.GET.get('top_k', 1)  # Default to 1 if top_k is not provided

#     if not lat or not lon:
#         return JsonResponse({'error': 'Latitude and longitude are required.'}, status=400)

#     params = {
#         "lat": lat,
#         "lon": lon,
#         "top_k": top_k,
#     }

#     try:
#         response = requests.get(url="https://api-test.openepi.io/soil/type", params=params)
#         if response.status_code != 200:
#             return JsonResponse({'error': 'Failed to fetch data from the soil type API.'}, status=response.status_code)

#         data = response.json()
#         return JsonResponse(data)

#     except Exception as e:
#         return JsonResponse({'error': str(e)}, status=500)


# import json
# import requests
# from threading import Thread
# from django.http import JsonResponse
# from django.conf import settings
# from django.views.decorators.csrf import csrf_exempt
# from sklearn.ensemble import RandomForestRegressor
# from sklearn.model_selection import train_test_split
# from sklearn.metrics import mean_squared_error
# from sklearn.preprocessing import StandardScaler
# import numpy as np
# import logging
# import joblib

# # Configure logging
# logging.basicConfig(level=logging.DEBUG)
# logger = logging.getLogger(__name__)

# # Dummy dataset loader for model training - replace with actual data
# def load_data():
#     logger.debug("Loading dummy data...")
#     data = np.random.rand(100, 10)  # Replace with actual data loading logic
#     X = data[:, :-2]  # Features: soil properties, weather, etc.
#     y_P = data[:, -2]  # Target: Phosphorus levels
#     y_K = data[:, -1]  # Target: Potassium levels
#     logger.debug("Data loaded successfully.")
#     return X, y_P, y_K

# # Training the model
# def train_model(X, y_P, y_K):
#     logger.debug("Training models...")
#     X_train, X_test, y_P_train, y_P_test, y_K_train, y_K_test = train_test_split(
#         X, y_P, y_K, test_size=0.2, random_state=42
#     )

#     scaler = StandardScaler()
#     X_train = scaler.fit_transform(X_train)
#     X_test = scaler.transform(X_test)

#     # Random Forest for Phosphorus prediction
#     rf_P = RandomForestRegressor()
#     rf_P.fit(X_train, y_P_train)
#     y_P_pred = rf_P.predict(X_test)
#     mse_P = mean_squared_error(y_P_test, y_P_pred)
#     logger.info(f"Phosphorus Model MSE: {mse_P}")

#     # Random Forest for Potassium prediction
#     rf_K = RandomForestRegressor()
#     rf_K.fit(X_train, y_K_train)
#     y_K_pred = rf_K.predict(X_test)
#     mse_K = mean_squared_error(y_K_test, y_K_pred)
#     logger.info(f"Potassium Model MSE: {mse_K}")

#     # Save the models and scaler
#     joblib.dump(rf_P, 'model_phosphorus.pkl')
#     joblib.dump(rf_K, 'model_potassium.pkl')
#     joblib.dump(scaler, 'scaler.pkl')
#     logger.debug("Models and scaler saved successfully.")

#     return rf_P, rf_K, scaler

# # Predicting P and K levels
# def predict_P_K(model_P, model_K, scaler, input_features):
#     logger.debug(f"Input features before scaling: {input_features}")
#     input_scaled = scaler.transform([input_features])
#     logger.debug(f"Input features after scaling: {input_scaled}")
#     P_level = model_P.predict(input_scaled)[0]
#     K_level = model_K.predict(input_scaled)[0]
#     logger.debug(f"Predicted P: {P_level}, Predicted K: {K_level}")
#     return P_level, K_level

# # Dummy function to recommend crops based on P and K levels
# def recommend_crop(P_level, K_level):
#     logger.debug(f"Recommending crop based on P: {P_level}, K: {K_level}")
#     if P_level > 50 and K_level > 50:
#         return "Crop A"
#     elif P_level > 30 and K_level > 30:
#         return "Crop B"
#     else:
#         return "Crop C"

# # Initialize the model at server start-up
# logger.debug("Initializing models at server start-up...")
# X, y_P, y_K = load_data()
# model_P, model_K, scaler = train_model(X, y_P, y_K)
# logger.debug("Models initialized successfully.")

# # Helper functions to fetch data from the different APIs
# def get_historical_ag_weather_data(lat, lon):
#     start_date = "2024-08-09"  # Example start date
#     end_date = "2024-08-10"    # Example end date
#     url = f'https://api.weatherbit.io/v2.0/history/agweather?lat={lat}&lon={lon}&start_date={start_date}&end_date={end_date}&key={settings.WEATHERBIT_API_KEY}'
#     response = requests.get(url)
#     if response.status_code == 200:
#         return response.json()
#     else:
#         logger.error('Failed to fetch data from Weatherbit API (Historical Ag-Weather)')
#         return {}

# def get_ag_weather_forecast_data(lat, lon):
#     url = f'https://api.weatherbit.io/v2.0/forecast/agweather?lat={lat}&lon={lon}&key={settings.WEATHERBIT_API_KEY}'
#     response = requests.get(url)
#     if response.status_code == 200:
#         return response.json()
#     else:
#         logger.error('Failed to fetch data from Weatherbit API (Ag-Weather Forecast)')
#         return {}

# def get_current_air_quality_data(lat, lon):
#     url = f'http://api.weatherbit.io/v2.0/current/airquality?lat={lat}&lon={lon}&key={settings.WEATHERBIT_API_KEY}'
#     response = requests.get(url)
#     if response.status_code == 200:
#         return response.json()
#     else:
#         logger.error('Failed to fetch data from Weatherbit API (Current Air Quality)')
#         return {}

# def get_soil_data_data(lat, lon):
#     depths = ['0-5cm', '5-15cm', '15-30cm', '30-60cm', '60-100cm', '100-200cm']
#     properties = ['bdod', 'cec', 'cfvo', 'clay', 'nitrogen', 'ocd', 'ocs', 'phh2o', 'sand', 'silt', 'soc', 'wv0010', 'wv0033', 'wv1500']
#     values = ['Q0.5', 'Q0.05', 'Q0.95', 'mean', 'uncertainty']

#     params = {
#         "lat": lat,
#         "lon": lon,
#         "depth": depths,
#         "property": properties,
#         "value": values,
#     }

#     url = "https://rest.isric.org/soilgrids/v2.0/properties/query"
#     response = requests.get(url, params=params)
#     if response.status_code == 200:
#         return response.json()
#     else:
#         logger.error('Failed to fetch data from the SoilGrids API')
#         return {}

# def get_soil_type_data(lat, lon):
#     url = "https://api-test.openepi.io/soil/type"
#     params = {
#         "lat": lat,
#         "lon": lon,
#         "top_k": 1,
#     }
#     response = requests.get(url, params=params)
#     if response.status_code == 200:
#         return response.json()
#     else:
#         logger.error('Failed to fetch data from the soil type API')
#         return {}

# # Function to extract features from the retrieved data
# def extract_features(historical_data, forecast_data, air_quality_data, soil_data, soil_type_data):
#     # Extract features from Historical Ag-Weather Data
#     historical_features = []
#     if historical_data.get('data'):
#         latest_historical = historical_data['data'][-1]  # Using the latest entry
#         historical_features.extend([
#             latest_historical.get('bulk_soil_density', 0),
#             latest_historical.get('dlwrf_avg', 0),
#             latest_historical.get('dlwrf_max', 0),
#             latest_historical.get('evapotranspiration', 0),
#             latest_historical.get('precip', 0),
#             latest_historical.get('pres_avg', 0),
#             latest_historical.get('skin_temp_avg', 0),
#             latest_historical.get('soilm_0_10cm', 0),
#             latest_historical.get('soilt_0_10cm', 0),
#             latest_historical.get('temp_2m_avg', 0),
#             latest_historical.get('wind_10m_spd_avg', 0),
#         ])

#     # Extract features from Ag-Weather Forecast Data
#     forecast_features = []
#     if forecast_data.get('data'):
#         latest_forecast = forecast_data['data'][0]  # Using the first entry in forecast
#         forecast_features.extend([
#             latest_forecast.get('bulk_soil_density', 0),
#             latest_forecast.get('dlwrf_avg', 0),
#             latest_forecast.get('dlwrf_max', 0),
#             latest_forecast.get('evapotranspiration', 0),
#             latest_forecast.get('precip', 0),
#             latest_forecast.get('pres_avg', 0),
#             latest_forecast.get('skin_temp_avg', 0),
#             latest_forecast.get('soilm_0_10cm', 0),
#             latest_forecast.get('soilt_0_10cm', 0),
#             latest_forecast.get('temp_2m_avg', 0),
#             latest_forecast.get('wind_10m_spd_avg', 0),
#         ])

#     # Extract features from Current Air Quality Data
#     air_quality_features = []
#     if air_quality_data.get('data'):
#         air_quality_entry = air_quality_data['data'][0]
#         air_quality_features.extend([
#             air_quality_entry.get('aqi', 0),
#             air_quality_entry.get('co', 0),
#             air_quality_entry.get('no2', 0),
#             air_quality_entry.get('o3', 0),
#             air_quality_entry.get('pm10', 0),
#             air_quality_entry.get('pm25', 0),
#             air_quality_entry.get('so2', 0),
#         ])

#     # Extract features from Soil Data (e.g., mean values at each depth)
#     soil_features = []
#     if soil_data.get('layers'):
#         for layer in soil_data['layers']:
#             for depth in layer['depths']:
#                 soil_features.append(depth['values'].get('mean', 0))

#     # Extract features from Soil Type Data
#     soil_type_features = []
#     if soil_type_data.get('properties'):
#         soil_type_features.append(soil_type_data['properties'].get('most_probable_soil_type', 0))
#         for probability in soil_type_data['properties'].get('probabilities', []):
#             soil_type_features.append(probability.get('probability', 0))

#     # Combine all features into a single feature vector
#     combined_features = historical_features + forecast_features + air_quality_features + soil_features + soil_type_features

#     return combined_features

# # Function to handle the prediction process in a separate thread
# def run_prediction(lat, lon, response_data):
#     try:
#         logger.debug(f"Running prediction for Latitude: {lat}, Longitude: {lon}")

#         # Fetch all required data
#         historical_data = get_historical_ag_weather_data(lat, lon)
#         forecast_data = get_ag_weather_forecast_data(lat, lon)
#         air_quality_data = get_current_air_quality_data(lat, lon)
#         soil_data = get_soil_data_data(lat, lon)
#         soil_type_data = get_soil_type_data(lat, lon)

#         # Extract features
#         input_features = extract_features(historical_data, forecast_data, air_quality_data, soil_data, soil_type_data)
#         logger.debug(f"Extracted features: {input_features}")

#         # Predict P and K levels
#         P_level, K_level = predict_P_K(model_P, model_K, scaler, input_features)

#         logger.debug(f"Predicted P: {P_level}, Predicted K: {K_level}")
#         print(f"Predicted P: {P_level}, Predicted K: {K_level}")
#         # Recommend crop based on predicted P and K levels
#         recommended_crop = recommend_crop(P_level, K_level)
#         logger.debug(f"Recommended Crop: {recommended_crop}")

#         response_data['predicted_P'] = P_level
#         response_data['predicted_K'] = K_level
#         response_data['recommended_crop'] = recommended_crop
#     except Exception as e:
#         logger.error(f"Error during prediction: {str(e)}")
#         response_data['error'] = str(e)

# # Django view to handle crop prediction requests
# @csrf_exempt
# def crop_prediction_view(request):
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body)
#             lat = data.get('latitude')
#             lon = data.get('longitude')
#             logger.debug(f"Received data: Latitude: {lat}, Longitude: {lon}")

#             response_data = {}

#             # Run the prediction in a separate thread
#             thread = Thread(target=run_prediction, args=(lat, lon, response_data))
#             logger.debug("Starting prediction thread...")
#             thread.start()
#             thread.join()  # Wait for the thread to finish

#             logger.debug("Prediction thread finished.")
#             return JsonResponse(response_data)
#         except json.JSONDecodeError as e:
#             logger.error(f"JSON Decode Error: {str(e)}")
#             return JsonResponse({'error': 'Invalid JSON'}, status=400)
#         except Exception as e:
#             logger.error(f"Error in crop_prediction_view: {str(e)}")
#             return JsonResponse({'error': str(e)}, status=500)
#     else:
#         logger.error("Invalid request method. Only POST is allowed.")
#         return JsonResponse({'error': 'Invalid request method. Only POST allowed.'}, status=400)

# # Your other views
# @csrf_exempt
# def location_view(request):
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body)
#             lat = data.get('latitude')
#             lon = data.get('longitude')

#             url = f'https://api.locationiq.com/v1/reverse.php?key={settings.LOCATIONIQ_API_KEY}&lat={lat}&lon={lon}&format=json'
#             response = requests.get(url)
#             location_data = response.json()

#             return JsonResponse({
#                 'address': location_data.get('display_name'),
#                 'city': location_data.get('address', {}).get('city'),
#                 'state': location_data.get('address', {}).get('state'),
#                 'country': location_data.get('address', {}).get('country'),
#                 'district': location_data.get('address', {}).get('state_district'),
#             })

#         except json.JSONDecodeError:
#             return JsonResponse({'error': 'Invalid JSON'}, status=400)
#         except Exception as e:
#             return JsonResponse({'error': str(e)}, status=500)
#     else:
#         return JsonResponse({'error': 'Invalid request method. Only POST allowed.'}, status=400)

# @csrf_exempt
# def autocomplete_view(request):
#     if request.method == 'GET':
#         query = request.GET.get('q', '')
#         if not query:
#             return JsonResponse({'error': 'No query provided'}, status=400)
        
#         try:
#             url = f'https://api.locationiq.com/v1/autocomplete.php?key={settings.LOCATIONIQ_API_KEY}&q={query}&limit=5'
#             response = requests.get(url)
#             autocomplete_data = response.json()
#             return JsonResponse(autocomplete_data, safe=False)
        
#         except Exception as e:
#             return JsonResponse({'error': str(e)}, status=500)
#     else:
#         return JsonResponse({'error': 'Invalid request method. Only GET allowed.'}, status=400)

# def get_historical_ag_weather(request):
#     lat = request.GET.get('lat')
#     lon = request.GET.get('lon')
#     start_date = request.GET.get('start_date')
#     end_date = request.GET.get('end_date')

#     if not lat or not lon or not start_date or not end_date:
#         return JsonResponse({'error': 'Latitude, longitude, start date, and end date are required'}, status=400)
    
#     url = f'https://api.weatherbit.io/v2.0/history/agweather?lat={lat}&lon={lon}&start_date={start_date}&end_date={end_date}&key={settings.WEATHERBIT_API_KEY}'
#     response = requests.get(url)
    
#     if response.status_code == 200:
#         return JsonResponse(response.json())
#     else:
#         return JsonResponse({'error': 'Failed to fetch data from Weatherbit API'}, status=500)

# def get_ag_weather_forecast(request):
#     lat = request.GET.get('lat')
#     lon = request.GET.get('lon')

#     if not lat or not lon:
#         return JsonResponse({'error': 'Latitude and longitude are required'}, status=400)
    
#     url = f'https://api.weatherbit.io/v2.0/forecast/agweather?lat={lat}&lon={lon}&key={settings.WEATHERBIT_API_KEY}'
#     response = requests.get(url)
    
#     if response.status_code == 200:
#         return JsonResponse(response.json())
#     else:
#         return JsonResponse({'error': 'Failed to fetch data from Weatherbit API'}, status=500)

# def get_current_air_quality(request):
#     lat = request.GET.get('lat')
#     lon = request.GET.get('lon')
#     if not lat or not lon:
#         return JsonResponse({'error': 'Latitude and longitude are required'}, status=400)
    
#     url = f'http://api.weatherbit.io/v2.0/current/airquality?lat={lat}&lon={lon}&key={settings.WEATHERBIT_API_KEY}'
#     response = requests.get(url)
    
#     if response.status_code == 200:
#         return JsonResponse(response.json())
#     else:
#         return JsonResponse({'error': 'Failed to fetch data from Weatherbit API'}, status=500)

# def get_soil_data(request):
#     lat = request.GET.get('lat')
#     lon = request.GET.get('lon')
#     depths = request.GET.getlist('depth')
#     properties = request.GET.getlist('property')
#     values = request.GET.getlist('value')

#     if not lat or not lon:
#         return JsonResponse({'error': 'Latitude and longitude are required.'}, status=400)

#     params = {
#         "lat": lat,
#         "lon": lon,
#         "depth": depths,
#         "property": properties,
#         "value": values,
#     }

#     url = "https://rest.isric.org/soilgrids/v2.0/properties/query"
#     response = requests.get(url, params=params)

#     if response.status_code != 200:
#         return JsonResponse({'error': 'Failed to fetch data from the SoilGrids API.'}, status=response.status_code)

#     data = response.json()

#     # Extracting soil properties
#     soil_layers = []
#     for layer in data["properties"]["layers"]:
#         layer_data = {
#             "name": layer["name"],
#             "unit": layer["unit_measure"]["mapped_units"],
#             "depths": []
#         }
#         for depth in layer["depths"]:
#             depth_data = {
#                 "depth": depth["label"],
#                 "values": depth["values"]
#             }
#             layer_data["depths"].append(depth_data)
#         soil_layers.append(layer_data)

#     return JsonResponse({"layers": soil_layers})

# @csrf_exempt
# def get_soil_type(request):
#     lat = request.GET.get('lat')
#     lon = request.GET.get('lon')
#     top_k = request.GET.get('top_k', 1)  # Default to 1 if top_k is not provided

#     if not lat or not lon:
#         return JsonResponse({'error': 'Latitude and longitude are required.'}, status=400)

#     params = {
#         "lat": lat,
#         "lon": lon,
#         "top_k": top_k,
#     }

#     try:
#         response = requests.get(url="https://api-test.openepi.io/soil/type", params=params)
#         if response.status_code != 200:
#             return JsonResponse({'error': 'Failed to fetch data from the soil type API.'}, status=response.status_code)

#         data = response.json()
#         return JsonResponse(data)

#     except Exception as e:
#         return JsonResponse({'error': str(e)}, status=500)

# import json
# import requests
# from threading import Thread
# from django.http import JsonResponse
# from django.conf import settings
# from django.views.decorators.csrf import csrf_exempt
# from sklearn.ensemble import RandomForestRegressor
# from sklearn.model_selection import train_test_split
# from sklearn.metrics import mean_squared_error
# from sklearn.preprocessing import StandardScaler
# import numpy as np
# import logging
# import joblib

# # Configure logging
# logging.basicConfig(level=logging.DEBUG)
# logger = logging.getLogger(__name__)

# # Load the trained Decision Tree model
# decision_tree_model = joblib.load('DecisionTree.pkl')

# # Dummy dataset loader for model training - replace with actual data
# def load_data():
#     logger.debug("Loading dummy data...")
#     data = np.random.rand(100, 10)  # Replace with actual data loading logic
#     X = data[:, :-2]  # Features: soil properties, weather, etc.
#     y_P = data[:, -2]  # Target: Phosphorus levels
#     y_K = data[:, -1]  # Target: Potassium levels
#     logger.debug("Data loaded successfully.")
#     return X, y_P, y_K

# # Training the model
# def train_model(X, y_P, y_K):
#     logger.debug("Training models...")
#     X_train, X_test, y_P_train, y_P_test, y_K_train, y_K_test = train_test_split(
#         X, y_P, y_K, test_size=0.2, random_state=42
#     )

#     scaler = StandardScaler()
#     X_train = scaler.fit_transform(X_train)
#     X_test = scaler.transform(X_test)

#     # Random Forest for Phosphorus prediction
#     rf_P = RandomForestRegressor()
#     rf_P.fit(X_train, y_P_train)
#     y_P_pred = rf_P.predict(X_test)
#     mse_P = mean_squared_error(y_P_test, y_P_pred)
#     logger.info(f"Phosphorus Model MSE: {mse_P}")

#     # Random Forest for Potassium prediction
#     rf_K = RandomForestRegressor()
#     rf_K.fit(X_train, y_K_train)
#     y_K_pred = rf_K.predict(X_test)
#     mse_K = mean_squared_error(y_K_test, y_K_pred)
#     logger.info(f"Potassium Model MSE: {mse_K}")

#     # Save the models and scaler
#     joblib.dump(rf_P, 'model_phosphorus.pkl')
#     joblib.dump(rf_K, 'model_potassium.pkl')
#     joblib.dump(scaler, 'scaler.pkl')
#     logger.debug("Models and scaler saved successfully.")

#     return rf_P, rf_K, scaler

# # Predicting P and K levels
# def predict_P_K(model_P, model_K, scaler, input_features):
#     logger.debug(f"Input features before scaling: {input_features}")
#     input_scaled = scaler.transform([input_features])
#     logger.debug(f"Input features after scaling: {input_scaled}")
#     P_level = model_P.predict(input_scaled)[0]
#     K_level = model_K.predict(input_scaled)[0]
#     logger.debug(f"Predicted P: {P_level}, Predicted K: {K_level}")
#     return P_level, K_level

# # Updated function to recommend crops based on P, K, and additional features
# def recommend_crop(P_level, K_level, temp=None, humidity=None, ph=None, rainfall=None):
#     logger.debug(f"Recommending crop based on P: {P_level}, K: {K_level}, temp: {temp}, humidity: {humidity}, ph: {ph}, rainfall: {rainfall}")
    
#     # Prepare the input features in the order expected by the model
#     input_features = np.array([[P_level, K_level, temp, humidity, ph, rainfall]])
    
#     # Use the loaded Decision Tree model to predict the crop
#     predicted_crop = decision_tree_model.predict(input_features)[0]
    
#     logger.debug(f"Recommended Crop: {predicted_crop}")
#     return predicted_crop

# # Initialize the model at server start-up
# logger.debug("Initializing models at server start-up...")
# X, y_P, y_K = load_data()
# model_P, model_K, scaler = train_model(X, y_P, y_K)
# logger.debug("Models initialized successfully.")

# # Helper functions to fetch data from the different APIs
# def get_historical_ag_weather_data(lat, lon):
#     start_date = "2024-08-09"  # Example start date
#     end_date = "2024-08-10"    # Example end date
#     url = f'https://api.weatherbit.io/v2.0/history/agweather?lat={lat}&lon={lon}&start_date={start_date}&end_date={end_date}&key={settings.WEATHERBIT_API_KEY}'
#     response = requests.get(url)
#     if response.status_code == 200:
#         return response.json()
#     else:
#         logger.error('Failed to fetch data from Weatherbit API (Historical Ag-Weather)')
#         return {}

# def get_ag_weather_forecast_data(lat, lon):
#     url = f'https://api.weatherbit.io/v2.0/forecast/agweather?lat={lat}&lon={lon}&key={settings.WEATHERBIT_API_KEY}'
#     response = requests.get(url)
#     if response.status_code == 200:
#         return response.json()
#     else:
#         logger.error('Failed to fetch data from Weatherbit API (Ag-Weather Forecast)')
#         return {}

# def get_current_air_quality_data(lat, lon):
#     url = f'http://api.weatherbit.io/v2.0/current/airquality?lat={lat}&lon={lon}&key={settings.WEATHERBIT_API_KEY}'
#     response = requests.get(url)
#     if response.status_code == 200:
#         return response.json()
#     else:
#         logger.error('Failed to fetch data from Weatherbit API (Current Air Quality)')
#         return {}

# def get_soil_data_data(lat, lon):
#     depths = ['0-5cm', '5-15cm', '15-30cm', '30-60cm', '60-100cm', '100-200cm']
#     properties = ['bdod', 'cec', 'cfvo', 'clay', 'nitrogen', 'ocd', 'ocs', 'phh2o', 'sand', 'silt', 'soc', 'wv0010', 'wv0033', 'wv1500']
#     values = ['Q0.5', 'Q0.05', 'Q0.95', 'mean', 'uncertainty']

#     params = {
#         "lat": lat,
#         "lon": lon,
#         "depth": depths,
#         "property": properties,
#         "value": values,
#     }

#     url = "https://rest.isric.org/soilgrids/v2.0/properties/query"
#     response = requests.get(url, params=params)
#     if response.status_code == 200:
#         return response.json()
#     else:
#         logger.error('Failed to fetch data from the SoilGrids API')
#         return {}

# def get_soil_type_data(lat, lon):
#     url = "https://api-test.openepi.io/soil/type"
#     params = {
#         "lat": lat,
#         "lon": lon,
#         "top_k": 1,
#     }
#     response = requests.get(url, params=params)
#     if (response.status_code == 200):
#         return response.json()
#     else:
#         logger.error('Failed to fetch data from the soil type API')
#         return {}

# # Function to extract features from the retrieved data
# def extract_features(historical_data, forecast_data, air_quality_data, soil_data, soil_type_data):
#     # Extract features from Historical Ag-Weather Data
#     historical_features = []
#     if historical_data.get('data'):
#         latest_historical = historical_data['data'][-1]  # Using the latest entry
#         historical_features.extend([
#             latest_historical.get('bulk_soil_density', 0),
#             latest_historical.get('dlwrf_avg', 0),
#             latest_historical.get('dlwrf_max', 0),
#             latest_historical.get('evapotranspiration', 0),
#             latest_historical.get('precip', 0),
#             latest_historical.get('pres_avg', 0),
#             latest_historical.get('skin_temp_avg', 0),
#             latest_historical.get('soilm_0_10cm', 0),
#             latest_historical.get('soilt_0_10cm', 0),
#             latest_historical.get('temp_2m_avg', 0),
#             latest_historical.get('wind_10m_spd_avg', 0),
#         ])

#     # Extract features from Ag-Weather Forecast Data
#     forecast_features = []
#     if forecast_data.get('data'):
#         latest_forecast = forecast_data['data'][0]  # Using the first entry in forecast
#         forecast_features.extend([
#             latest_forecast.get('bulk_soil_density', 0),
#             latest_forecast.get('dlwrf_avg', 0),
#             latest_forecast.get('dlwrf_max', 0),
#             latest_forecast.get('evapotranspiration', 0),
#             latest_forecast.get('precip', 0),
#             latest_forecast.get('pres_avg', 0),
#             latest_forecast.get('skin_temp_avg', 0),
#             latest_forecast.get('soilm_0_10cm', 0),
#             latest_forecast.get('soilt_0_10cm', 0),
#             latest_forecast.get('temp_2m_avg', 0),
#             latest_forecast.get('wind_10m_spd_avg', 0),
#         ])

#     # Extract features from Current Air Quality Data
#     air_quality_features = []
#     if air_quality_data.get('data'):
#         air_quality_entry = air_quality_data['data'][0]
#         air_quality_features.extend([
#             air_quality_entry.get('aqi', 0),
#             air_quality_entry.get('co', 0),
#             air_quality_entry.get('no2', 0),
#             air_quality_entry.get('o3', 0),
#             air_quality_entry.get('pm10', 0),
#             air_quality_entry.get('pm25', 0),
#             air_quality_entry.get('so2', 0),
#         ])

#     # Extract features from Soil Data (e.g., mean values at each depth)
#     soil_features = []
#     if soil_data.get('layers'):
#         for layer in soil_data['layers']:
#             for depth in layer['depths']:
#                 soil_features.append(depth['values'].get('mean', 0))

#     # Extract features from Soil Type Data
#     soil_type_features = []
#     if soil_type_data.get('properties'):
#         soil_type_features.append(soil_type_data['properties'].get('most_probable_soil_type', 0))
#         for probability in soil_type_data['properties'].get('probabilities', []):
#             soil_type_features.append(probability.get('probability', 0))

#     # Combine all features into a single feature vector
#     combined_features = historical_features + forecast_features + air_quality_features + soil_features + soil_type_features

#     return combined_features

# # Function to handle the prediction process in a separate thread
# def run_prediction(lat, lon, response_data):
#     try:
#         logger.debug(f"Running prediction for Latitude: {lat}, Longitude: {lon}")

#         # Fetch all required data
#         historical_data = get_historical_ag_weather_data(lat, lon)
#         forecast_data = get_ag_weather_forecast_data(lat, lon)
#         air_quality_data = get_current_air_quality_data(lat, lon)
#         soil_data = get_soil_data_data(lat, lon)
#         soil_type_data = get_soil_type_data(lat, lon)

#         # Extract features
#         input_features = extract_features(historical_data, forecast_data, air_quality_data, soil_data, soil_type_data)
#         logger.debug(f"Extracted features: {input_features}")

#         # Predict P and K levels
#         P_level, K_level = predict_P_K(model_P, model_K, scaler, input_features)

#         logger.debug(f"Predicted P: {P_level}, Predicted K: {K_level}")
#         print(f"Predicted P: {P_level}, Predicted K: {K_level}")

#         # Extract additional features for crop recommendation
#         temp = input_features[9]  # Example index for temperature
#         humidity = input_features[10]  # Example index for humidity
#         ph = input_features[11]  # Example index for pH
#         rainfall = input_features[12]  # Example index for rainfall

#         # Recommend crop based on predicted P and K levels and additional features
#         recommended_crop = recommend_crop(P_level, K_level, temp, humidity, ph, rainfall)
#         logger.debug(f"Recommended Crop: {recommended_crop}")

#         response_data['predicted_P'] = P_level
#         response_data['predicted_K'] = K_level
#         response_data['recommended_crop'] = recommended_crop
#     except Exception as e:
#         logger.error(f"Error during prediction: {str(e)}")
#         response_data['error'] = str(e)

# # Django view to handle crop prediction requests
# @csrf_exempt
# def crop_prediction_view(request):
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body)
#             lat = data.get('latitude')
#             lon = data.get('longitude')
#             logger.debug(f"Received data: Latitude: {lat}, Longitude: {lon}")

#             response_data = {}

#             # Run the prediction in a separate thread
#             thread = Thread(target=run_prediction, args=(lat, lon, response_data))
#             logger.debug("Starting prediction thread...")
#             thread.start()
#             thread.join()  # Wait for the thread to finish

#             logger.debug("Prediction thread finished.")
#             return JsonResponse(response_data)
#         except json.JSONDecodeError as e:
#             logger.error(f"JSON Decode Error: {str(e)}")
#             return JsonResponse({'error': 'Invalid JSON'}, status=400)
#         except Exception as e:
#             logger.error(f"Error in crop_prediction_view: {str(e)}")
#             return JsonResponse({'error': str(e)}, status=500)
#     else:
#         logger.error("Invalid request method. Only POST is allowed.")
#         return JsonResponse({'error': 'Invalid request method. Only POST allowed.'}, status=400)

# # Your other views
# @csrf_exempt
# def location_view(request):
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body)
#             lat = data.get('latitude')
#             lon = data.get('longitude')

#             url = f'https://api.locationiq.com/v1/reverse.php?key={settings.LOCATIONIQ_API_KEY}&lat={lat}&lon={lon}&format=json'
#             response = requests.get(url)
#             location_data = response.json()

#             return JsonResponse({
#                 'address': location_data.get('display_name'),
#                 'city': location_data.get('address', {}).get('city'),
#                 'state': location_data.get('address', {}).get('state'),
#                 'country': location_data.get('address', {}).get('country'),
#                 'district': location_data.get('address', {}).get('state_district'),
#             })

#         except json.JSONDecodeError:
#             return JsonResponse({'error': 'Invalid JSON'}, status=400)
#         except Exception as e:
#             return JsonResponse({'error': str(e)}, status=500)
#     else:
#         return JsonResponse({'error': 'Invalid request method. Only POST allowed.'}, status=400)

# @csrf_exempt
# def autocomplete_view(request):
#     if request.method == 'GET':
#         query = request.GET.get('q', '')
#         if not query:
#             return JsonResponse({'error': 'No query provided'}, status=400)
        
#         try:
#             url = f'https://api.locationiq.com/v1/autocomplete.php?key={settings.LOCATIONIQ_API_KEY}&q={query}&limit=5'
#             response = requests.get(url)
#             autocomplete_data = response.json()
#             return JsonResponse(autocomplete_data, safe=False)
        
#         except Exception as e:
#             return JsonResponse({'error': str(e)}, status=500)
#     else:
#         return JsonResponse({'error': 'Invalid request method. Only GET allowed.'}, status=400)

# def get_historical_ag_weather(request):
#     lat = request.GET.get('lat')
#     lon = request.GET.get('lon')
#     start_date = request.GET.get('start_date')
#     end_date = request.GET.get('end_date')

#     if not lat or not lon or not start_date or not end_date:
#         return JsonResponse({'error': 'Latitude, longitude, start date, and end date are required'}, status=400)
    
#     url = f'https://api.weatherbit.io/v2.0/history/agweather?lat={lat}&lon={lon}&start_date={start_date}&end_date={end_date}&key={settings.WEATHERBIT_API_KEY}'
#     response = requests.get(url)
    
#     if response.status_code == 200:
#         return JsonResponse(response.json())
#     else:
#         return JsonResponse({'error': 'Failed to fetch data from Weatherbit API'}, status=500)

# def get_ag_weather_forecast(request):
#     lat = request.GET.get('lat')
#     lon = request.GET.get('lon')

#     if not lat or not lon:
#         return JsonResponse({'error': 'Latitude and longitude are required'}, status=400)
    
#     url = f'https://api.weatherbit.io/v2.0/forecast/agweather?lat={lat}&lon={lon}&key={settings.WEATHERBIT_API_KEY}'
#     response = requests.get(url)
    
#     if response.status_code == 200:
#         return JsonResponse(response.json())
#     else:
#         return JsonResponse({'error': 'Failed to fetch data from Weatherbit API'}, status=500)

# def get_current_air_quality(request):
#     lat = request.GET.get('lat')
#     lon = request.GET.get('lon')
#     if not lat or not lon:
#         return JsonResponse({'error': 'Latitude and longitude are required'}, status=400)
    
#     url = f'http://api.weatherbit.io/v2.0/current/airquality?lat={lat}&lon={lon}&key={settings.WEATHERBIT_API_KEY}'
#     response = requests.get(url)
    
#     if response.status_code == 200:
#         return JsonResponse(response.json())
#     else:
#         return JsonResponse({'error': 'Failed to fetch data from Weatherbit API'}, status=500)

# def get_soil_data(request):
#     lat = request.GET.get('lat')
#     lon = request.GET.get('lon')
#     depths = request.GET.getlist('depth')
#     properties = request.GET.getlist('property')
#     values = request.GET.getlist('value')

#     if not lat or not lon:
#         return JsonResponse({'error': 'Latitude and longitude are required.'}, status=400)

#     params = {
#         "lat": lat,
#         "lon": lon,
#         "depth": depths,
#         "property": properties,
#         "value": values,
#     }

#     url = "https://rest.isric.org/soilgrids/v2.0/properties/query"
#     response = requests.get(url, params=params)

#     if response.status_code != 200:
#         return JsonResponse({'error': 'Failed to fetch data from the SoilGrids API.'}, status=response.status_code)

#     data = response.json()

#     # Extracting soil properties
#     soil_layers = []
#     for layer in data["properties"]["layers"]:
#         layer_data = {
#             "name": layer["name"],
#             "unit": layer["unit_measure"]["mapped_units"],
#             "depths": []
#         }
#         for depth in layer["depths"]:
#             depth_data = {
#                 "depth": depth["label"],
#                 "values": depth["values"]
#             }
#             layer_data["depths"].append(depth_data)
#         soil_layers.append(layer_data)

#     return JsonResponse({"layers": soil_layers})

# @csrf_exempt
# def get_soil_type(request):
#     lat = request.GET.get('lat')
#     lon = request.GET.get('lon')
#     top_k = request.GET.get('top_k', 1)  # Default to 1 if top_k is not provided

#     if not lat or not lon:
#         return JsonResponse({'error': 'Latitude and longitude are required.'}, status=400)

#     params = {
#         "lat": lat,
#         "lon": lon,
#         "top_k": top_k,
#     }

#     try:
#         response = requests.get(url="https://api-test.openepi.io/soil/type", params=params)
#         if response.status_code != 200:
#             return JsonResponse({'error': 'Failed to fetch data from the soil type API.'}, status=response.status_code)

#         data = response.json()
#         return JsonResponse(data)

#     except Exception as e:
#         return JsonResponse({'error': str(e)}, status=500)


import json
import requests
from threading import Thread
from django.http import JsonResponse
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, classification_report, accuracy_score
from sklearn.preprocessing import StandardScaler
import numpy as np
import logging
import joblib
import pandas as pd
from sklearn.tree import DecisionTreeClassifier
import pickle
from sklearn.preprocessing import LabelEncoder


# Configure logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)


# Load the dataset for crop recommendation
PATH = 'Crop_recommendation.csv'
df = pd.read_csv(PATH)

# Prepare the features and target labels
features = df[['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']]
target = df['label']

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.2, random_state=2)

# Train a new Decision Tree model
decision_tree_model = DecisionTreeClassifier(criterion="entropy", random_state=2, max_depth=5)
decision_tree_model.fit(X_train, y_train)

# Save the trained Decision Tree model
DT_pkl_filename = 'DecisionTree.pkl'
with open(DT_pkl_filename, 'wb') as file:
    pickle.dump(decision_tree_model, file)

# Log the accuracy of the model
predicted_values = decision_tree_model.predict(X_test)
accuracy = accuracy_score(y_test, predicted_values)
logger.info(f"Decision Tree Model Accuracy: {accuracy * 100:.2f}%")
logger.info(f"Classification Report:\n{classification_report(y_test, predicted_values)}")

# Dummy dataset loader for model training - replace with actual data
def load_data():
    logger.debug("Loading dummy data...")
    data = np.random.rand(100, 10)  # Replace with actual data loading logic
    X = data[:, :-2]  # Features: soil properties, weather, etc.
    y_P = data[:, -2]  # Target: Phosphorus levels
    y_K = data[:, -1]  # Target: Potassium levels
    logger.debug("Data loaded successfully.")
    return X, y_P, y_K

# # Training the model
# def train_model(X, y_P, y_K):
#     logger.debug("Training models...")
#     X_train, X_test, y_P_train, y_P_test, y_K_train, y_K_test = train_test_split(
#         X, y_P, y_K, test_size=0.2, random_state=42
#     )

#     scaler = StandardScaler()
#     X_train = scaler.fit_transform(X_train)
#     X_test = scaler.transform(X_test)

#     # Random Forest for Phosphorus prediction
#     rf_P = RandomForestRegressor()
#     rf_P.fit(X_train, y_P_train)
#     y_P_pred = rf_P.predict(X_test)
#     mse_P = mean_squared_error(y_P_test, y_P_pred)
#     logger.info(f"Phosphorus Model MSE: {mse_P}")

#     # Random Forest for Potassium prediction
#     rf_K = RandomForestRegressor()
#     rf_K.fit(X_train, y_K_train)
#     y_K_pred = rf_K.predict(X_test)
#     mse_K = mean_squared_error(y_K_test, y_K_pred)
#     logger.info(f"Potassium Model MSE: {mse_K}")

#     # Save the models and scaler
#     joblib.dump(rf_P, 'model_phosphorus.pkl')
#     joblib.dump(rf_K, 'model_potassium.pkl')
#     joblib.dump(scaler, 'scaler.pkl')
#     logger.debug("Models and scaler saved successfully.")

#     return rf_P, rf_K, scaler

# def train_model(X, y_P, y_K):
#     logger.debug("Training models...")
    
#     X_train, X_test, y_P_train, y_P_test, y_K_train, y_K_test = train_test_split(
#         X, y_P, y_K, test_size=0.2, random_state=42
#     )

#     # Split features into those that need scaling and those that don't
#     X_train_to_scale = X_train[:, :8]  # Assuming first 8 features need scaling
#     X_test_to_scale = X_test[:, :8]
    
#     scaler = StandardScaler()
#     X_train_scaled = scaler.fit_transform(X_train_to_scale)
#     X_test_scaled = scaler.transform(X_test_to_scale)

#     # Combine scaled and unscaled features
#     X_train_combined = np.hstack((X_train_scaled, X_train[:, 8:]))
#     X_test_combined = np.hstack((X_test_scaled, X_test[:, 8:]))

#     # Random Forest for Phosphorus prediction
#     rf_P = RandomForestRegressor()
#     rf_P.fit(X_train_combined, y_P_train)
#     y_P_pred = rf_P.predict(X_test_combined)
#     mse_P = mean_squared_error(y_P_test, y_P_pred)
#     logger.info(f"Phosphorus Model MSE: {mse_P}")

#     # Random Forest for Potassium prediction
#     rf_K = RandomForestRegressor()
#     rf_K.fit(X_train_combined, y_K_train)
#     y_K_pred = rf_K.predict(X_test_combined)
#     mse_K = mean_squared_error(y_K_test, y_K_pred)
#     logger.info(f"Potassium Model MSE: {mse_K}")

#     # Save the models and scaler
#     joblib.dump(rf_P, 'model_phosphorus.pkl')
#     joblib.dump(rf_K, 'model_potassium.pkl')
#     joblib.dump(scaler, 'scaler.pkl')
#     logger.debug("Models and scaler saved successfully.")

#     return rf_P, rf_K, scaler

def train_model(X, y_P, y_K):
    logger.debug("Training models...")
    
    # Assuming X includes both features that need scaling and those that don't
    features_to_scale = X[:, :8]  # First 8 features to be scaled
    other_features = X[:, 8:]  # Remaining features

    # Scale the features that need scaling
    scaler = StandardScaler()
    features_to_scale_scaled = scaler.fit_transform(features_to_scale)

    # Combine scaled features and non-scaled features
    X_scaled_combined = np.hstack((features_to_scale_scaled, other_features))

    # Split the data into training and testing sets
    X_train, X_test, y_P_train, y_P_test, y_K_train, y_K_test = train_test_split(
        X_scaled_combined, y_P, y_K, test_size=0.2, random_state=42
    )

    # Train Random Forest for Phosphorus prediction
    rf_P = RandomForestRegressor()
    rf_P.fit(X_train, y_P_train)
    y_P_pred = rf_P.predict(X_test)
    mse_P = mean_squared_error(y_P_test, y_P_pred)
    logger.info(f"Phosphorus Model MSE: {mse_P}")

    # Train Random Forest for Potassium prediction
    rf_K = RandomForestRegressor()
    rf_K.fit(X_train, y_K_train)
    y_K_pred = rf_K.predict(X_test)
    mse_K = mean_squared_error(y_K_test, y_K_pred)
    logger.info(f"Potassium Model MSE: {mse_K}")

    # Save the models and scaler
    joblib.dump(rf_P, 'model_phosphorus.pkl')
    joblib.dump(rf_K, 'model_potassium.pkl')
    joblib.dump(scaler, 'scaler.pkl')
    logger.debug("Models and scaler saved successfully.")

    return rf_P, rf_K, scaler



# # Predicting P and K levels
# def predict_P_K(model_P, model_K, scaler, input_features):
#     logger.debug(f"Input features before scaling: {input_features}")
#     input_scaled = scaler.transform([input_features])
#     logger.debug(f"Input features after scaling: {input_scaled}")
#     P_level = model_P.predict(input_scaled)[0]
#     K_level = model_K.predict(input_scaled)[0]
#     logger.debug(f"Predicted P: {P_level}, Predicted K: {K_level}")
#     return P_level, K_level

def predict_P_K(model_P, model_K, scaler, input_features):
    features_to_scale, other_features = input_features
    
    logger.debug(f"Features before scaling: {features_to_scale}")
    input_scaled = scaler.transform([features_to_scale])
    logger.debug(f"Features after scaling: {input_scaled}")

    # Combine scaled and unscaled features
    combined_features = np.concatenate([input_scaled[0], other_features])

    P_level = model_P.predict([combined_features])[0]
    K_level = model_K.predict([combined_features])[0]
    logger.debug(f"Predicted P: {P_level}, Predicted K: {K_level}")
    return P_level, K_level


# Updated function to recommend crops based on P, K, and additional features
def recommend_crop(P_level, K_level, temp=None, humidity=None, ph=None, rainfall=None):
    logger.debug(f"Recommending crop based on P: {P_level}, K: {K_level}, temp: {temp}, humidity: {humidity}, ph: {ph}, rainfall: {rainfall}")
    
    # Prepare the input features in the order expected by the model
    input_features = np.array([[P_level, K_level, temp, humidity, ph, rainfall]])
    
    # Use the trained Decision Tree model to predict the crop
    predicted_crop = decision_tree_model.predict(input_features)[0]
    
    logger.debug(f"Recommended Crop: {predicted_crop}")
    return predicted_crop

# Initialize the model at server start-up
logger.debug("Initializing models and encoders at server start-up...")
soil_types = [
    'Acrisols', 'Albeluvisols', 'Alisols', 'Andosols', 'Anthrosols', 'Arenosols', 
    'Calcisols', 'Cambisols', 'Chernozems', 'Cryosols', 'Durisols', 'Ferralsols', 
    'Fluvisols', 'Gleysols', 'Gypsisols', 'Histosols', 'Kastanozems', 'Leptosols', 
    'Lixisols', 'Luvisols', 'Nitisols', 'Phaeozems', 'Planosols', 'Plinthosols', 
    'Podzols', 'Regosols', 'Solonchaks', 'Solonetz', 'Stagnosols', 'Technosols', 
    'Umbrisols', 'Vertisols'
]

soil_type_encoder = LabelEncoder()
soil_type_encoder.fit(soil_types)
X, y_P, y_K = load_data()
model_P, model_K, scaler = train_model(X, y_P, y_K)
logger.debug("Models initialized successfully.")

# Helper functions to fetch data from the different APIs
def get_historical_ag_weather_data(lat, lon):
    start_date = "2024-08-09"  # Example start date
    end_date = "2024-08-10"    # Example end date
    url = f'https://api.weatherbit.io/v2.0/history/agweather?lat={lat}&lon={lon}&start_date={start_date}&end_date={end_date}&key={settings.WEATHERBIT_API_KEY}'
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        logger.error('Failed to fetch data from Weatherbit API (Historical Ag-Weather)')
        return {}

def get_ag_weather_forecast_data(lat, lon):
    url = f'https://api.weatherbit.io/v2.0/forecast/agweather?lat={lat}&lon={lon}&key={settings.WEATHERBIT_API_KEY}'
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        logger.error('Failed to fetch data from Weatherbit API (Ag-Weather Forecast)')
        return {}

def get_current_air_quality_data(lat, lon):
    url = f'http://api.weatherbit.io/v2.0/current/airquality?lat={lat}&lon={lon}&key={settings.WEATHERBIT_API_KEY}'
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        logger.error('Failed to fetch data from Weatherbit API (Current Air Quality)')
        return {}

def get_soil_data_data(lat, lon):
    depths = ['0-5cm', '5-15cm', '15-30cm', '30-60cm', '60-100cm', '100-200cm']
    properties = ['bdod', 'cec', 'cfvo', 'clay', 'nitrogen', 'ocd', 'ocs', 'phh2o', 'sand', 'silt', 'soc', 'wv0010', 'wv0033', 'wv1500']
    values = ['Q0.5', 'Q0.05', 'Q0.95', 'mean', 'uncertainty']

    params = {
        "lat": lat,
        "lon": lon,
        "depth": depths,
        "property": properties,
        "value": values,
    }

    url = "https://rest.isric.org/soilgrids/v2.0/properties/query"
    response = requests.get(url, params=params)
    if response.status_code == 200:
        return response.json()
    else:
        logger.error('Failed to fetch data from the SoilGrids API')
        return {}

def get_soil_type_data(lat, lon):
    url = "https://api-test.openepi.io/soil/type"
    params = {
        "lat": lat,
        "lon": lon,
        "top_k": 1,
    }
    response = requests.get(url, params=params)
    if (response.status_code == 200):
        return response.json()
    else:
        logger.error('Failed to fetch data from the soil type API')
        return {}

# # Function to extract features from the retrieved data
# def extract_features(historical_data, forecast_data, air_quality_data, soil_data, soil_type_data):
#     # Extract features from Historical Ag-Weather Data
#     historical_features = []
#     if historical_data.get('data'):
#         latest_historical = historical_data['data'][-1]  # Using the latest entry
#         historical_features.extend([
#             latest_historical.get('bulk_soil_density', 0),
#             latest_historical.get('dlwrf_avg', 0),
#             latest_historical.get('dlwrf_max', 0),
#             latest_historical.get('evapotranspiration', 0),
#             latest_historical.get('precip', 0),
#             latest_historical.get('pres_avg', 0),
#                         latest_historical.get('skin_temp_avg', 0),
#             latest_historical.get('soilm_0_10cm', 0),
#             latest_historical.get('soilt_0_10cm', 0),
#             latest_historical.get('temp_2m_avg', 0),
#             latest_historical.get('wind_10m_spd_avg', 0),
#         ])

#     # Extract features from Ag-Weather Forecast Data
#     forecast_features = []
#     if forecast_data.get('data'):
#         latest_forecast = forecast_data['data'][0]  # Using the first entry in forecast
#         forecast_features.extend([
#             latest_forecast.get('bulk_soil_density', 0),
#             latest_forecast.get('dlwrf_avg', 0),
#             latest_forecast.get('dlwrf_max', 0),
#             latest_forecast.get('evapotranspiration', 0),
#             latest_forecast.get('precip', 0),
#             latest_forecast.get('pres_avg', 0),
#             latest_forecast.get('skin_temp_avg', 0),
#             latest_forecast.get('soilm_0_10cm', 0),
#             latest_forecast.get('soilt_0_10cm', 0),
#             latest_forecast.get('temp_2m_avg', 0),
#             latest_forecast.get('wind_10m_spd_avg', 0),
#         ])

#     # Extract features from Current Air Quality Data
#     air_quality_features = []
#     if air_quality_data.get('data'):
#         air_quality_entry = air_quality_data['data'][0]
#         air_quality_features.extend([
#             air_quality_entry.get('aqi', 0),
#             air_quality_entry.get('co', 0),
#             air_quality_entry.get('no2', 0),
#             air_quality_entry.get('o3', 0),
#             air_quality_entry.get('pm10', 0),
#             air_quality_entry.get('pm25', 0),
#             air_quality_entry.get('so2', 0),
#         ])

#     # Extract features from Soil Data (e.g., mean values at each depth)
#     soil_features = []
#     if soil_data.get('layers'):
#         for layer in soil_data['layers']:
#             for depth in layer['depths']:
#                 soil_features.append(depth['values'].get('mean', 0))

#     # Extract features from Soil Type Data
#     soil_type_features = []
#     if soil_type_data.get('properties'):
#         soil_type_features.append(soil_type_data['properties'].get('most_probable_soil_type', 0))
#         for probability in soil_type_data['properties'].get('probabilities', []):
#             soil_type_features.append(probability.get('probability', 0))

#     # Combine all features into a single feature vector
#     combined_features = historical_features + forecast_features + air_quality_features + soil_features + soil_type_features

#     return combined_features
from sklearn.preprocessing import LabelEncoder

# Initialize a label encoder for the soil type
soil_type_encoder = LabelEncoder()

# def extract_features(historical_data, forecast_data, air_quality_data, soil_data, soil_type_data):
#     # Extract features from Historical Ag-Weather Data
#     historical_features = []
#     if historical_data.get('data'):
#         latest_historical = historical_data['data'][-1]  # Using the latest entry
#         historical_features.extend([
#             latest_historical.get('bulk_soil_density', 0),
#             latest_historical.get('dlwrf_avg', 0),
#             latest_historical.get('dlwrf_max', 0),
#             latest_historical.get('evapotranspiration', 0),
#             latest_historical.get('precip', 0),
#             latest_historical.get('pres_avg', 0),
#             latest_historical.get('skin_temp_avg', 0),
#             latest_historical.get('soilm_0_10cm', 0),
#             latest_historical.get('soilt_0_10cm', 0),
#             latest_historical.get('temp_2m_avg', 0),
#             latest_historical.get('wind_10m_spd_avg', 0),
#         ])

#     # Extract features from Ag-Weather Forecast Data
#     forecast_features = []
#     if forecast_data.get('data'):
#         latest_forecast = forecast_data['data'][0]  # Using the first entry in forecast
#         forecast_features.extend([
#             latest_forecast.get('bulk_soil_density', 0),
#             latest_forecast.get('dlwrf_avg', 0),
#             latest_forecast.get('dlwrf_max', 0),
#             latest_forecast.get('evapotranspiration', 0),
#             latest_forecast.get('precip', 0),
#             latest_forecast.get('pres_avg', 0),
#             latest_forecast.get('skin_temp_avg', 0),
#             latest_forecast.get('soilm_0_10cm', 0),
#             latest_forecast.get('soilt_0_10cm', 0),
#             latest_forecast.get('temp_2m_avg', 0),
#             latest_forecast.get('wind_10m_spd_avg', 0),
#         ])

#     # Extract features from Current Air Quality Data
#     air_quality_features = []
#     if air_quality_data.get('data'):
#         air_quality_entry = air_quality_data['data'][0]
#         air_quality_features.extend([
#             air_quality_entry.get('aqi', 0),
#             air_quality_entry.get('co', 0),
#             air_quality_entry.get('no2', 0),
#             air_quality_entry.get('o3', 0),
#             air_quality_entry.get('pm10', 0),
#             air_quality_entry.get('pm25', 0),
#             air_quality_entry.get('so2', 0),
#         ])

#     # Extract features from Soil Data (e.g., mean values at each depth)
#     soil_features = []
#     if soil_data.get('layers'):
#         for layer in soil_data['layers']:
#             for depth in layer['depths']:
#                 soil_features.append(depth['values'].get('mean', 0))

#     # Extract and encode the soil type
#     soil_type_features = []
#     if soil_type_data.get('properties'):
#         soil_type = soil_type_data['properties'].get('most_probable_soil_type', 'unknown')
#         soil_type_encoded = soil_type_encoder.fit_transform([soil_type])[0]  # Encode soil type
#         soil_type_features.append(soil_type_encoded)
#         for probability in soil_type_data['properties'].get('probabilities', []):
#             soil_type_features.append(probability.get('probability', 0))

#     # Combine all features into a single feature vector
#     combined_features = historical_features + forecast_features + air_quality_features + soil_features + soil_type_features

#     return combined_features


# def extract_features(historical_data, forecast_data, air_quality_data, soil_data, soil_type_data):
#     # Extract features from Historical Ag-Weather Data
#     historical_features = []
#     if historical_data.get('data'):
#         latest_historical = historical_data['data'][-1]  # Using the latest entry
#         historical_features.extend([
#             latest_historical.get('bulk_soil_density', 0),
#             latest_historical.get('dlwrf_avg', 0),
#             latest_historical.get('dlwrf_max', 0),
#             latest_historical.get('evapotranspiration', 0),
#             latest_historical.get('precip', 0),
#             latest_historical.get('pres_avg', 0),
#             latest_historical.get('skin_temp_avg', 0),
#             latest_historical.get('soilm_0_10cm', 0),
#             latest_historical.get('soilt_0_10cm', 0),
#             latest_historical.get('temp_2m_avg', 0),
#             latest_historical.get('wind_10m_spd_avg', 0),
#         ])

#     # Extract features from Ag-Weather Forecast Data
#     forecast_features = []
#     if forecast_data.get('data'):
#         latest_forecast = forecast_data['data'][0]  # Using the first entry in forecast
#         forecast_features.extend([
#             latest_forecast.get('bulk_soil_density', 0),
#             latest_forecast.get('dlwrf_avg', 0),
#             latest_forecast.get('dlwrf_max', 0),
#             latest_forecast.get('evapotranspiration', 0),
#             latest_forecast.get('precip', 0),
#             latest_forecast.get('pres_avg', 0),
#             latest_forecast.get('skin_temp_avg', 0),
#             latest_forecast.get('soilm_0_10cm', 0),
#             latest_forecast.get('soilt_0_10cm', 0),
#             latest_forecast.get('temp_2m_avg', 0),
#             latest_forecast.get('wind_10m_spd_avg', 0),
#         ])

#     # Extract features from Current Air Quality Data
#     air_quality_features = []
#     if air_quality_data.get('data'):
#         air_quality_entry = air_quality_data['data'][0]
#         air_quality_features.extend([
#             air_quality_entry.get('aqi', 0),
#             air_quality_entry.get('co', 0),
#             air_quality_entry.get('no2', 0),
#             air_quality_entry.get('o3', 0),
#             air_quality_entry.get('pm10', 0),
#             air_quality_entry.get('pm25', 0),
#             air_quality_entry.get('so2', 0),
#         ])

#     # Extract features from Soil Data (e.g., mean values at each depth)
#     soil_features = []
#     if soil_data.get('layers'):
#         for layer in soil_data['layers']:
#             for depth in layer['depths']:
#                 soil_features.append(depth['values'].get('mean', 0))

#     # Extract and encode the soil type
#     soil_type_features = []
#     if soil_type_data.get('properties'):
#         soil_type = soil_type_data['properties'].get('most_probable_soil_type', 'unknown')
#         soil_type_encoded = soil_type_encoder.transform([soil_type])[0]  # Encode soil type
#         soil_type_features.append(soil_type_encoded)
#         for probability in soil_type_data['properties'].get('probabilities', []):
#             soil_type_features.append(probability.get('probability', 0))

#     # Combine features to be scaled and those that do not need scaling separately
#     features_to_scale = historical_features[:8]  # Assuming first 8 features need scaling
#     other_features = historical_features[8:] + forecast_features + air_quality_features + soil_features + soil_type_features

#     return features_to_scale, other_features

from sklearn.preprocessing import LabelEncoder

# Initialize and fit the LabelEncoder with known soil types during the application startup
soil_types = [
    'Acrisols', 'Albeluvisols', 'Alisols', 'Andosols', 'Anthrosols', 'Arenosols', 
    'Calcisols', 'Cambisols', 'Chernozems', 'Cryosols', 'Durisols', 'Ferralsols', 
    'Fluvisols', 'Gleysols', 'Gypsisols', 'Histosols', 'Kastanozems', 'Leptosols', 
    'Lixisols', 'Luvisols', 'Nitisols', 'Phaeozems', 'Planosols', 'Plinthosols', 
    'Podzols', 'Regosols', 'Solonchaks', 'Solonetz', 'Stagnosols', 'Technosols', 
    'Umbrisols', 'Vertisols'
]

soil_type_encoder = LabelEncoder()
soil_type_encoder.fit(soil_types)

def extract_features(historical_data, forecast_data, air_quality_data, soil_data, soil_type_data):
    # Extract features from Historical Ag-Weather Data
    historical_features = []
    if historical_data.get('data'):
        latest_historical = historical_data['data'][-1]  # Using the latest entry
        historical_features.extend([
            latest_historical.get('bulk_soil_density', 0),
            latest_historical.get('dlwrf_avg', 0),
            latest_historical.get('dlwrf_max', 0),
            latest_historical.get('evapotranspiration', 0),
            latest_historical.get('precip', 0),
            latest_historical.get('pres_avg', 0),
            latest_historical.get('skin_temp_avg', 0),
            latest_historical.get('soilm_0_10cm', 0),
            latest_historical.get('soilt_0_10cm', 0),
            latest_historical.get('temp_2m_avg', 0),
            latest_historical.get('wind_10m_spd_avg', 0),
        ])

    # Extract features from Ag-Weather Forecast Data
    forecast_features = []
    if forecast_data.get('data'):
        latest_forecast = forecast_data['data'][0]  # Using the first entry in forecast
        forecast_features.extend([
            latest_forecast.get('bulk_soil_density', 0),
            latest_forecast.get('dlwrf_avg', 0),
            latest_forecast.get('dlwrf_max', 0),
            latest_forecast.get('evapotranspiration', 0),
            latest_forecast.get('precip', 0),
            latest_forecast.get('pres_avg', 0),
            latest_forecast.get('skin_temp_avg', 0),
            latest_forecast.get('soilm_0_10cm', 0),
            latest_forecast.get('soilt_0_10cm', 0),
            latest_forecast.get('temp_2m_avg', 0),
            latest_forecast.get('wind_10m_spd_avg', 0),
        ])

    # Extract features from Current Air Quality Data
    air_quality_features = []
    if air_quality_data.get('data'):
        air_quality_entry = air_quality_data['data'][0]
        air_quality_features.extend([
            air_quality_entry.get('aqi', 0),
            air_quality_entry.get('co', 0),
            air_quality_entry.get('no2', 0),
            air_quality_entry.get('o3', 0),
            air_quality_entry.get('pm10', 0),
            air_quality_entry.get('pm25', 0),
            air_quality_entry.get('so2', 0),
        ])

    # Extract features from Soil Data (e.g., mean values at each depth)
    soil_features = []
    if soil_data.get('layers'):
        for layer in soil_data['layers']:
            for depth in layer['depths']:
                soil_features.append(depth['values'].get('mean', 0))

    # Encode the soil type feature
    soil_type_features = []
    if soil_type_data.get('properties'):
        soil_type = soil_type_data['properties'].get('most_probable_soil_type', 'unknown')
        # Handle unknown soil types that may not be in the encoder
        if soil_type in soil_types:
            soil_type_encoded = soil_type_encoder.transform([soil_type])[0]
        else:
            soil_type_encoded = -1  # You can choose a value to represent unknown soil types
        soil_type_features.append(soil_type_encoded)
        for probability in soil_type_data['properties'].get('probabilities', []):
            soil_type_features.append(probability.get('probability', 0))

    # Combine features to be scaled and those that do not need scaling separately
    features_to_scale = historical_features[:8]  # Assuming first 8 features need scaling
    other_features = historical_features[8:] + forecast_features + air_quality_features + soil_features + soil_type_features

    return features_to_scale, other_features



# Function to handle the prediction process in a separate thread
def run_prediction(lat, lon, response_data):
    try:
        logger.debug(f"Running prediction for Latitude: {lat}, Longitude: {lon}")

        # Fetch all required data
        historical_data = get_historical_ag_weather_data(lat, lon)
        forecast_data = get_ag_weather_forecast_data(lat, lon)
        air_quality_data = get_current_air_quality_data(lat, lon)
        soil_data = get_soil_data_data(lat, lon)
        soil_type_data = get_soil_type_data(lat, lon)

        # Extract features
        input_features = extract_features(historical_data, forecast_data, air_quality_data, soil_data, soil_type_data)
        logger.debug(f"Extracted features: {input_features}")

        # Predict P and K levels
        P_level, K_level = predict_P_K(model_P, model_K, scaler, input_features)

        logger.debug(f"Predicted P: {P_level}, Predicted K: {K_level}")
        print(f"Predicted P: {P_level}, Predicted K: {K_level}")

        # Extract additional features for crop recommendation
        temp = input_features[9]  # Example index for temperature
        humidity = input_features[10]  # Example index for humidity
        ph = input_features[11]  # Example index for pH
        rainfall = input_features[12]  # Example index for rainfall

        # Recommend crop based on predicted P and K levels and additional features
        recommended_crop = recommend_crop(P_level, K_level, temp, humidity, ph, rainfall)
        logger.debug(f"Recommended Crop: {recommended_crop}")

        response_data['predicted_P'] = P_level
        response_data['predicted_K'] = K_level
        response_data['recommended_crop'] = recommended_crop
    except Exception as e:
        logger.error(f"Error during prediction: {str(e)}")
        response_data['error'] = str(e)

# Django view to handle crop prediction requests
@csrf_exempt
def crop_prediction_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            lat = data.get('latitude')
            lon = data.get('longitude')
            logger.debug(f"Received data: Latitude: {lat}, Longitude: {lon}")

            response_data = {}

            # Run the prediction in a separate thread
            thread = Thread(target=run_prediction, args=(lat, lon, response_data))
            logger.debug("Starting prediction thread...")
            thread.start()
            thread.join()  # Wait for the thread to finish

            logger.debug("Prediction thread finished.")
            return JsonResponse(response_data)
        except json.JSONDecodeError as e:
            logger.error(f"JSON Decode Error: {str(e)}")
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
        except Exception as e:
            logger.error(f"Error in crop_prediction_view: {str(e)}")
            return JsonResponse({'error': str(e)}, status=500)
    else:
        logger.error("Invalid request method. Only POST is allowed.")
        return JsonResponse({'error': 'Invalid request method. Only POST allowed.'}, status=400)

# Your other views
@csrf_exempt
def location_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            lat = data.get('latitude')
            lon = data.get('longitude')

            url = f'https://api.locationiq.com/v1/reverse.php?key={settings.LOCATIONIQ_API_KEY}&lat={lat}&lon={lon}&format=json'
            response = requests.get(url)
            location_data = response.json()

            return JsonResponse({
                'address': location_data.get('display_name'),
                'city': location_data.get('address', {}).get('city'),
                'state': location_data.get('address', {}).get('state'),
                'country': location_data.get('address', {}).get('country'),
                'district': location_data.get('address', {}).get('state_district'),
            })

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Invalid request method. Only POST allowed.'}, status=400)

@csrf_exempt
def autocomplete_view(request):
    if request.method == 'GET':
        query = request.GET.get('q', '')
        if not query:
            return JsonResponse({'error': 'No query provided'}, status=400)
        
        try:
            url = f'https://api.locationiq.com/v1/autocomplete.php?key={settings.LOCATIONIQ_API_KEY}&q={query}&limit=5'
            response = requests.get(url)
            autocomplete_data = response.json()
            return JsonResponse(autocomplete_data, safe=False)
        
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Invalid request method. Only GET allowed.'}, status=400)

def get_historical_ag_weather(request):
    lat = request.GET.get('lat')
    lon = request.GET.get('lon')
    start_date = request.GET.get('start_date')
    end_date = request.GET.get('end_date')

    if not lat or not lon or not start_date or not end_date:
        return JsonResponse({'error': 'Latitude, longitude, start date, and end date are required'}, status=400)
    
    url = f'https://api.weatherbit.io/v2.0/history/agweather?lat={lat}&lon={lon}&start_date={start_date}&end_date={end_date}&key={settings.WEATHERBIT_API_KEY}'
    response = requests.get(url)
    
    if response.status_code == 200:
        return JsonResponse(response.json())
    else:
        return JsonResponse({'error': 'Failed to fetch data from Weatherbit API'}, status=500)

def get_ag_weather_forecast(request):
    lat = request.GET.get('lat')
    lon = request.GET.get('lon')

    if not lat or not lon:
        return JsonResponse({'error': 'Latitude and longitude are required'}, status=400)
    
    url = f'https://api.weatherbit.io/v2.0/forecast/agweather?lat={lat}&lon={lon}&key={settings.WEATHERBIT_API_KEY}'
    response = requests.get(url)
    
    if response.status_code == 200:
        return JsonResponse(response.json())
    else:
        return JsonResponse({'error': 'Failed to fetch data from Weatherbit API'}, status=500)

def get_current_air_quality(request):
    lat = request.GET.get('lat')
    lon = request.GET.get('lon')
    if not lat or not lon:
                return JsonResponse({'error': 'Latitude and longitude are required'}, status=400)
    
    url = f'http://api.weatherbit.io/v2.0/current/airquality?lat={lat}&lon={lon}&key={settings.WEATHERBIT_API_KEY}'
    response = requests.get(url)
    
    if response.status_code == 200:
        return JsonResponse(response.json())
    else:
        return JsonResponse({'error': 'Failed to fetch data from Weatherbit API'}, status=500)

def get_soil_data(request):
    lat = request.GET.get('lat')
    lon = request.GET.get('lon')
    depths = request.GET.getlist('depth')
    properties = request.GET.getlist('property')
    values = request.GET.getlist('value')

    if not lat or not lon:
        return JsonResponse({'error': 'Latitude and longitude are required.'}, status=400)

    params = {
        "lat": lat,
        "lon": lon,
        "depth": depths,
        "property": properties,
        "value": values,
    }

    url = "https://rest.isric.org/soilgrids/v2.0/properties/query"
    response = requests.get(url, params=params)

    if response.status_code != 200:
        return JsonResponse({'error': 'Failed to fetch data from the SoilGrids API.'}, status=response.status_code)

    data = response.json()

    # Extracting soil properties
    soil_layers = []
    for layer in data["properties"]["layers"]:
        layer_data = {
            "name": layer["name"],
            "unit": layer["unit_measure"]["mapped_units"],
            "depths": []
        }
        for depth in layer["depths"]:
            depth_data = {
                "depth": depth["label"],
                "values": depth["values"]
            }
            layer_data["depths"].append(depth_data)
        soil_layers.append(layer_data)

    return JsonResponse({"layers": soil_layers})

@csrf_exempt
def get_soil_type(request):
    lat = request.GET.get('lat')
    lon = request.GET.get('lon')
    top_k = request.GET.get('top_k', 1)  # Default to 1 if top_k is not provided

    if not lat or not lon:
        return JsonResponse({'error': 'Latitude and longitude are required.'}, status=400)

    params = {
        "lat": lat,
        "lon": lon,
        "top_k": top_k,
    }

    try:
        response = requests.get(url="https://api-test.openepi.io/soil/type", params=params)
        if response.status_code != 200:
            return JsonResponse({'error': 'Failed to fetch data from the soil type API.'}, status=response.status_code)

        data = response.json()
        return JsonResponse(data)

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

