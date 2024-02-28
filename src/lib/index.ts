// place files you want to import through the `$lib` alias in this folder.
//
import { Info, Progress, Umbrella, Flask } from '$lib/icons';

export const sidebarItems = [
  {
    Icon: Info,
    label: 'Identitas Project',
    href: '/project'
  },
  {
    Icon: Progress,
    label: 'Progress',
    href: '/progress'
  },
  {
    Icon: Umbrella,
    label: 'Curah Hujan',
    href: '/rainfall'
  },
  {
    Icon: Flask,
    label: 'Experiments',
    href: '/experiments'
  }
];
