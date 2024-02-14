import { PostHog } from 'posthog-node'

const client = new PostHog(
  'phc_Leuf4szSpc1LXWcnl2ukXXxg4eGgAIevnHzzvBBoubV',
  {
    host: 'https://eu.posthog.com'
  }
);

export function capturePageView() {
  client.capture({
    distinctId: 'test',
    event: 'Page View',
    properties: {
      url: 'https://example.com',
      title: 'Example Domain'
    }
  })
}