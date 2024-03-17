export type Data = {
  id: number;
  key: string;
  value: string;
  new?: boolean;
};

export const data: Data[] = [
  {
    id: 1,
    key: 'Nama Proyek',
    value: 'RB Yogyakarta'
  },
  {
    id: 3,
    key: 'No. SPK',
    value: 'K001/SPK/PRO/IV/2023'
  },
  {
    id: 2,
    key: 'Lokasi Proyek',
    value: 'Kab. Yogyakarta'
  }
];
