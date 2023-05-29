using MongoDB.Bson;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace backend
{
    public interface ISBOMService
    {
        Task<List<SBOM>> GetAllDocuments();
    }
}