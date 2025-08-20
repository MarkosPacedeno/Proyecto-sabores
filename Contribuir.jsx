import {
  IonPage,
  IonContent,
  IonInput,
  IonTextarea,
  IonButton,
  IonItem,
  IonLabel,
  IonToast,
  IonCard,
  IonIcon,
} from '@ionic/react';
import { camera } from 'ionicons/icons';
import { useState } from 'react';
import { Camera, CameraResultType } from '@capacitor/camera';

const Contribuir = () => {
  const [nombre, setNombre] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [imagen, setImagen] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [mostrarToast, setMostrarToast] = useState(false);
  const [recetaGuardada, setRecetaGuardada] = useState(null);

  // Función para tomar foto con la cámara
  const tomarFoto = async () => {
    try {
      const foto = await Camera.getPhoto({
        quality: 80,
        allowEditing: false,
        resultType: CameraResultType.DataUrl, // para obtener la imagen en base64
      });
      setImagen(foto.dataUrl);
    } catch (error) {
      console.error('Error al tomar foto:', error);
    }
  };

  const guardarReceta = () => {
    if (!nombre || !ingredientes) {
      setMensaje('Por favor completa todos los campos.');
      setMostrarToast(true);
      return;
    }

    const nuevaReceta = { nombre, ingredientes, imagen };
    const recetas = JSON.parse(localStorage.getItem('recetas')) || [];
    recetas.push(nuevaReceta);
    localStorage.setItem('recetas', JSON.stringify(recetas));

    setRecetaGuardada(nuevaReceta);
    setMensaje('¡Receta guardada con éxito!');
    setMostrarToast(true);

    setNombre('');
    setIngredientes('');
    setImagen('');

    setTimeout(() => setRecetaGuardada(null), 4000);
  };

  return (
    <IonPage>
      <IonContent
        fullscreen
        className="ion-padding"
        style={{
          backgroundColor: '#d87c5a',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Encabezado de bienvenida */}
        <h1
          style={{
            textAlign: 'center',
            fontSize: '2rem',
            fontWeight: 'bold',
            marginTop: '10px',
            marginBottom: '10px',
            color: '#ffe8d6',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
          }}
        >
          ¡Bienvenido, explorador de sabores!
        </h1>

        {/* Título principal */}
        <h2
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            marginBottom: '20px',
            color: '#fff',
          }}
        >
          Contribuye con tu receta misteriosa
        </h2>

        {/* Imagen previa */}
        {imagen && (
          <img
            src={imagen}
            alt="Vista previa del platillo"
            style={{
              width: '100%',
              maxWidth: '300px',
              borderRadius: '12px',
              marginBottom: '20px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
        )}

        {/* Formulario */}
        <IonCard
          style={{
            backgroundColor: 'rgba(255,255,255,0.95)',
            padding: '20px',
            borderRadius: '12px',
            maxWidth: '500px',
            width: '100%',
            textAlign: 'center',
          }}
        >
          <IonItem>
            <IonLabel position="stacked">Nombre del platillo</IonLabel>
            <IonInput
              value={nombre}
              placeholder="Ej. Ensalada de cactus lunar"
              onIonChange={(e) => setNombre(e.detail.value)}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Ingredientes y preparación</IonLabel>
            <IonTextarea
              value={ingredientes}
              placeholder="Describe los ingredientes y pasos..."
              onIonChange={(e) => setIngredientes(e.detail.value)}
            />
          </IonItem>

          {/* Botón para tomar foto con la cámara */}
          <div
            style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}
          >
            <IonButton color="light" onClick={tomarFoto}>
              <IonIcon icon={camera} slot="start" />
              Tomar foto del platillo
            </IonButton>
          </div>

          {/* Botón para guardar */}
          <div
            style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}
          >
            <IonButton onClick={guardarReceta}>Guardar receta</IonButton>
          </div>
        </IonCard>

        {/* Tarjeta flotante de confirmación */}
        {recetaGuardada && (
          <IonCard
            style={{
              position: 'fixed',
              bottom: '20px',
              backgroundColor: '#fff',
              color: '#000',
              padding: '16px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              zIndex: 999,
              animation: 'fadeIn 0.5s ease-in-out',
            }}
          >
            <h3>🎉 ¡Receta enviada!</h3>
            <p>
              <strong>{recetaGuardada.nombre}</strong>
            </p>
            <p>{recetaGuardada.ingredientes}</p>
            {recetaGuardada.imagen && (
              <img
                src={recetaGuardada.imagen}
                alt="Receta"
                style={{
                  width: '100%',
                  maxWidth: '200px',
                  borderRadius: '8px',
                  marginTop: '8px',
                }}
              />
            )}
          </IonCard>
        )}

        {/* Toast de mensaje */}
        <IonToast
          isOpen={mostrarToast}
          message={mensaje}
          duration={2000}
          onDidDismiss={() => setMostrarToast(false)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Contribuir;
