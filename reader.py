import os

def scan_directory(directory):
    image_extensions = ['.jpg', '.jpeg', '.png', '.gif']  # Add more extensions if needed
    image_files = []
    
    for root, _, files in os.walk(directory):
        for file in files:
            if any(file.lower().endswith(ext) for ext in image_extensions):
                image_files.append(file)
    
    return image_files

def write_to_file(file_path, data):
    with open(file_path, 'w') as file:
        file.write("const images = [")
        for item in data:
            file.write('"' + item + '",')
        file.write("]\n")

# Directory to scan
directory_path = './images'
image_files = scan_directory(directory_path)

# Write the image file names to a new file
output_file_path = 'images.js'
write_to_file(output_file_path, image_files)