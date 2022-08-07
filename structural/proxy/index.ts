import { VideoProxy } from './src/video.proxy.ts';
import { YouTubeApi } from './src/youtube.api.ts';

const proxy = new VideoProxy(new YouTubeApi());

(async () => {
  await getPlayList(); // First time
  await getPlayList(); // Second time (cache)
})();

async function getPlayList() {
  const startDate = new Date();
  await proxy.getPlayList('courses');
  const endDate = new Date();

  console.log(
    `Process completed on ${
      (endDate.getTime() - startDate.getTime()) / 1000
    } seconds`
  );
}