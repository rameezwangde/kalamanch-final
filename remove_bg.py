from PIL import Image

def remove_black_background(image_path, output_path):
    img = Image.open(image_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    # Loop over every pixel
    for item in datas:
        # If the pixel is very dark (close to black), make it transparent
        # We use a threshold, e.g., R < 25, G < 25, B < 25
        if item[0] < 25 and item[1] < 25 and item[2] < 25:
            # Check if we should keep the black ring of the logo itself?
            # Actually, the logo has a black ring. If we just remove all black, the ring will disappear!
            # It's better to do a flood fill from the corners.
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")

def remove_black_floodfill(image_path, output_path):
    from PIL import ImageDraw
    img = Image.open(image_path).convert("RGBA")
    
    # We will do a flood fill from the top-left corner (0,0)
    # PIL's ImageDraw.floodfill doesn't work on RGBA to change alpha directly easily,
    # so we'll just use a simple BFS.
    
    width, height = img.size
    pixels = img.load()
    
    # Start BFS from corners
    visited = set()
    queue = [(0,0), (width-1, 0), (0, height-1), (width-1, height-1)]
    
    for (x, y) in queue:
        visited.add((x,y))
        
    while queue:
        x, y = queue.pop(0)
        r, g, b, a = pixels[x, y]
        
        # If it's a very dark pixel, make it transparent and add neighbors
        if r < 15 and g < 15 and b < 15:
            pixels[x, y] = (0, 0, 0, 0)
            
            for nx, ny in [(x-1, y), (x+1, y), (x, y-1), (x, y+1)]:
                if 0 <= nx < width and 0 <= ny < height:
                    if (nx, ny) not in visited:
                        visited.add((nx, ny))
                        queue.append((nx, ny))
                        
    img.save(output_path, "PNG")
    print(f"Saved {output_path}")

if __name__ == "__main__":
    remove_black_floodfill("Screenshot_2026-07-27_at_11.52.46_PM_k1u4kw.png", "public/feature-image-nobg.png")
