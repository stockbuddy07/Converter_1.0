// === 🧠 FILTER BUTTONS FOR CATEGORIES ===
const filters = [
  'All Tools',
  'Pdf Tools',
  'Video Tools',
  'Image Tools',
  'Converter Tools',
  'Other Tools',
  'AI Write',
]

// === 🛠️ TOOL DATA GROUPED BY CATEGORY ===
const toolData = {
  'Pdf Tools': [
    { title: 'Merge PDF', desc: 'Merge 2 or more PDF files into a single PDF file', icon: '📎' },
    { title: 'Edit PDF', desc: 'Free PDF Editor', icon: '✏️' },
    { title: 'PDF to JPG', desc: 'Convert PDF to JPG and download each page as an image', icon: '🖼️' },
    { title: 'JPG to PDF', desc: 'Upload images and receive as a PDF', icon: '📄' },
    { title: 'Compress PDF', desc: 'Lessen the file size of a PDF file', icon: '🗜️' },
    { title: 'Split PDF', desc: 'Split into one or multiple PDF files', icon: '✂️' },
    { title: 'PDF to Word', desc: 'Convert a PDF to Word Document', icon: '📝' },
    { title: 'Word to PDF', desc: 'Convert a Word Document to PDF', icon: '📄' },
    { title: 'Unlock PDF', desc: 'Remove the password from a PDF file', icon: '🔓' },
    { title: 'PDF to Excel', desc: 'Convert from PDF to XLSX', icon: '📊' },
    { title: 'PDF to PowerPoint', desc: 'Upload PDF and download as PowerPoint', icon: '📽️' },
    { title: 'PNG to PDF', desc: 'Upload PNGs and convert to PDF', icon: '🖼️' },
  ],
  'Video Tools': [
    { title: 'Youtube to Text', desc: 'Convert video to text', icon: '🎥' },
    { title: 'Instagram Download', desc: 'Download Video from Instagram', icon: '📸' },
    { title: 'Compress Video', desc: 'Lessen the file size of a Video file', icon: '🗜️' },
    { title: 'TikTok Video Download', desc: 'Download Video from TikTok', icon: '🎵' },
    { title: 'MP4 to MP3', desc: 'Convert MP4 to MP3 audio', icon: '🎧' },
    { title: 'Audio to Text', desc: 'Transcribe audio to text', icon: '🎤' },
    { title: 'Extract Audio from Video', desc: 'Extract audio from your video', icon: '🔊' },
    { title: 'YouTube Transcript', desc: 'Transcribe YouTube Video', icon: '📝' },
    { title: 'Video to Gif', desc: 'Convert MP4 to animated GIF', icon: '📽️' },
    { title: 'Video to Text', desc: 'Transcribe video to text', icon: '🎬' },
    { title: 'Twitter Download', desc: 'Download Video from Twitter', icon: '🐦' },
    { title: 'Trim Video', desc: 'Trim a video to specific start/stop times', icon: '✂️' },
  ],
  // Add more categories here if needed
}

// === 📦 TOOL CARD LIST FOR "ALL TOOLS" ===
const allTools = [
  // Mixed tools across categories (for search/all)
  { title: 'Youtube to Text', desc: 'Convert video to text', icon: '🎥', category: 'Video Tools' },
  { title: 'Instagram Download', desc: 'Download Video from Instagram', icon: '📸', category: 'Video Tools' },
  { title: 'Compress Video', desc: 'Lessen the file size of a Video file', icon: '🗜️', category: 'Video Tools' },
  { title: 'TikTok Video Download', desc: 'Download Video from TikTok', icon: '🎵', category: 'Video Tools' },
  { title: 'MP4 to MP3', desc: 'Convert MP4 to MP3 audio', icon: '🎧', category: 'Video Tools' },
  { title: 'Audio to Text', desc: 'Transcribe audio to text', icon: '🎤', category: 'Video Tools' },
  { title: 'Extract Audio from Video', desc: 'Extract audio from your video', icon: '🔊', category: 'Video Tools' },
  { title: 'YouTube Transcript', desc: 'Transcribe YouTube Video', icon: '📝', category: 'Video Tools' },
  { title: 'Video to Gif', desc: 'Upload an MP4 and convert to animated GIF', icon: '📽️', category: 'Video Tools' },
  { title: 'Video to Text', desc: 'Transcribe video to text', icon: '🎬', category: 'Video Tools' },
  { title: 'Twitter Download', desc: 'Download Video from Twitter', icon: '🐦', category: 'Video Tools' },
  { title: 'Trim Video', desc: 'Select a start and stop of a video and download the trimmed', icon: '✂️', category: 'Video Tools' },

  // Image Tools
  { title: 'AI Image Generator', desc: 'AI Image Generator', icon: '🤖', category: 'Image Tools' },
  { title: 'Remove Background', desc: 'Easily Remove the Background from an image', icon: '🖼️', category: 'Image Tools' },
  { title: 'Upscale Image', desc: 'Increase the resolution of your image', icon: '⬆️', category: 'Image Tools' },
  { title: 'Remove watermark', desc: 'Remove watermark from photo', icon: '🚫', category: 'Image Tools' },
  { title: 'Image To Text', desc: 'Image To Text', icon: '📄', category: 'Image Tools' },
  { title: 'Change Background', desc: 'Change Background of Image', icon: '🎨', category: 'Image Tools' },
  { title: 'Compress Image Size', desc: 'Compress your image', icon: '🔧', category: 'Image Tools' },
  { title: 'Resize Image Dimensions', desc: 'Resize your image', icon: '📐', category: 'Image Tools' },
  { title: 'Remove Objects Photo', desc: 'Remove Objects From Photo', icon: '✏️', category: 'Image Tools' },
  { title: 'Profile Photo Maker', desc: 'Create round profile photo from image', icon: '👤', category: 'Image Tools' },
  { title: 'Remove text photo', desc: 'Remove text from image', icon: '🧽', category: 'Image Tools' },
  { title: 'HEIC to JPG', desc: 'Convert an iPhone HEIC image to JPG', icon: '📷', category: 'Image Tools' },

  // Converter Tools
  { title: 'Excel to PDF', desc: 'Convert Excel to PDF', icon: '📄', category: 'Converter Tools' },
  { title: 'CSV to Excel', desc: 'Convert CSV to Excel', icon: '📄', category: 'Converter Tools' },
  { title: 'Split Excel', desc: 'Split into one or multiple Excel files', icon: '📄', category: 'Converter Tools' },
  { title: 'XML to Excel', desc: 'Convert XML to Excel', icon: '📄', category: 'Converter Tools' },
  { title: 'EPUB to MOBI', desc: 'Convert EPUB file to MOBI file', icon: '📚', category: 'Converter Tools' },
  { title: 'Split CSV', desc: 'Split into one or multiple PDF files', icon: '📑', category: 'Converter Tools' },
  { title: 'JSON to XML', desc: 'Convert JSON to XML', icon: '🔁', category: 'Converter Tools' },
  { title: 'XML to CSV', desc: 'Convert XML to CSV', icon: '🔁', category: 'Converter Tools' },
  { title: 'Excel to CSV', desc: 'Convert Excel to CSV', icon: '📊', category: 'Converter Tools' },
  { title: 'CSV to JSON', desc: 'Convert CSV to JSON', icon: '🔄', category: 'Converter Tools' },
  { title: 'EPUB to AZW3', desc: 'Convert EPUB file to AZW3 file', icon: '📘', category: 'Converter Tools' },
  { title: 'XML to JSON', desc: 'Convert XML to JSON', icon: '🔁', category: 'Converter Tools' },
  
]

// === 🔧 FEATURED TOOLS DISPLAYED IN DASHBOARD GRID ===
const tools = [
  {
    color: 'bg-purple-600',
    title: 'PDF Tools',
    description: 'Solve Your PDF Problems',
    count: '45+ tools',
    featured: 'PDF Creator',
  },
  {
    color: 'bg-orange-500',
    title: 'Image Tools',
    description: 'Solve Your Image Problems',
    count: '30+ tools',
    featured: 'Remove BG',
  },
  {
    color: 'bg-rose-600',
    title: 'Video Tools',
    description: 'Solve Your Video Problems',
    count: '10+ tools',
    featured: 'Mute Video',
  },
  {
    color: 'bg-blue-600',
    title: 'AI Write',
    description: 'Solve Your Text Problems',
    count: '10+ tools',
    featured: 'Paragraph Writer',
  },
  {
    color: 'bg-teal-700',
    title: 'File Tools',
    description: 'Solve Your File Problems',
    count: '15+ tools',
    featured: 'Split Excel',
  },
]
export { filters, toolData, allTools, tools };