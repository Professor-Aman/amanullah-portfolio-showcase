export interface App {
  name: string;
  description: string;
  link?: string;
  downloads: string;
  status?: "available" | "coming-soon";
  category: string;
}

export const portfolioApps: App[] = [
  {
    name: "AI Passport Photo & ID Maker",
    description: "A smart app for creating professional passport photos and IDs with AI-powered editing tools.",
    link: "https://play.google.com/store/apps/details?id=com.funzoft.passport.photo.maker.visa.picture",
    downloads: "1M+",
    status: "available",
    category: "Productivity"
  },
  {
    name: "Digital Clock Lock Screen and Widgets",
    description: "Customizable lock screen clock with widgets for time and alarms.",
    link: "https://play.google.com/store/apps/details?id=com.digital.clock.lockscreen.time.widget",
    downloads: "500K+",
    status: "available",
    category: "Personalization"
  },
  {
    name: "Animated Clock",
    description: "Dynamic clock app with analog and digital displays, alarms, and customizable widgets.",
    link: "https://play.google.com/store/apps/details?id=com.live.animated.clock.widget.time.alarm",
    downloads: "100K+",
    status: "available",
    category: "Personalization"
  },
  {
    name: "Bar Code and QR Code Scanner",
    description: "Fast, reliable app for scanning and generating QR codes and barcodes.",
    link: "https://play.google.com/store/apps/details?id=com.qrcode.barcode.scanner.reader.generator",
    downloads: "1M+",
    status: "available",
    category: "Tools"
  },
  {
    name: "Screen Mirroring TV Cast",
    description: "Enables seamless screen mirroring to TVs with low latency.",
    link: "https://play.google.com/store/apps/details?id=com.screen.mirroring.smart.tv.cast.phone",
    downloads: "500K+",
    status: "available",
    category: "Tools"
  },
  {
    name: "Screen Casting",
    description: "App for casting phone screens to smart TVs and devices.",
    link: "https://play.google.com/store/apps/details?id=com.screen.mirroring.tv.remote.castto",
    downloads: "100K+",
    status: "available",
    category: "Tools"
  },
  {
    name: "Phone Cleaner",
    description: "Optimizes device performance by cleaning junk files and boosting speed.",
    link: "https://play.google.com/store/apps/details?id=com.phone.cleaner.cache.clean.booster.ram",
    downloads: "1M+",
    status: "available",
    category: "Tools"
  },
  {
    name: "File Manager",
    description: "Intuitive app for managing files with easy browsing and organization.",
    link: "https://play.google.com/store/apps/details?id=com.file.manager.browser.explorer.app",
    downloads: "500K+",
    status: "available",
    category: "Productivity"
  },
  {
    name: "Habits Tracker",
    description: "App to track and build daily habits effectively.",
    downloads: "N/A",
    status: "coming-soon",
    category: "Productivity"
  },
  {
    name: "True Muslim",
    description: "Islamic app with prayer times, Quran, and Qibla direction.",
    link: "https://play.google.com/store/apps/details?id=com.muslim.quran.azan.prayer.time.qibla.direction",
    downloads: "500K+",
    status: "available",
    category: "Lifestyle"
  },
  {
    name: "Islam Pro",
    description: "Comprehensive app with prayer times, Qibla, and Azan alarms.",
    link: "https://play.google.com/store/apps/details?id=com.islamicpro.quran.prayertime.azan.qibla",
    downloads: "100K+",
    status: "available",
    category: "Lifestyle"
  },
  {
    name: "Dua Adkar",
    description: "Collection of Islamic supplications and reminders.",
    link: "https://play.google.com/store/apps/details?id=com.dua.azkar.islamicpro.muslim.prayer",
    downloads: "100K+",
    status: "available",
    category: "Lifestyle"
  },
  {
    name: "Ramadan Calendar",
    description: "Schedules for Ramadan prayers and fasting.",
    link: "https://play.google.com/store/apps/details?id=com.ramadan.calendar.muslim.quran.prayer.time",
    downloads: "50K+",
    status: "available",
    category: "Lifestyle"
  },
  {
    name: "My Mosque 360 Qibla Direction",
    description: "App for prayer times and accurate Qibla direction.",
    link: "https://play.google.com/store/apps/details?id=com.mosque.qiblafinder.prayertimes.quran",
    downloads: "100K+",
    status: "available",
    category: "Lifestyle"
  },
  {
    name: "Document Scanner",
    description: "Scans documents with high-quality output.",
    downloads: "N/A",
    status: "coming-soon",
    category: "Productivity"
  },
  {
    name: "Languages Translator",
    description: "Translates text and speech across multiple languages.",
    link: "https://play.google.com/store/apps/details?id=com.all.language.translate.voice.text.camera.translator",
    downloads: "500K+",
    status: "available",
    category: "Tools"
  },
  {
    name: "Thumbnail Maker AI",
    description: "AI-powered app for creating professional thumbnails.",
    downloads: "N/A",
    status: "coming-soon",
    category: "Productivity"
  },
  {
    name: "Smarty Men Suit Photo Editor",
    description: "AI-based photo editor for men's suit designs.",
    link: "https://play.google.com/store/apps/details?id=com.men.suit.photo.editor.man.hairstyle.montage",
    downloads: "100K+",
    status: "available",
    category: "Photography"
  },
  {
    name: "Pic Collage Maker Photo Editor",
    description: "App for creating photo collages with editing tools.",
    link: "https://play.google.com/store/apps/details?id=com.pic.collage.photo.editor.frame.maker.grid.art",
    downloads: "100K+",
    status: "available",
    category: "Photography"
  },
  {
    name: "Photo PIP Camera Collage Maker",
    description: "Picture-in-picture photo editing and collage app.",
    link: "https://play.google.com/store/apps/details?id=com.photo.pip.camera.collage.maker.editor.picture.frame",
    downloads: "50K+",
    status: "available",
    category: "Photography"
  },
  {
    name: "Dual Photo Frame Collage Maker",
    description: "Combines dual photos with customizable frames.",
    link: "https://play.google.com/store/apps/details?id=com.dual.photo.frame.collage.maker.picture.love.couple",
    downloads: "50K+",
    status: "available",
    category: "Photography"
  },
  {
    name: "Urdu Shayari Poetry on Picture",
    description: "App for adding Urdu poetry to photos.",
    link: "https://play.google.com/store/apps/details?id=com.urdu.poetry.shayari.on.picture.status.editor.maker",
    downloads: "50K+",
    status: "available",
    category: "Photography"
  },
  {
    name: "Ramadan Calendar 2025, Prayer",
    description: "Updated Ramadan schedules and prayer times.",
    link: "https://play.google.com/store/apps/details?id=com.ramadan.calendar.muslim.prayer.time.qibla",
    downloads: "50K+",
    status: "available",
    category: "Lifestyle"
  },
  {
    name: "Perfect Body Editor For All",
    description: "Photo editor for body shape enhancements.",
    link: "https://play.google.com/store/apps/details?id=com.perfect.body.editor.photo.shape.curve.abs.muscle",
    downloads: "100K+",
    status: "available",
    category: "Photography"
  },
  {
    name: "Air Horn, Fart & Haircut Prank",
    description: "Fun app with prank sound effects.",
    link: "https://play.google.com/store/apps/details?id=com.air.horn.prank.sounds.fart.haircut.funny.noise",
    downloads: "50K+",
    status: "available",
    category: "Entertainment"
  },
  {
    name: "Photo Collage Maker & Grid Art",
    description: "Advanced collage maker with grid layouts.",
    link: "https://play.google.com/store/apps/details?id=com.photo.collage.maker.grid.art.editor.picture.frame",
    downloads: "100K+",
    status: "available",
    category: "Photography"
  },
  {
    name: "Love Photo Frame",
    description: "Romantic photo frames for love-themed edits.",
    link: "https://play.google.com/store/apps/details?id=com.love.photo.frame.couple.romantic.picture.editor",
    downloads: "50K+",
    status: "available",
    category: "Photography"
  },
  {
    name: "Car Engine Sound - Gas Pedal",
    description: "Realistic car engine sound simulator.",
    link: "https://play.google.com/store/apps/details?id=com.car.engine.sound.gas.pedal.simulator.racing.noise",
    downloads: "50K+",
    status: "available",
    category: "Entertainment"
  },
  {
    name: "Al-Momin Islamic App",
    description: "Comprehensive Islamic app with Quran and prayer tools.",
    link: "https://play.google.com/store/apps/details?id=com.almomin.islamic.app.quran.prayer.time.qibla",
    downloads: "100K+",
    status: "available",
    category: "Lifestyle"
  }
];

export const categories = Array.from(new Set(portfolioApps.map(app => app.category)));
