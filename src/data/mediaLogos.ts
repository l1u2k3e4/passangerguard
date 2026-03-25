export interface MediaLogo {
  name: string
  src: string
  hasImage: boolean
}

export const mediaLogos: MediaLogo[] = [
  // MIT echtem Logo-Bild
  { name: 'RTL', src: '/images/presse-logos/rtl.png', hasImage: true },
  { name: '1LIVE', src: '/images/presse-logos/1live.png', hasImage: true },
  { name: 'myself', src: '/images/presse-logos/myself.png', hasImage: true },
  { name: 'Hamburger Abendblatt', src: '/images/presse-logos/hamburger-abendblatt.png', hasImage: true },
  { name: 'Berliner Morgenpost', src: '/images/presse-logos/berliner-morgenpost.png', hasImage: true },
  { name: 'WAZ', src: '/images/presse-logos/waz.png', hasImage: true },
  { name: 'NRZ', src: '/images/presse-logos/nrz.png', hasImage: true },
  { name: 'Braunschweiger Zeitung', src: '/images/presse-logos/braunschweiger-zeitung.png', hasImage: true },
  { name: 'KURIER', src: '/images/presse-logos/kurier.png', hasImage: true },
  { name: 'Radio Vest', src: '/images/presse-logos/radio-vest.png', hasImage: true },
  { name: 'Ruhr-Universität Bochum', src: '/images/presse-logos/rub.png', hasImage: true },
  // OHNE Logo-Bild (nur Text-Fallback)
  { name: 'WDR', src: '', hasImage: false },
  { name: 'Rundschau', src: '', hasImage: false },
  { name: 'Landeszeitung', src: '', hasImage: false },
  { name: 'Siegener Zeitung', src: '', hasImage: false },
  { name: 'HARZKURIER', src: '', hasImage: false },
  { name: 'Ostthüringer Zeitung', src: '', hasImage: false },
  { name: 'Thüringer Allgemeine', src: '', hasImage: false },
]
