import { Inter, Lusitana, Cinzel, Great_Vibes,Cinzel_Decorative,Halant } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const cinzel = Cinzel({ subsets: ['latin'] }); 
export const halant = Halant({
  subsets: ['latin'],
  weight: '300'
}); 
export const cinzelDecorative = Cinzel_Decorative({
    subsets: ['latin'],
    weight: '400'
}); 
export const greatVibes = Great_Vibes({
    subsets: ['latin'],
    weight: '400'
}); 
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});