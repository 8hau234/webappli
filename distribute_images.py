import os
import shutil
import json
import math

# Configuration
SOURCE_DIRS = {
    'crocs': 'crocs_assets',
    'birkenstock': 'general_assets'
}

DEST_DIRS = {
    'crocs': ['public/crocs_batch_1', 'public/crocs_batch_2', 'public/crocs_batch_3'],
    'birkenstock': ['public/birkenstock_batch_1', 'public/birkenstock_batch_2', 'public/birkenstock_batch_3']
}

# Image extensions to move
EXTENSIONS = ('.jpg', '.jpeg', '.png', '.webp', '.svg')

mapping = {}

def distribute(category):
    source = SOURCE_DIRS[category]
    dests = DEST_DIRS[category]
    
    if not os.path.exists(source):
        print(f"Source {source} not found")
        return

    files = [f for f in os.listdir(source) if f.lower().endswith(EXTENSIONS)]
    files.sort() # Ensure deterministic order
    
    num_files = len(files)
    num_dests = len(dests)
    
    print(f"Distributing {num_files} files from {source} to {dests}")

    for i, file in enumerate(files):
        dest_dir = dests[i % num_dests]
        src_path = os.path.join(source, file)
        dest_path = os.path.join(dest_dir, file)
        
        # Move file
        shutil.move(src_path, dest_path)
        
        # Store public path (relative to web root)
        # dest_dir is like "public/crocs_batch_1", so web path is "/crocs_batch_1"
        web_path = "/" + os.path.relpath(dest_path, "public").replace("\\", "/")
        mapping[file] = web_path

distribute('crocs')
distribute('birkenstock')

# Output mapping
with open('image_mapping.json', 'w') as f:
    json.dump(mapping, f, indent=2)

print("Distribution complete. Mapping saved to image_mapping.json")
