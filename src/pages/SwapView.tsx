import React, { useEffect } from 'react';
import { IonHeader, IonToolbar, IonContent, IonPage, IonButtons, IonList, IonTitle, IonLoading, IonBackButton } from '@ionic/react';
import './SwapView.css';
import VCardField from '../components/VCardField';
import { useAppContext } from '../store/contexts/AppContext';
import * as Actions from '../store/actions/actions';

const SwapView: React.FC = () => {

  const { appContext, dispatchAppContext } = useAppContext();

  useEffect( () => {
    dispatchAppContext(Actions.App.setLoading(true));
    setTimeout( () => {
      dispatchAppContext(Actions.App.setLoading(false));
    }, 2000);
  }, []);

  return (
    <IonPage id="vcard">
    <IonHeader translucent={true}>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
        <IonTitle>Exchange card</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen={true}>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Exchange card</IonTitle>
        </IonToolbar>
      </IonHeader>
      {appContext.isLoading ? <IonLoading
          spinner='lines'
          isOpen={true}
        /> : ''
      }

      {!appContext.isLoading &&<IonList>
        <VCardField name="name" label="Name"/>
        <VCardField name="nickname" label="Nickname"/>
        <VCardField name="tel" label="Handy"/>
        <VCardField name="companyTel" label="Firmenhandy"/>
        <VCardField name="email" label="eMail"/>       
      </IonList>}
    </IonContent>
  </IonPage>   
  );
};


export default SwapView;