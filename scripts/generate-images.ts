import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const outputDir = './public/images';

async function generateImages() {
  const zai = await ZAI.create();

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const images = [
    {
      prompt: 'Sacred Vedic astrology background, cosmic zodiac wheel with golden Sanskrit mantras, deep saffron and gold colors, spiritual meditation atmosphere, intricate mandala patterns, high quality digital art',
      filename: 'hero-bg.png',
      size: '1440x720' as const,
    },
    {
      prompt: 'Ancient Vedic astrology manuscript with Sanskrit text, birth chart diagram, golden compass and celestial symbols, deep maroon and saffron colors, vintage parchment texture, high quality illustration',
      filename: 'astrology-course.png',
      size: '1024x1024' as const,
    },
    {
      prompt: 'Vastu Shastra architectural blueprint, traditional Indian temple design with sacred geometry, compass directions, golden ratios, earth tones with saffron accents, professional architectural illustration',
      filename: 'vastu-course.png',
      size: '1024x1024' as const,
    },
    {
      prompt: 'Numerology mystical grid with numbers, Lo Shu square, golden numerals floating in cosmic background, saffron and gold colors, spiritual mathematics art, high quality digital art',
      filename: 'numerology-course.png',
      size: '1024x1024' as const,
    },
    {
      prompt: 'Palmistry hand with detailed lines, fortune telling symbols, sacred geometry overlay, warm golden lighting, mystical atmosphere, professional illustration on parchment background',
      filename: 'palmistry-course.png',
      size: '1024x1024' as const,
    },
    {
      prompt: 'Traditional Indian Gurukul ashram in Himalayan foothills, ancient Sanskrit learning center, peaceful spiritual atmosphere, sunrise golden hour, beautiful landscape, high quality photography style',
      filename: 'gurukul-bg.png',
      size: '1344x768' as const,
    },
  ];

  console.log('Starting image generation...\n');

  for (const image of images) {
    try {
      console.log(`Generating: ${image.filename}...`);
      
      const response = await zai.images.generations.create({
        prompt: image.prompt,
        size: image.size,
      });

      const imageBase64 = response.data[0].base64;
      const buffer = Buffer.from(imageBase64, 'base64');
      const outputPath = path.join(outputDir, image.filename);
      
      fs.writeFileSync(outputPath, buffer);
      
      console.log(`✓ Saved: ${outputPath} (${(buffer.length / 1024).toFixed(1)} KB)\n`);
    } catch (error) {
      console.error(`✗ Failed: ${image.filename} - ${(error as Error).message}\n`);
    }
  }

  console.log('Image generation complete!');
}

generateImages().catch(console.error);
