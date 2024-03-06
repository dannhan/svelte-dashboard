// place files you want to import through the `$lib` alias in this folder.
import { Info, Progress, MapPin, Users, Images, CalendarCheck, Wallet } from '$lib/icons';

export const sidebarItems = [
  {
    Icon: Info,
    label: 'Identitas Proyek',
    href: 'identitas-proyek'
  },
  {
    Icon: Users,
    label: 'Tim Pelaksana',
    href: 'tim-pelaksana'
  },
  {
    Icon: Images,
    label: 'Gambar Desain',
    href: 'gambar-desain'
  },
  {
    Icon: CalendarCheck,
    label: 'Jadwal Project',
    href: 'jadwal-project'
  },
  {
    Icon: Progress,
    label: 'Progress',
    href: 'progress'
  },
  {
    Icon: MapPin,
    label: 'Lokasi',
    href: 'lokasi'
  },
  {
    Icon: Wallet,
    label: 'Realisasi Biaya',
    href: 'realisasi-biaya'
  }
  // {
  //   Icon: Flask,
  //   label: 'Experiments',
  //   href: `experiments`
  // }
];
