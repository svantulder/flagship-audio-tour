import csv
from docx import Document

# Map the filenames to the language codes used in your app
file_map = {
    "en": "EN - Audio guide stories FBT 2026.docx",
    "fr": "FR - Audio guide stories FBT 2026.docx",
    "it": "IT - Audio guide stories FBT 2026.docx",
    "de": "DE - Audio guide stories FBT 2026.docx",
    "es": "ESP - Audio guide stories FBT 2026.docx",
    "zh-CN": "CN (mandarin) - Audio guide stories FBT 2026.docx",
    "zh-HK": "CN (cantonese) - Audio guide stories FBT 2026.docx"
}

# The required English UI titles
stop_metadata = [
    {"id": "intro", "title": "Welcome", "subtitle": "Introduction & Safety"},
    {"id": "voc", "title": "History VOC", "subtitle": "The Golden Age"},
    {"id": "canals", "title": "Canals", "subtitle": "The City's Lifeblood"},
    {"id": "houseboats", "title": "Houseboats", "subtitle": "Living on the Water"},
    {"id": "dancing", "title": "Dancing Houses", "subtitle": "A Marshy Foundation"},
    {"id": "anne-frank", "title": "Anne Frank House", "subtitle": "A Story of Hope"},
    {"id": "jordaan", "title": "Jordaan", "subtitle": "A Vibrant Neighborhood"},
    {"id": "westerkerk", "title": "Westerkerk", "subtitle": "The Highest Tower"},
    {"id": "leidseplein", "title": "Leidse Square", "subtitle": "Nightlife & History"},
    {"id": "vondelpark", "title": "Vondelpark", "subtitle": "Amsterdam's Backyard"},
    {"id": "museumplein", "title": "Museum Square", "subtitle": "A Cultural Hub"},
    {"id": "dam-square", "title": "Dam Square", "subtitle": "The Heart of the City"},
    {"id": "bicycles", "title": "Bicycles", "subtitle": "The Bicycle Capital"},
    {"id": "three-crosses", "title": "Amsterdam’s Three Crosses", "subtitle": "City Identity"}
]

base_audio_url = "https://yevfkqblgovvnmueoufw.supabase.co/storage/v1/object/public/tour-audio/{stop_id}_{lang}.mp3"
csv_data = []

for lang, filename in file_map.items():
    try:
        doc = Document(filename)
        # Extract meaningful blocks of text by ignoring empty lines and separators
        all_text = [p.text.strip() for p in doc.paragraphs if p.text.strip() and "---" not in p.text]
        
        # We expect 14 distinct stories (one per stop)
        # If your documents have extra header text, you may need to slice all_text[x:]
        for i, stop in enumerate(stop_metadata):
            if i < len(all_text):
                # Ensure we aren't inserting a blank row
                script_text = all_text[i]
                audio_url = base_audio_url.format(stop_id=stop["id"], lang=lang.upper())
                
                csv_data.append([
                    stop["id"], lang, stop["title"], stop["subtitle"], script_text, audio_url
                ])
            else:
                print(f"Warning: {filename} is missing data for stop index {i}")
                
    except Exception as e:
        print(f"Error processing {filename}: {e}")

# Save the file
with open("stop_translations_import.csv", "w", newline='', encoding="utf-8") as f:
    writer = csv.writer(f, quoting=csv.QUOTE_ALL)
    writer.writerow(["stop_id", "lang", "title", "subtitle", "script_text", "audio_url"])
    writer.writerows(csv_data)

print("stop_translations_import.csv generated. Please verify the content before importing.")