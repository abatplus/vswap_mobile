import { ICardExchangeClient } from "../ICardExchangeClient";

export class MockCardExchangeClient implements ICardExchangeClient {
  subscribed = (peers: string[]) => { console.log('subscribed', peers); };
  unsubscribed = (statusMessage: string) => { console.log('unsubscribed', statusMessage); };
  updated = (peers: string[]) => { console.log('updated', peers); };

  cardExchangeRequested = (deviceId: string, displayName: string) => { console.log('cardExchangeRequested', deviceId, displayName); };
  waitingForAcceptance = (peerDeviceId: string) => { console.log('waitingForAcceptance', peerDeviceId); };

  cardExchangeRequestRevoked = (deviceId: string) => { console.log('cardExchangeRequestRevoked', deviceId); };
  revokeSent = (peerDeviceId: string) => { console.log('revokeSent', peerDeviceId); };

  cardExchangeAccepted = (peerDeviceId: string, peerDisplayName: string, peerCardData: string) => { console.log('cardExchangeAccepted', peerDeviceId, peerDisplayName, peerCardData); };
  acceptanceSent = (deviceId: string) => { console.log('acceptanceSent', deviceId); };

  cardDataReceived = (deviceId: string, displayName: string, cardData: string) => { console.log('cardDataReceived', deviceId, displayName, cardData); };
  cardDataSent = (peerDeviceId: string) => { console.log('cardDataSent', peerDeviceId); };
}
