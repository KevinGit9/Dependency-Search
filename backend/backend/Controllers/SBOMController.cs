using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SBOMController : ControllerBase
    {
        private readonly ISBOMService _sbomService;

        public SBOMController(ISBOMService sbomService)
        {
            _sbomService = sbomService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllDocuments()
        {
            var documents = await _sbomService.GetAllDocuments();
            if (documents == null || documents.Count == 0)
                return NotFound();

            return Ok(documents);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetDocumentById(string id)
        {
            var documents = await _sbomService.GetDocumentById(id);
            if (documents == null || documents.Count == 0)
                return NotFound();

            return Ok(documents);
        }

        [HttpGet("{dependencyName}/{minVersion}/{maxVersion}")]
        public async Task<IActionResult> DependencySearch(string dependencyName, string minVersion, string maxVersion) {
            var documents = await _sbomService.DependencySearch(dependencyName, minVersion, maxVersion);
            if (documents == null || documents.Count == 0)
                return NotFound();

            return Ok(documents);
        }
    }
}