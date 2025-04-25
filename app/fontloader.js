import localFont from 'next/font/local'

export const Kugile = localFont({
  src: [
    {
      path: '../public/fonts/Kugile.woff',
      weight: '400',
      style: 'normal',
    },
  ],
})

export const Inter = localFont({
  src: '../public/fonts/inter/Inter-VariableFont_opsz,wght.ttf',
  display: 'swap',
  variable: '--font-inter',
})