import subprocess
import docker
import os

client = docker.from_env()
images = client.images.list("")
sbom_id = 0

# Create the directory if it doesn't exist
directory = os.path.abspath(os.getcwd()) #os.path.expanduser("~/Documents/SBOM")\
final_directory = os.path.join(directory, r'SBOM')
print(final_directory)
if not os.path.exists(final_directory):
    os.mkdir(final_directory)

for image in images:
    # File location
    file_name = f"{image.tags[0].split(':')[1]}_SBOM_{sbom_id}.json"
    file_path = os.path.join(final_directory, file_name)

    # Command to run
    command = ["syft", "-o", "cyclonedx-json", "--file", file_path, image.tags[0]]
    print(image.tags[0])

    # Run the command
    process = subprocess.Popen(command)
    process.wait()

    # Check if the command executed successfully
    if process.returncode == 0:
        print(f"Succesfully created SBOM: {file_name}")
    else:
        print(f"Error SBOM: {file_name} not created")

    sbom_id = sbom_id + 1