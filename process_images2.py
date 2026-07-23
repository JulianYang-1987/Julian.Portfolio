#!/usr/bin/env python3
"""Process podcast logo, new XYZ QR, and Movieview magazine scans (jpg + pdf->img)."""
import os
from PIL import Image, ImageOps
import fitz  # PyMuPDF

SRC = "/home/user/workspace/uploaded_attachments/7c0f4e2d3a954fa787c6fff935c26823"
ASSETS = "/home/user/workspace/portfolio/assets"
MAG = os.path.join(ASSETS, "magazine")
os.makedirs(MAG, exist_ok=True)

def save_jpg(img, path, quality=86):
    img = img.convert("RGB")
    img.save(path, "JPEG", quality=quality, optimize=True)
    print(f"saved {path} {img.size}")

# 1. Podcast logo (square cover art) -> assets/podcast-cover.jpg
logo = Image.open(os.path.join(SRC, "8a46594199a8d8c41721a43f01c5935.jpg"))
logo = ImageOps.exif_transpose(logo)
# it's already square-ish; center-crop to square then resize to 800
w, h = logo.size
s = min(w, h)
logo = logo.crop(((w-s)//2, (h-s)//2, (w-s)//2+s, (h-s)//2+s)).resize((800, 800), Image.LANCZOS)
save_jpg(logo, os.path.join(ASSETS, "podcast-cover.jpg"), 88)

# 2. New XYZ QR (clean) -> overwrite qr-xyz.jpg, square on white padding
qr = Image.open(os.path.join(SRC, "podcast-qrcode-2.jpg")).convert("RGB")
qr = ImageOps.exif_transpose(qr)
w, h = qr.size
s = max(w, h)
canvas = Image.new("RGB", (s, s), "white")
canvas.paste(qr, ((s-w)//2, (s-h)//2))
canvas = canvas.resize((600, 600), Image.LANCZOS)
save_jpg(canvas, os.path.join(ASSETS, "qr-xyz.jpg"), 90)

# 3. Magazine scans. Map source -> output slug
# jpg sources (already page images)
jpg_map = {
    "2026.1-Du-Shi-Ta-De-Cuo-4.jpg": "mv-2026-01-all-her-fault.jpg",
    "2025.12-Te-Bie-Xiao-Zu-5.jpg": "mv-2025-12-task.jpg",
    "2025.11-Guai-Wu-Ai-De-Gai-En-6.jpg": "mv-2025-11-monster.jpg",
    "2025.9-Xing-Qi-San-7.jpg": "mv-2025-10-wednesday.jpg",       # note: filename says 9 but content is Wednesday S2 issue10 - keep by user labeling below
    "2025.8-Wei-Zhi-De-Shou-Er-8.jpg": "mv-2025-09-our-unwritten-seoul.jpg",
    "2025.7-Wo-Men-Yu-E-De-Ju-Chi-2-9.jpg": "mv-2025-08-world-between-us.jpg",
}
for src, out in jpg_map.items():
    im = Image.open(os.path.join(SRC, src))
    im = ImageOps.exif_transpose(im)
    # resize so max dimension <= 1400 for web
    im.thumbnail((1400, 1400), Image.LANCZOS)
    save_jpg(im, os.path.join(MAG, out), 82)

# pdf sources -> render page 1 at good DPI
pdf_map = {
    "2025.6-An-Duo-10.pdf": "mv-2025-07-andor.jpg",
    "2025.5-Hei-Jing-7-10.pdf": "mv-2025-06-black-mirror.jpg",
    "2025.4-Re-Dian-11.pdf": "mv-2025-05-the-hot-spot.jpg",
}
for src, out in pdf_map.items():
    doc = fitz.open(os.path.join(SRC, src))
    page = doc[0]
    pix = page.get_pixmap(matrix=fitz.Matrix(2.2, 2.2))
    im = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
    im.thumbnail((1400, 1400), Image.LANCZOS)
    save_jpg(im, os.path.join(MAG, out), 82)
    doc.close()

print("DONE")
print(sorted(os.listdir(MAG)))
