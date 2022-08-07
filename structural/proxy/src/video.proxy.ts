import { ICache } from "./entities/cache.interface.ts";
import { IVideoProvider } from './video-provider.interface.ts';

export class VideoProxy implements IVideoProvider {
  private cache: ICache = {};

  constructor(private readonly provider: IVideoProvider) {}

  async getPlayList(code: string): Promise<string[]> {
    let result = this.cache[code];

    if (!result) {
      result = await this.provider.getPlayList(code);

      // push to cache
      this.cache[code] = result;
    }

    return result;
  }
}
