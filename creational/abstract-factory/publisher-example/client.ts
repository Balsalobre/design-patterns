import Publisher from './src/publisher.ts';
import FacebookFactory from './src/factories/facebook/facebook-factory.ts';
import LinkedinFactory from './src/factories/linkedin/linkedin-factory.ts';
import SlackFactory from './src/factories/slack/slack-factory.ts';

const content = `Hello World to all my social networks`;

const publisher = new Publisher(content);

publisher.send(new FacebookFactory());
publisher.send(new LinkedinFactory());
publisher.send(new SlackFactory());