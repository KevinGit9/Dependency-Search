# Dependency Search

Summary of web application
1. Search for Dependencies
Simply enter the name and version of the dependency you're interested in.

2. Find Relevant SBOMs
Our tool will fetch all the SBOMs that contain the dependency you searched for from the database.

3. Export the Data
Export the list of projects containing the specified dependency. Gain insights, track dependencies, and make informed decisions when managing and maintaining your software projects.


Preparations
You need to setup a local MongoDB before you can use this project



# How does it work?

1. Pull Docker Containers
Start by pulling the Docker containers you want to be able to search dependencies on. (note that this tool will create sboms for *ALL* your local docker containers)

2. Run the script SBOM-Generator
First run the script SBOM-Generator to generate sboms from all your local docker containers.

3. Run the script Upload-SBOM
This will upload the generated sboms to your local MongoDB.

4. dotnet run the backend folder
```
dotnet run
```
This will start the backend.

5. npm start the frontend folder
This will start the frontend and open a tab on your webbrowser with the web application.

6. Go to search in the web application
This will bring you to the page where you can search for dependencies

7. Search the dependency name and version
Give the dependency name and version with one of these options range, from, to, specific

8. See results
You will now get the results of your search prompt. 







