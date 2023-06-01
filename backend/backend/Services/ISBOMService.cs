using MongoDB.Bson;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace backend
{
    public interface ISBOMService
    {
        Task<List<string>> GetAllDocuments();
        Task<List<string>> GetDocumentById(string id);
        Task<List<string[]>> DependencySearch(string dependencyName, string minVersion, string maxVersion);
    }
}