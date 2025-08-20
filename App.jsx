import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, restaurant, map, create, folder } from 'ionicons/icons';
import { Route, Redirect } from 'react-router-dom';

import Inicio from './pages/Inicio';
import Recetas from './pages/Recetas';
import Mapa from './pages/Mapa';
import Contribuir from './pages/Contribuir';
import TusRecetas from './pages/TusRecetas';
import Camara from './pages/Camara';


import '@ionic/react/css/core.css'; // Estilos base de Ionic

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/inicio" component={Inicio} />
          <Route exact path="/recetas" component={Recetas} />
          <Route exact path="/mapa" component={Mapa} />
          <Route exact path="/contribuir" component={Contribuir} />
          <Route exact path="/guardadas" component={TusRecetas} />
          <Route path="/camara" component={Camara} exact />
          <Redirect exact from="/" to="/inicio" />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="inicio" href="/inicio">
            <IonIcon icon={home} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>

          <IonTabButton tab="recetas" href="/recetas">
            <IonIcon icon={restaurant} />
            <IonLabel>Recetas</IonLabel>
          </IonTabButton>

          <IonTabButton tab="mapa" href="/mapa">
            <IonIcon icon={map} />
            <IonLabel>Mapa</IonLabel>
          </IonTabButton>

          <IonTabButton tab="contribuir" href="/contribuir">
            <IonIcon icon={create} />
            <IonLabel>Contribuir</IonLabel>
          </IonTabButton>

          <IonTabButton tab="guardadas" href="/guardadas">
            <IonIcon icon={folder} />
            <IonLabel>Guardadas</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
