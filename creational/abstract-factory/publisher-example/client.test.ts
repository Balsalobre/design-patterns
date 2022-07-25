import { describe, it } from 'https://deno.land/std@0.148.0/testing/bdd.ts';
import { assert } from 'https://deno.land/std@0.148.0/testing/asserts.ts';

import FacebookFactory from './src/factories/facebook/facebook-factory.ts';
import LinkedinFactory from './src/factories/linkedin/linkedin-factory.ts';
import SlackFactory from './src/factories/slack/slack-factory.ts';
import FacebookConnector from './src/factories/facebook/facebook-connector.ts';
import FacebookPublisher from './src/factories/facebook/facebook-publisher.ts';
import LinkedinConnector from './src/factories/linkedin/linkedin-connector.ts';
import LinkedinPublisher from './src/factories/linkedin/linkedin-publisher.ts';
import SlackConnector from './src/factories/slack/slack-connector.ts';
import SlackPublisher from './src/factories/slack/slack-publisher.ts';

const facebookFactory = new FacebookFactory(),
      linkedinFactory = new LinkedinFactory(),
      slackFactory = new SlackFactory();

describe('Facebook Publisher', () => {
    it('It must be a Facebook connector', () => {
        assert(facebookFactory.getConnector() instanceof FacebookConnector);
    });

    it('It must be a Facebook publisher', () => {
        const connector = facebookFactory.getConnector();
        assert(facebookFactory.getPublisher(connector) instanceof FacebookPublisher);
    });
});

describe('Linkedin Publisher', () => {
    it('It must be a Linkedin connector', () => {
        assert(linkedinFactory.getConnector() instanceof LinkedinConnector);
    });

    it('It must be a Linkedin publisher', () => {
        const connector = linkedinFactory.getConnector();
        assert(linkedinFactory.getPublisher(connector) instanceof LinkedinPublisher);
    });
});

describe('Slack Publisher', () => {
    it('It must be a Slack connector', () => {
        assert(slackFactory.getConnector() instanceof SlackConnector);
    });

    it('It must be a Slack publisher', () => {
        const connector = slackFactory.getConnector();
        assert(slackFactory.getPublisher(connector) instanceof SlackPublisher);
    });
});
