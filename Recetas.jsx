import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import { useState, useEffect } from 'react';

const recetasIniciales = [
  {
    nombre: 'Chiles Rellenos con Chocolate',
    descripcion: 'Una fusión entre lo picante y lo dulce, tradicional en Puebla.',
    imagen: '/assets/chiles.jpg',
  },
  {
    nombre: 'Pan de maíz azul con jamaica',
    descripcion: 'Receta ancestral de la sierra mixe con colores vibrantes.',
    imagen: '/assets/panazul.jpg',
  },
  {
    nombre: 'Tamal de fuego volcánico',
    descripcion: 'Inspirado en el Popocatépetl, con salsa de chiles tatemados.',
    imagen: '/assets/tamal.jpg',
  },
];

const Recetas = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setRecetas(recetasIniciales);
    }, 1000);
  }, []);

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Recetas Misteriosas</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Descubre platillos raros, exóticos y llenos de historia gastronómica mexicanas.</p>
          </IonCardContent>
        </IonCard>

        <IonGrid>
          <IonRow>
            {recetas.map((receta, index) => (
              <IonCol size="12" sizeMd="6" sizeLg="4" key={index}>
                <IonCard>
                  <IonImg src={receta.imagen} alt={receta.nombre} />
                  <IonCardHeader>
                    <IonCardTitle>{receta.nombre}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>{receta.descripcion}</IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Recetas;
