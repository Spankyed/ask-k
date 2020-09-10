import discoEvents from '../server/disco-events';

beforeEach(() => {
  discoEvents.setCollectionId('collection');
  discoEvents.setEnvironmentId('environment');
});

describe('Disco Events builder returns params for discovery create event service', () => {
  test('when opts are NOT passed', () => {
    expect(discoEvents.createEvent()).toEqual({
      type: 'click',
      data: {
        environment_id: 'environment',
        collection_id: 'collection',
        document_id: undefined,
        session_token: undefined
      }
    });
  });

  test('when opts are passed', () => {
    expect(discoEvents.createEvent(
      '1111111111111',
      '222222222222'
    )).toEqual({
      type: 'click',
      data: {
        environment_id: 'environment',
        collection_id: 'collection',
        document_id: '1111111111111',
        session_token: '222222222222'
      }
    });
  });
});
