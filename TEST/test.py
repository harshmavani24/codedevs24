import requests

# Your Mapbox API key
mapbox_api_key = "pk.eyJ1IjoiaGFyc2htYXZhbmkyNCIsImEiOiJjbGo2MDNuZWEwZGV0M3FwMjJjZmVvbXh6In0.UBIQos094snVs9F4-aeUXg"

def geocode(address):
    # URL for the Mapbox Geocoding API
    url = f"https://api.mapbox.com/geocoding/v5/mapbox.places/{address}.json"
    
    # Parameters including the API key
    params = {
        'access_token': mapbox_api_key,
        'limit': 1  # Limit to one result
    }
    
    # Sending the GET request to the API
    response = requests.get(url, params=params)
    
    # If the request was successful, parse the JSON response
    if response.status_code == 200:
        data = response.json()
        if data['features']:
            place = data['features'][0]
            place_name = place['place_name']
            longitude, latitude = place['geometry']['coordinates']
            return {
                'place_name': place_name,
                'latitude': latitude,
                'longitude': longitude
            }
        else:
            return {"error": "No results found"}
    else:
        return {"error": "Request failed"}

# Example usage
address = "Sardardham, Ahmedabad, Gujarat, India"
location_data = geocode(address)

if 'error' not in location_data:
    print(f"Place Name: {location_data['place_name']}")
    print(f"Latitude: {location_data['latitude']}")
    print(f"Longitude: {location_data['longitude']}")
    print(f"Map URL: https://google.com/maps/place/{location_data['latitude']},{location_data['longitude']}")
else:
    print(f"Error: {location_data['error']}")
