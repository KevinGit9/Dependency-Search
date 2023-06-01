using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace backend
{
    public class SBOMService : ISBOMService
    {
        private readonly IMongoCollection<BsonDocument> _collection;

        public SBOMService()
        {
            var client = new MongoClient(Database.GetConnectionString());
            var database = client.GetDatabase(Database.GetDatabaseName());
            _collection = database.GetCollection<BsonDocument>(Database.GetCollectionName());
        }

        public async Task<List<string>> GetAllDocuments()
        {
            FilterDefinition<BsonDocument> filter = Builders<BsonDocument>.Filter.Empty; 
            List<BsonDocument> documents = await _collection.Find(filter).ToListAsync();

            List<string> documentList = new List<string>();
            foreach (BsonDocument document in documents)
            {
                string jsonDocument = document.ToJson();
                documentList.Add(jsonDocument);
            }

            return documentList;
        }   

        public async Task<List<string>> GetDocumentById(string id)
        {
            FilterDefinition<BsonDocument> filter = Builders<BsonDocument>.Filter.Eq("_id", ObjectId.Parse(id));
            List<BsonDocument> documents = await _collection.Find(filter).ToListAsync();

            List<string> documentList = new List<string>();
            foreach (BsonDocument document in documents)
            {
                string jsonDocument = document.ToJson();
                documentList.Add(jsonDocument);
            }

            return documentList;
        }

        public async Task<List<string[]>> DependencySearch(string dependencyName, string minVersion, string maxVersion)
        {
            FilterDefinition<BsonDocument> filter = Builders<BsonDocument>.Filter.And(
                Builders<BsonDocument>.Filter.Eq("components.name", dependencyName),
                Builders<BsonDocument>.Filter.Gte("components.version", minVersion),
                Builders<BsonDocument>.Filter.Lte("components.version", maxVersion)
            );

            List<BsonDocument> documents = await _collection.Find(filter).ToListAsync();

            List<string[]> dataList = new List<string[]>();
            
            foreach (BsonDocument document in documents)
            {
                string projectName = document["metadata"]["component"]["name"].AsString;

                BsonArray components = document["components"].AsBsonArray;
                foreach (BsonDocument component in components)
                {
                    string componentName = component["name"].AsString;
                    string componentVersion = component["version"].AsString;
                    
                    if (componentName == dependencyName && string.Compare(componentVersion, minVersion) >= 0 && string.Compare(componentVersion, maxVersion) <= 0)
                    {
                        string[] data = {projectName, componentName, componentVersion};
                        dataList.Add(data);
                    }
                }
            }

            return dataList;
        }
    }
}