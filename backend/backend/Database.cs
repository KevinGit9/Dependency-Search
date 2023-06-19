namespace backend
{
    public class Database
    {
        public static string GetConnectionString()
        {
            string connectionString = "mongodb://localhost:27017";

            return connectionString;
        }

        public static string GetDatabaseName()
        {
            string databaseName = "Project_D";

            return databaseName;
        }

        public static string GetCollectionName()
        {
            string collectionName = "Files";

            return collectionName;
        }
    }
}