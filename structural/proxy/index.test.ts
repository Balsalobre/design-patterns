import { describe, it } from 'https://deno.land/std@0.148.0/testing/bdd.ts';
import { assertExists } from 'https://deno.land/std@0.148.0/testing/asserts.ts';

import { VideoProxy } from './src/video.proxy.ts';
import { YouTubeApi } from './src/youtube.api.ts';

const proxy = new VideoProxy(new YouTubeApi()); // Dependecy-inversion

describe('Video proxy', function () {
  it('was cached?', async () => {
    const key = 'courses';
    let result = await proxy.getPlayList(key);
    result = await proxy.getPlayList(key);
    assertExists(proxy['cache'][key]);
  });
});
