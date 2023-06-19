using MongoDB.Bson;
using MongoDB.Driver;

namespace backend.Services
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
                Builders<BsonDocument>.Filter.Eq("components.name", dependencyName)
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
                    
                    if (component.Contains("version") && component.Contains("purl")) 
                    {
                        string componentVersion = component["version"].AsString;
                        string componentPurl = component["purl"].AsString;

                        if (componentName == dependencyName && string.Compare(componentVersion, minVersion) >= 0 && string.Compare(componentVersion, maxVersion) <= 0)
                        {
                            string[] data = {projectName, componentName, componentVersion, componentPurl};
                            dataList.Add(data);
                        }

                        else if (componentName == dependencyName && string.Compare(componentVersion, minVersion) >= 0 && maxVersion == "-")
                        {
                            string[] data = {projectName, componentName, componentVersion, componentPurl};
                            dataList.Add(data);
                        }

                        else if (componentName == dependencyName && string.Compare(componentVersion, maxVersion) <= 0 && minVersion == "-")
                        {
                            string[] data = {projectName, componentName, componentVersion, componentPurl};
                            dataList.Add(data);
                        }
                    }

                    else if (component.Contains("version")) 
                    {
                        string componentVersion = component["version"].AsString;

                        if (componentName == dependencyName && string.Compare(componentVersion, minVersion) >= 0 && string.Compare(componentVersion, maxVersion) <= 0)
                        {
                            string[] data = {projectName, componentName, componentVersion};
                            dataList.Add(data);
                        }

                        else if (componentName == dependencyName && string.Compare(componentVersion, minVersion) >= 0 && maxVersion == "-")
                        {
                            string[] data = {projectName, componentName, componentVersion};
                            dataList.Add(data);
                        }

                        else if (componentName == dependencyName && string.Compare(componentVersion, maxVersion) <= 0 && minVersion == "-")
                        {
                            string[] data = {projectName, componentName, componentVersion};
                            dataList.Add(data);
                        }
                    }                    

                    else if (component.Contains("purl")) 
                    {
                        string componentPurl = component["purl"].AsString;

                        if (componentName == dependencyName)
                        {
                            string[] data = {projectName, componentName, componentPurl};
                            dataList.Add(data);
                        }

                        else if (componentName == dependencyName)
                        {
                            string[] data = {projectName, componentName, componentPurl};
                            dataList.Add(data);
                        }

                        else if (componentName == dependencyName)
                        {
                            string[] data = {projectName, componentName, componentPurl};
                            dataList.Add(data);
                        }
                    }

                    else 
                    {
                        if (componentName == dependencyName)
                        {
                            string[] data = {projectName, componentName};
                            dataList.Add(data);
                        }

                        else if (componentName == dependencyName)
                        {
                            string[] data = {projectName, componentName};
                            dataList.Add(data);
                        }

                        else if (componentName == dependencyName)
                        {
                            string[] data = {projectName, componentName};
                            dataList.Add(data);
                        }
                    }
                }
            }

            return dataList;
        }
    }
}