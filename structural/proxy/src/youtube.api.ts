import { IVideoProvider } from './video-provider.interface.ts';

interface IPlaylistData {
  [key: string]: string[];
}

export class YouTubeApi implements IVideoProvider {
  private readonly playList: IPlaylistData = {
    courses: [
      'https://www.youtube.com/watch?v=F0WoVEr0-44',
      'https://www.youtube.com/watch?v=ba7e4mksR5I',
      'https://www.youtube.com/watch?v=ba7e4mksR5I'
    ],
  };

  async getPlayList(code: string): Promise<string[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = this.playList[code] ?? null;
        resolve(result);
      }, 3000);
    });
  }
}
