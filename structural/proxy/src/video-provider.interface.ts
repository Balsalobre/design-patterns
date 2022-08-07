export interface IVideoProvider {
  getPlayList(code: string): Promise<string[]>;
}
