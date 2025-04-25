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

export const Cascadia = localFont({
  src: [
    {
      path: '../public/fonts/cascadia/CascadiaMono-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/cascadia/CascadiaMono-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
})