import os
import json
from pymongo import MongoClient

folder_path = os.path.expanduser("~\Documents\SBOM")

def get_json_files_from_folder(folder_path):
    json_files = []
    for file_name in os.listdir(folder_path):
        print(file_name)
        if file_name.endswith('.json'):
            file_path = os.path.join(folder_path, file_name)
            json_files.append(file_path)
    return json_files

file_paths = get_json_files_from_folder(folder_path)
print(file_paths)


# Connect to the local MongoDB server
client = MongoClient('localhost', 27017)

# Access the target database
db = client['Project_D']

# Access the target collection
collection = db['Files']

for filepath in file_paths:
    # Read the SBOM
    with open(filepath, 'r') as file:
        json_data = json.load(file)

    # Insert SBOM into the collection
    result = collection.insert_one(json_data)

    # Print the inserted document ID
    print('Inserted document ID:', result.inserted_id)

# Close the MongoDB connection
client.close()

removefilelist = [ f for f in os.listdir(folder_path) if f.endswith(".json") ]
for f in removefilelist:
    os.remove(os.path.join(folder_path, f))