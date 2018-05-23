export interface Card {
  name: string;
  attribute1: number;
  attribute2: number;
  attribute3: number;
  attribute4: number;
  total: number;
}

export interface Profile {
  sueldo: number;
  creditos: number;
  pasivos: number;
  activos: number;
  creditScore: number;
  progress: number;
}

export interface Stats {
  disponible: number;
  pasivos: number;
  activos: number;
  flujoNeto: number;
  nextTurns: number;
}

export interface UserInfo {
  name: string;
  lastName: string;
  profile: Profile;
  stats: Stats;
}

export interface UserModel {
  userInfo: UserInfo;
}
