import React from 'react';
import './SwapViewListItem.css';
import { IonItem, IonLabel, IonButton, IonIcon, IonGrid, IonCol, IonRow, IonSpinner } from '@ionic/react';
import { checkmark, close, share } from 'ionicons/icons';
import SwapState from '../enums/SwapState';
import { useIntl } from 'react-intl';
import { nameof } from '../utils';
import IvCardTranslations from '../i18n/IvCardTranslations';

type SwapViewListItemType = {
  name: string;
  state: SwapState;
  onDoRequest: () => void;
  onAcceptRequest: () => void;
  onAbortRequest: () => void;
};

const SwapViewListItem = ({ name, state, onDoRequest, onAbortRequest, onAcceptRequest }: SwapViewListItemType) => {
  let stateText = ' ';

  const i18n = useIntl();
  switch (state) {
    case SwapState.initial:
      stateText = ' ';
      break;
    case SwapState.requested:
      stateText = i18n.formatMessage({ id: nameof<IvCardTranslations>('Wait_for_acceptance') });
      break;
    case SwapState.received:
      stateText = i18n.formatMessage({ id: nameof<IvCardTranslations>('Exchange_request_received') });
      break;
    case SwapState.accepted:
      stateText = i18n.formatMessage({ id: nameof<IvCardTranslations>('Accept_request_send_data') });
      break;
    case SwapState.exchanged:
      stateText = i18n.formatMessage({ id: nameof<IvCardTranslations>('Exchange_successful') });
      break;
  }

  const onActionButtonClick = () => {
    switch (state) {
      case SwapState.initial:
        return onDoRequest();
      case SwapState.requested:
        return onAbortRequest();
      case SwapState.received:
        return onAcceptRequest();
    }
  };

  const getActionIcon = () => {
    switch (state) {
      case SwapState.initial:
        return share;
      case SwapState.received:
        return checkmark;
      case SwapState.requested:
        return close;
    }
  };

  const renderActionButton = () => {
    if (state !== SwapState.accepted && state !== SwapState.exchanged)
      return (
        <IonButton float-right color="primary" fill="outline" onClick={onActionButtonClick}>
          <IonIcon icon={getActionIcon()} />
        </IonButton>
      );
  };

  return (
    <IonItem>
      <IonGrid>
        <IonRow>
          <IonCol className="swap-view-wait">{state === SwapState.requested ? <IonSpinner name="dots" /> : ''}</IonCol>
          <IonCol>
            <div>
              <IonLabel>
                <h2>{name}</h2>
                <p>{stateText}</p>
              </IonLabel>
            </div>
          </IonCol>
          <IonCol className="swap-view-button">{renderActionButton()}</IonCol>
        </IonRow>
      </IonGrid>
    </IonItem>
  );
};

export default SwapViewListItem;