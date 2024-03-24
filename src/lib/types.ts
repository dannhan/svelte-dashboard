type Assignment = {
  id: number;
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

type Progress = {
  id: number; 
  fisik: string;
  biaya: string;
};

type Project = {
  name: string;
  type: string;
  identity: Identity[];
  assignment: Assignment[];
  designImages: string[];
  progress: Progress[];
};

export type { Assignment, Project, Identity, Progress };
