import fs from 'fs';
import path from 'path';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=900&auto=format&fit=crop&fm=webp',
    dest: 'public/specialties/rehabilitacion-oral.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=900&auto=format&fit=crop&fm=webp',
    dest: 'public/specialties/estetica-dental.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=900&auto=format&fit=crop&fm=webp',
    dest: 'public/specialties/endodoncia.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=900&auto=format&fit=crop&fm=webp',
    dest: 'public/specialties/implantologia.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=900&auto=format&fit=crop&fm=webp',
    dest: 'public/specialties/cirugia-oral.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=900&auto=format&fit=crop&fm=webp',
    dest: 'public/specialties/ortodoncia.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1512290900672-1f5586616262?q=80&w=900&auto=format&fit=crop&fm=webp',
    dest: 'public/specialties/armonizacion-facial.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=900&auto=format&fit=crop&fm=webp',
    dest: 'public/specialties/periodoncia.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop&fm=webp',
    dest: 'public/clinic/consultorio.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop&fm=webp',
    dest: 'public/clinic/bioseguridad.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop&fm=webp',
    dest: 'public/clinic/ubicacion-mapa.webp'
  }
];

async function main() {
  const rootDir = process.cwd();
  for (const item of images) {
    const fullDest = path.join(rootDir, item.dest);
    const dir = path.dirname(fullDest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    console.log(`Downloading ${item.dest}...`);
    const res = await fetch(item.url);
    if (!res.ok) {
      console.error(`Failed to download ${item.url}: status ${res.status}`);
      continue;
    }
    const arrayBuffer = await res.arrayBuffer();
    fs.writeFileSync(fullDest, Buffer.from(arrayBuffer));
    console.log(`Saved ${item.dest} (${(arrayBuffer.byteLength / 1024).toFixed(1)} KB)`);
  }
  console.log('All images downloaded successfully in WebP format!');
}

main().catch(console.error);
