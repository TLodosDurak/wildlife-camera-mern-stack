import streamlit as st
import os
from PIL import Image
import subprocess
import shutil

# Set page config to use wide mode
st.set_page_config(layout="wide")

# Set the title of the app
st.title('Wildlife Media Gallery')


# Base directory for images and videos
base_dir = os.path.dirname(__file__)

def delete_file(file_path):
    """Delete the specified file from the filesystem."""
    if os.path.exists(file_path):
        os.remove(file_path)

def empty_directory(directory):
    """Empty all files in the specified directory."""
    for filename in os.listdir(directory):
        file_path = os.path.join(directory, filename)
        try:
            if os.path.isfile(file_path) or os.path.islink(file_path):
                os.unlink(file_path)
            elif os.path.isdir(file_path):
                shutil.rmtree(file_path)
        except Exception as e:
            print(f'Failed to delete {file_path}. Reason: {e}')

images_dir = os.path.join(base_dir, 'images')
all_images = os.listdir(images_dir)
videos_dir = os.path.join(base_dir, 'videos')
all_videos = os.listdir(videos_dir)

# Add "Empty All" button
if st.button('Empty All'):
    empty_directory(images_dir)
    empty_directory(videos_dir)
    st.experimental_rerun()

# Display images in rows of 3
st.header('Images')

for i in range(0, len(all_images), 3):
    cols = st.columns(3)
    for idx, col in enumerate(cols):
        if i + idx < len(all_images):
            image_path = os.path.join(images_dir, all_images[i + idx])
            image = Image.open(image_path)
            col.image(image, caption=all_images[i + idx])
            if col.button(f"Delete {all_images[i + idx]}", key=f"delete_img_{i+idx}"):
                delete_file(image_path)
                st.experimental_rerun()

# Convert and display videos in rows of 2
st.header('Videos')
for i in range(0, len(all_videos), 2):
    cols = st.columns(2)
    for idx, col in enumerate(cols):
        if i + idx < len(all_videos):
            video_file = all_videos[i + idx]
            video_path = os.path.join(videos_dir, video_file)
            # Convert H264 to MP4
            mp4_video_path = video_path.replace('.h264', '.mp4')
            if not os.path.exists(mp4_video_path):  # Convert only if MP4 doesn't exist
                subprocess.run(['ffmpeg', '-i', video_path, '-c:v', 'copy', '-c:a', 'copy', mp4_video_path])
            col.video(mp4_video_path)
            if col.button(f"Delete {video_file}", key=f"delete_vid_{i+idx}"):
                delete_file(mp4_video_path)
                if video_path != mp4_video_path:
                    delete_file(video_path)
                st.experimental_rerun()

