---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Worldlink's NETTV"
  text: "Comprehensive Guide"
  tagline: Everything there is to know about NETTV
  image:
    src: /nettvlogo.png
    alt: LOGO
  actions:
    - theme: brand
      text: Get started
      link: /pages/getting-started
    - theme: alt
      text: Setup Boxes
      link: /pages/boxes

features:
  - icon: 🛠️
    title: Bypass Methods
    details: Bypass setup box's apps install restrictions
    link: /pages/bypassintro  
  - icon: 💻
    title: Recommended Apps
    details: Best apps to run on the NETTV setup boxes
    link: /pages/apps
  - icon: ⚙️
    title: Firmwares
    details: Collection of NETTV firmwares 
    link: /pages/firmware
---
<style>
:root {
  --vp-home-hero-name-color: transparent !important;
  --vp-home-hero-name-background: -webkit-linear-gradient(10deg, #bd34fe 30%, #41d1ff) !important;

  --vp-home-hero-image-background-image: linear-gradient(-120deg, #bd34fe 50%, #A7F2B2 50%) !important;
  --vp-home-hero-image-filter: blur(44px) !important;
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px) !important;
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px) !important;
  }
}
</style>
