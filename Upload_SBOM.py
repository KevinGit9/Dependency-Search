import json
from pymongo import MongoClient

# Connect to the local MongoDB server
client = MongoClient('localhost', 27017)

# Access the target database
db = client['your_database_name']

# Access the target collection
collection = db['your_collection_name']

# Read the JSON file
with open('your_json_file.json', 'r') as file:
    json_data = json.load(file)

# Insert the JSON data into the collection
result = collection.insert_one(json_data)

# Print the inserted document ID
print('Inserted document ID:', result.inserted_id)

# Close the MongoDB connection
client.close()