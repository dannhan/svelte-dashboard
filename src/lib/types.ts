type Assignment = {
  id: string;
  pekerjaan: string;
  spk: string;
  pelaksana: string;
  gambar: string;
  status: string;
};

type Project = {
  name: string;
  type: string;
  team: Assignment[];
  designImages: string[];
};

export type { Project, Assignment };
