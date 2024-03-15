type Assignment = {
  id: string;
  pekerjaan: string;
  spk: string;
  pelaksana: string;
  gambar: string;
  status: string;
};

type Identity = {
  id: number;
  key: string;
  value: string;
};

type Project = {
  name: string;
  type: string;
  team: Assignment[];
  identity: Identity[];
  designImages: string[];
};

export type { Assignment, Project, Identity };
