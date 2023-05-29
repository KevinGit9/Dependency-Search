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
            return Ok(documents);
        }
    }
}