using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace backend
{
    public class SBOMService : ISBOMService
    {
        private readonly IMongoCollection<SBOM> _collection;

        public SBOMService()
        {
            var client = new MongoClient(Database.GetConnectionString());
            var database = client.GetDatabase(Database.GetDatabaseName());
            _collection = database.GetCollection<SBOM>(Database.GetCollectionName());
        }

        public async Task<List<SBOM>> GetAllDocuments()
        {
            var documents = await _collection.Find(_ => true).ToListAsync();
            return documents;
        }
    }
}