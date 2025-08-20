import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonToast,
} from '@ionic/react';
import { restaurant } from 'ionicons/icons';
import { useState } from 'react';

const recetas = [
  'Tacos de escamoles',
  'Ceviche de mango con chapulines',
  'Sopa de piedra estilo Oaxaca',
  'Tamales de cacao misterioso',
  'Pozole negro de Guerrero'
];

const Inicio = () => {
  const [mostrarToast, setMostrarToast] = useState(false);
  const [recetaSeleccionada, setRecetaSeleccionada] = useState('');

  const lanzarReceta = () => {
    const aleatoria = recetas[Math.floor(Math.random() * recetas.length)];
    setRecetaSeleccionada(aleatoria);
    setMostrarToast(true);
  };

  return (
    <IonPage>
      <IonContent
        fullscreen
        className="ion-padding"
        style={{
          backgroundColor: '#fff8f0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Encabezado de bienvenida */}
        <h1 style={{
          textAlign: 'center',
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '10px',
          color: '#a0522d'
        }}>
          ¡Bienvenido a Sabores Misteriosos!
        </h1>

        {/* Tarjeta de introducción */}
        <IonCard style={{
          backgroundColor: '#fff0e6',
          maxWidth: '500px',
          width: '100%',
          textAlign: 'center'
        }}>
          <IonCardHeader>
            <IonCardTitle
  style={{
    fontSize: '1.6rem',
    fontWeight: 'bold',
    color: '#a0522d',
    textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
    marginBottom: '10px',
    textAlign: 'center',
    fontFamily: 'Georgia, serif',
    letterSpacing: '0.5px',
    animation: 'fadeIn 1s ease-in-out'
  }}
>
Gastronomía con un toque de magia
</IonCardTitle>

          </IonCardHeader>
          <IonCardContent>
            <p>Explora recetas raras</p>
            <p>Ingredientes ocultos</p>
            <p>Y descubre el lado misterioso de la cocina mexicana.</p>
          </IonCardContent>
        </IonCard>

        {/* Imagen de portada */}
        <img
          src="/assets/portada.jpg"
          alt="Portada gastronómica"
          style={{
            width: '100%',
            maxWidth: '750px',
            height: '420px',
            objectFit: 'cover',
            borderRadius: '12px',
            marginBottom: '20px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}
        />

        {/* Botón flotante para receta aleatoria */}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton
            onClick={lanzarReceta}
            style={{
              backgroundColor: '#d87c5a',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}
          >
            <IonIcon icon={restaurant} />
          </IonFabButton>
        </IonFab>

        {/* Toast de receta misteriosa */}
        <IonToast
          isOpen={mostrarToast}
          message={`🌮 Receta Misteriosa: ${recetaSeleccionada}`}
          duration={2500}
          color="tertiary"
          onDidDismiss={() => setMostrarToast(false)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Inicio;
