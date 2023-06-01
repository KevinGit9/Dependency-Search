import subprocess
import docker
import os

client = docker.from_env()
images = client.images.list("")

# Create the directory if it doesn't exist
directory = os.path.expanduser("~/Documents/SBOM")
if not os.path.exists(directory):
    os.mkdir(directory)

for image in images:
    # File location
    file_name = f"{image.tags[0].split(':')[1]}_SBOM.json"
    file_path = os.path.join(directory, file_name)

    # Command to run
    command = ["syft", "-o", "cyclonedx-json", "--file", file_path, image.tags[1]]

    # Run the command
    process = subprocess.Popen(command)
    process.wait()

    # Check if the command executed successfully
    if process.returncode == 0:
        print(f"Succesfully created SBOM: {file_name}")
    else:
        print(f"Error SBOM: {file_name} not created")