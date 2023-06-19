namespace backend.Services
{
    public interface ISBOMService
    {
        Task<List<string>> GetAllDocuments();
        Task<List<string>> GetDocumentById(string id);
        Task<List<string[]>> DependencySearch(string dependencyName, string minVersion, string maxVersion);
    }
}