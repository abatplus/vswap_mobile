import React from 'react';
import { withRouter, useLocation } from 'react-router';
import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonFooter, IonToolbar, IonTitle, IonHeader, IonImg } from '@ionic/react';
import { peopleOutline, scan } from 'ionicons/icons';
import { useAppContext } from '../store/contexts/AppContext';
import './Menu.css';
import { useIntl } from 'react-intl';
import IvCardTranslations from '../i18n/IvCardTranslations';
import { nameof } from '../utils';


interface Pages {
  title: string;
  path: string;
  icon?: string;
  routerDirection?: string;
}

const Menu: React.FC = () => {
  const location = useLocation();
  const { appContext } = useAppContext();

  const i18n = useIntl();

  const routes = {
    tabsPages: [
      { title: i18n.formatMessage({ id: nameof<IvCardTranslations>('Card') }), path: '/vcard', icon: peopleOutline },
      { title: i18n.formatMessage({ id: nameof<IvCardTranslations>('Scan') }), path: '/scan', icon: scan }

    ],
    appPages: [
      { title: i18n.formatMessage({ id: nameof<IvCardTranslations>('Terms_and_conditions') }), path: 'termsAndConditions' },
      { title: i18n.formatMessage({ id: nameof<IvCardTranslations>('Privacy_Protection') }), path: '/privacy' },
      { title: i18n.formatMessage({ id: nameof<IvCardTranslations>('Legal_Information') }), path: '/legal' },
      { title: i18n.formatMessage({ id: nameof<IvCardTranslations>('About') }), path: '/about' },
    ],
  };

  function renderlistItems(list: Pages[]) {
    return list
      .filter((route) => !!route.path)
      .map((p) => (
        <IonMenuToggle key={p.title} auto-hide="false">
          <IonItem
            detail={false}
            routerLink={p.path}
            routerDirection="none"
            className={location.pathname.startsWith(p.path) ? 'selected' : undefined}
            disabled={appContext.isLoading}
          >
            {p.icon && <IonIcon slot="start" icon={p.icon} />}
            <IonLabel>{p.title}</IonLabel>
          </IonItem>
        </IonMenuToggle>
      ));
  }

  return (
    <IonMenu type="overlay" disabled={!appContext.menuEnabled} contentId="main">
      <IonContent forceOverscroll={false}>
        <IonList lines="none">
          <IonHeader>
            <IonToolbar>
              <IonItem>
                <IonImg  className="app-icon" src = "../../assets/icon/Logo_dummy.png"></IonImg>
              </IonItem>
              <IonItem>
                <IonLabel className="app-name">{i18n.formatMessage({ id: nameof<IvCardTranslations>('appName') })}</IonLabel>
              </IonItem>
            </IonToolbar>
          </IonHeader>
          {renderlistItems(routes.tabsPages)}
        </IonList>
        <IonHeader color="primary" />
        <IonList lines="none">
          {renderlistItems(routes.appPages)}
        </IonList>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonToolbar>
          <IonTitle color="medium" size="small">powered by abat+</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonMenu>
  );
};

export default withRouter(Menu);
