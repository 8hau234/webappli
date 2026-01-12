import os

root = r"c:\Users\Lenovo\Downloads\store-oversized-nextjs-tailwind\store-oversized"
public_dir = os.path.join(root, "public")
birken_dir = os.path.join(public_dir, "birkenstock")
crocs_dir = os.path.join(public_dir, "crocs")

# Get mapping
mapping = {} # filename -> new_relative_path

if os.path.exists(birken_dir):
    for f in os.listdir(birken_dir):
        if not os.path.isdir(os.path.join(birken_dir, f)):
             mapping[f] = "/birkenstock/" + f

if os.path.exists(crocs_dir):
    for f in os.listdir(crocs_dir):
        if not os.path.isdir(os.path.join(crocs_dir, f)):
            mapping[f] = "/crocs/" + f

# Targets
targets = [
    os.path.join(root, "app", "data.ts"),
    os.path.join(root, "app", "page.tsx"),
    os.path.join(root, "app", "authenticity", "page.tsx")
]

for t in targets:
    if not os.path.exists(t):
        print(f"File not found: {t}")
        continue
    
    with open(t, "r", encoding="utf-8") as f:
        content = f.read()
    
    new_content = content
    # Sort mapping by length desc to avoid substring issues (e.g. replacing 'foo.jpg' in 'foo.jpg.bak' incorrectly, though unlikely with these filenames)
    sorted_keys = sorted(mapping.keys(), key=len, reverse=True)
    
    for fname in sorted_keys:
        new_path = mapping[fname]
        # Replace "/fname"
        if f'"/{fname}"' in new_content:
            new_content = new_content.replace(f'"/{fname}"', f'"/{new_path.strip("/")}"')
        
        # Replace '/fname'
        if f"'/{fname}'" in new_content:
             new_content = new_content.replace(f"'/{fname}'", f"'/{new_path.strip("/")}'")
             
    if new_content != content:
        with open(t, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Updated {t}")
    else:
        print(f"No changes for {t}")
