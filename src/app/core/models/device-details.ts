export interface DeviceDetails {
  addToHeliumAt: string;
  address: string;
  balenaVpnOnline: number;
  batch: number;
  blockStatus: number;
  collectTime: number;
  connected: ConnectionStatus;
  cpuId: string;
  cpuTemperature: number;
  cpuUsed: number;
  denyList: number;
  deviceOnline: boolean;
  deviceType: string;
  dialable: ConnectionStatus;
  elevation: number;
  fan_status_list: FanInfo[];
  flashTotal: number;
  flashUsed: number;
  followed: number;
  gain: number;
  geocode: GeoCode;
  height: number;
  heliumOnline: boolean;
  ipEthLocal: string[];
  ipLteLocal: string[];
  ipPublic: string[];
  ipWifiLocal: string[];
  isHealth: ShortAnswer;
  labels: any[];
  lastConnectedValidatorTime: number;
  lastRebootAt: number;
  lat: number;
  lng: number;
  memoryTotal: number;
  memoryUsed: number;
  name: string;
  natType: NatType;
  networkStatus: string;
  onboardingKey: string;
  online: boolean;
  owner: string;
  p2pAddress: string[];
  p2pAddressUpdateAt: number;
  producedAt: number;
  rebootStatus: number; // find out the enum
  region: string;
  relayed: ShortAnswer;
  rewardScale: number;
  sdPercentage: number;
  sdTotal: number;
  sdUsed: number;
  sn: string;
  syncList: Sync[];
  synced: boolean;
  totalHeight: number;
  uptime: number;
  validatorAddress: string;
  validatorIP: string;
  validatorLastHeartbeat: string;
  validatorListenIp: string[];
  validatorName: string;
  validatorPort: string;
  validatorStatus: string;
  validatorStatusTime: number;
  validatorVersion: string;
  version: DeviceVersion;
  wifiSsid: string;
}

export enum ConnectionStatus {
  Unknown = -1,
  UnHealthy,
  Healthy,
}

export enum NatType {
  Unknown = -1,
  None,
  Static,
  Symmetric,
  Restricted,
}

export interface Sync {
  height: number;
  total: number;
  time: number;
}

export interface FanInfo {
  fan: number;
  temperature: number;
  time: number;
}

export interface DeviceVersion {
  firmware: string;
}

export interface GeoCode {
  short_street: string;
  short_state: string;
  short_country: string;
  short_city: string;
  long_street: string;
  long_state: string;
  long_country: string;
  long_city: string;
  city_id: string;
}

export enum ShortAnswer {
  Yes = 1,
  No,
}

export enum InDenyList {
  No,
  Yes
}
