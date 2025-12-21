export interface App {
  title: string;
  desc: string;
  link: string | null;
  icon: string;
  category?: string;
  downloads?: string;
  isRecent?: boolean;
}

export const categories = ["All", "Recent", "Productivity", "Tools", "Personalization", "Lifestyle", "Photography"];

export const portfolioApps: App[] = [
  {
    title: "AI Passport Photo & ID Maker",
    icon: "https://play-lh.googleusercontent.com/vUm7T7RUs1rws0Rcl2SyPwl6ViBHQJRg6XikBAbp7n_F4gb_nojEmL-nVmngL8v3yhAtFLzzKFv66j5S5wuHvdA=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=com.tas.passport.id.maker&hl=en",
    desc: "AI-powered passport & ID photo maker",
    category: "Productivity",
    downloads: "1K+",
    isRecent: true
  },
  {
    title: "Pic Collage Maker Photo Editor",
    icon: "https://play-lh.googleusercontent.com/pkk8dYZhdZXQoQ2gCaymP9cSkF_r-zIQZ6JEqvSJdSpzBNnA5DRfoDascx5KQofvLX3Izhp8zkBcHcG7gooOAt8=s64-rw",
    link: "https://play.google.com/store/apps/details?id=com.las.collage.maker",
    desc: "Photo collage & editing tool",
    category: "Photography",
    downloads: "1M+",
    isRecent: true
  },
  {
    title: "Love Photo Frame",
    icon: "https://play-lh.googleusercontent.com/sjQvChnHs7GnaP_39HOJWo9x7XSatFK72SGVafTeoL_DvX-CFrR9TsDLsG3Q49BMHg=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=com.tas.ultimate.frames.editor",
    desc: "Romantic photo frame editor",
    category: "Photography",
    downloads: "1M+",
    isRecent: true
  },
  {
    title: "Gold Finder & Metal Detector",
    icon: "https://play-lh.googleusercontent.com/LdjZaEfTZ7D2UVWt8rSrkITiMoKUOclGx27JIfI8kPpsgQHmDefaS7ZeTMupXh2Tip0=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=com.ots.golddetector.metaldetector.studfinder",
    desc: "Gold Finder & Metal Detector",
    category: "Tool",
    downloads: "500K+",
    isRecent: true
  },
  {
    title: "Smarty Men Suit Photo Editor",
    icon: "https://play-lh.googleusercontent.com/E4u_Kpbf8I2pUDyD6Dss6vQxYAzLT-ALQvxn68S3XVr-rXmXMM1NQCrTF_PC49VabCOc=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=com.ant.smarty.men.ai.photo.editor",
    desc: "AI-based men's suit photo editor",
    category: "Photography",
    downloads: "1M+",
    isRecent: true
  },
  {
    title: "Photo PIP Camera Collage Maker",
    icon: "https://play-lh.googleusercontent.com/EDJZ0D6VjjTgn_-et6G46kJczHX09cUkJ_H_0AnzNc3eCFmjMBYxZ27r1wsbmAVrjcE=s64-rw",
    link: "https://play.google.com/store/apps/details?id=com.las.pip.camera",
    desc: "Picture-in-picture collage app",
    category: "Photography",
    downloads: "1M+",
    isRecent: true
  },
  {
    title: "Dual Photo Frame Collage Maker",
    icon: "https://play-lh.googleusercontent.com/YKCvKVnn9JqSlv6N2pAGrc-WI9mXiL6Lyjt8KaXNEnOzM0hCP3BzFUehY1Q9Y1zi5Pw=s64-rw",
    link: "https://play.google.com/store/apps/details?id=com.las.dual.photo.frames",
    desc: "Dual photo frames for collages",
    category: "Photography",
    downloads: "1M+",
    isRecent: true
  },
  {
    title: "Urdu Shayari Poetry on Picture",
    icon: "https://play-lh.googleusercontent.com/UIag8Q5vtE5XvJtqKE3v1Obwhz8ovm-Tshc7jGpAciHBppUnyJyy5HSpOfZMpxQY4fw=s64-rw",
    link: "https://play.google.com/store/apps/details?id=com.las.urdu.shay",
    desc: "Urdu poetry photo editor",
    category: "Photography",
    downloads: "1M+",
    isRecent: true
  },
  {
    title: "Ramadan Calendar 2025, Prayer",
    icon: "https://play-lh.googleusercontent.com/hJ9jUkl7atz4zVCmebYhNmfOgZvDSXNxgAEX-v1twoUo_oavSunwy2vRmWNnnBZ1atI=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=com.ilib.ramadan.calendar",
    desc: "Updated Ramadan schedules",
    category: "Lifestyle",
    downloads: "100K+"
  },
  {
    title: "Perfect Body Editor For All",
    icon: "https://play-lh.googleusercontent.com/tqe94-qS6k7rlAMMueggV-IyosrzGWNXCt3DfecrekuR2hHIGx8PvUjZ34uxhDyauRo=s64-rw",
    link: "https://play.google.com/store/apps/details?id=com.las.body.shape.editor",
    desc: "Body shape photo editor",
    category: "Photography",
    downloads: "100K+",
    isRecent: true
  },
  {
    title: "Air Horn, Fart & Haircut Prank",
    icon: "https://play-lh.googleusercontent.com/JaP7qococ7musl5bV6auMK42pxYD6crNyl3UiUxqnLBiacHc6K4DFSCYxlHYGn2X1JA=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=com.ots.prank.sound",
    desc: "Prank sound effects app",
    category: "Entertainment",
    downloads: "100K+",
    isRecent: true
  },
  {
    title: "Photo Collage Maker & Grid Art",
    icon: "https://play-lh.googleusercontent.com/zQQQVOL1q6hyr-lpl0f2qD6ZlpmOwdxjGXQrP0h6_E12W6K1fp2QItzwUV3OKO6A9w=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=com.tas.collage.maker.ai",
    desc: "Advanced collage maker with grids",
    category: "Photography",
    downloads: "100K+",
    isRecent: true
  },
  {
    title: "Digital Clock Lock Screen and Widgets",
    icon: "https://play-lh.googleusercontent.com/Lay1Nh_FyZMEoQB6himX3oGa_UoY2tJWU51uiTFlsU6h2jonywVaRwQALTsci7mqW7PN=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=com.lockscreen.smartclockapp",
    desc: "Customizable digital clock widgets",
    category: "Personalization",
    downloads: "500K+"
  },
  {
    title: "Animated Clock",
    icon: "https://play-lh.googleusercontent.com/Lay1Nh_FyZMEoQB6himX3oGa_UoY2tJWU51uiTFlsU6h2jonywVaRwQALTsci7mqW7PN=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=com.lockscreen.clockwidget.alarmclock.timeclock.digitalclock.analogclock.nightclock",
    desc: "Dynamic analog & digital clock with alarms",
    category: "Personalization",
    downloads: "500K+"
  },
  {
    title: "Bar Code and QR Code Scanner",
    icon: "https://play-lh.googleusercontent.com/0jyhTIvG45Di7UktWaoXDN25bvD59OEWTpD9lATBb1OHEwpvmGh1lRO0GWAZmXBAVQE=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=com.qrcodereader.barcodescanner.qrscannerapp.qrcodegenerator",
    desc: "Fast QR & barcode scanner/generator",
    category: "Tools",
    downloads: "10K+"
  },
  {
    title: "Screen Mirroring TV Cast",
    icon: "https://play-lh.googleusercontent.com/KMAsRFLcAEW6iM4JyD0mzT0jod530EoRDjoBDBcukeewaqSnqjj-NBu2911XYKxo2W2T=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=com.miracast.screenmirroring.smartview.tvcast.wirelessdisplay.mirrorapp",
    desc: "Cast phone to TV wirelessly",
    category: "Tools",
    downloads: "1K+"
  },
  {
    title: "Screen Casting",
    icon: "https://play-lh.googleusercontent.com/KMAsRFLcAEW6iM4JyD0mzT0jod530EoRDjoBDBcukeewaqSnqjj-NBu2911XYKxo2W2T=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=com.frixapps.casttotv",
    desc: "Mirror screen to smart TVs",
    category: "Tools",
    downloads: "5M+"
  },
  {
    title: "Phone Cleaner",
    icon: "Non",
    link: null,
    desc: "Junk cleaner & performance booster",
    category: "Tools",
    downloads: null
  },
  {
    title: "File Manager",
    icon: "https://play-lh.googleusercontent.com/P5o5weGddqT1dUJ_WFd-iCjkzepeyk0HNeAEWjrigJvDg8X9uWPcm6NPq_i_wd6M1A=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=com.filemanager.fileexplorer.filebrowser",
    desc: "Simple & powerful file explorer",
    category: "Productivity",
    downloads: "10K+"
  },
  {
    title: "Habits Tracker",
    icon: "https://play-lh.googleusercontent.com/gGHaWnV9n3EK0jpJ_yessWA1PF6mcL7Ys41mBPTCTXtusf13Yr2zVpVYAOI69ZX2Gjc=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=org.isoron.uhabits&pcampaignid=web_share",
    desc: "Build daily habits ",
    category: "Productivity",
    downloads: "5M+"
  },
  {
    title: "True Muslim",
    icon: "https://play-lh.googleusercontent.com/laFVeWHYJkcdmmACCGRr2m4JeFRWQR1mAC6h1EcyWRI3xikbfZLfzbV-uhO9Ny0NmA=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=com.spiritsoft.prayertimes.salatuk.muslims&hl=en&gl=US",
    desc: "Prayer times & Qibla finder",
    category: "Lifestyle",
    downloads: "1M+"
  },
  {
    title: "Islam Pro",
    icon: "https://play-lh.googleusercontent.com/Q89cH_o4bkuLMM6XlQKgeBxdgiaSK9bxtmaFvO5XETxqrNVoVufIPnoXp3P9ACdzsbw=s94-rw",
    link: "https://play.google.com/store/apps/details?id=com.fauztech.prayer.times.salat.azan.alarm.qibla&hl=en",
    desc: "Prayer times, Qibla, Azan alarms",
    category: "Lifestyle",
    downloads: "1M+"
  },
  {
    title: "Dua Adkar",
    icon: "https://play-lh.googleusercontent.com/I11KNJgdDgnMnN6EbOsP5wBXJfNzb2hoRNbEhUGUmWhihJ_pG5sjLpTEAX-30BxVkC4=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=com.ramadandua.duaazkar&hl=en",
    desc: "Islamic supplications & reminders",
    category: "Lifestyle",
    downloads: "50K+"
  },
  {
    title: "Ramadan Calendar",
    icon: "https://play-lh.googleusercontent.com/zB94cvnB-XvxNR_ENx8oktA5wS4NBcF7R6YNmXHQgeTy4aD1fRkgsIpExLgwTEu-VeMP=s256-rw",
    link: "https://play.google.com/store/apps/details?id=com.fazutech.ramadan_2018&hl=en",
    desc: "Ramadan prayer & fasting schedules",
    category: "Lifestyle",
    downloads: "1M+"
  },
  {
    title: "My Mosque 360 Qibla Direction",
    icon: "https://play-lh.googleusercontent.com/tCGgNxuSIxHIGiVY9Djpo5_6ZC78j7CZQib4Vv8y_3G3I0QDrRcmEj22TzgDKHf7hj_g=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=com.qibladirection.prayertimes.salatuk.muslims&hl=en&gl=US",
    desc: "Prayer times & Qibla finder",
    category: "Lifestyle",
    downloads: "10K+"
  },
  {
    title: "Document Scanner",
    icon: "Coming soon",
    link: null,
    desc: "High-quality document scanning (Coming Soon)",
    category: "Productivity",
    downloads: null
  },
  {
    title: "Languages Translator",
    icon: "https://play-lh.googleusercontent.com/77npc3YobupBIqM6Xnha8cVx8Z36norIf8WFZhptlh2FkkFRNKnhnvKv-fAK2VRCgqg=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=translate.all.language.translator.cameratranslator",
    desc: "Text & speech translation",
    category: "Tools",
    downloads: "5M+",
    isRecent: false
  },
  {
    title: "Thumbnail Maker AI",
    icon: "Coming soon",
    link: null,
    desc: "AI-powered thumbnail creation (Coming Soon)",
    category: "Photography",
    downloads: null
  },
  {
    title: "Car Engine Sound - Gas Pedal",
    icon: "https://play-lh.googleusercontent.com/_cA-PsIK7U6GdKz9Wy2DMo-x_MG4slh-xpeEyCwHKacNRS-olpglet6B09hDsl9teg=s256-rw",
    link: "https://play.google.com/store/apps/details?id=com.ax.car.engine.sounds&hl=en",
    desc: "Car engine sound simulator",
    category: "Entertainment",
    downloads: "1M+",
    isRecent: true
  },
  {
    title: "Al-Momin Islamic App",
    icon: "https://play-lh.googleusercontent.com/SMbKzrymCHhJZwWMR_XXq3uz2BphtaW0yQS6CSlRn1MQbQlMl7W-oVN_k9NrgG6fgLg=s64-rw",
    link: "https://play.google.com/store/apps/details?id=com.almomin.quran.tasbeehcounter.qibladirection.prayertimes.salatuk",
    desc: "Quran, prayer times, tasbeeh",
    category: "Lifestyle",
    downloads: "10K+",
    isRecent: true
  },
  {
    title: "Languages Translator",
    icon: "https://play-lh.googleusercontent.com/Dx0EgArYXj-AHIwgaq7X6DbAORIElYeJE_MqyMiHx7Z9O2Zvd2x1-Qw3K-YRMG2PdaA=s64-rw",
    link: "https://play.google.com/store/apps/details?id=com.tbs.language.translatorapp.smartscanner.dictionary.translateme",
    desc: "Text & speech translation",
    category: "Tools",
    downloads: "50+",
    isRecent: true
  },
  {
    title: "Speaker Cleaner",
    icon: "https://play-lh.googleusercontent.com/dtDsCuIM2IoChxbN11lPYbMFOoAmeXg3KpmuO0HOU6Oc_Zbvcsug0ZYd3GVKSYcngeIas_HE7fF_sbhT-4cyCA=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=com.ant.seaker.cleaner",
    desc: "Speaker Cleaner - Water Eject for Clear Sound",
    category: "Tools",
    downloads: "500K+",
    isRecent: true
  }
];
