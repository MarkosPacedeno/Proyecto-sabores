import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { useState } from 'react';
import {
  IonPage,
  IonContent,
  IonButton,
  IonImg,
} from '@ionic/react';

const Camara = () => {
  const [foto, setFoto] = useState<string | null>(null);

  const tomarFoto = async () => {
    const imagen = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });

    setFoto(imagen.dataUrl);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding" style={{ textAlign: 'center' }}>
        <h2 style={{ color: '#a0522d' }}>Captura tu receta misteriosa 📷</h2>
        <IonButton onClick={tomarFoto} color="tertiary">
          Tomar Foto
        </IonButton>

        {foto && (
          <IonImg
            src={foto}
            alt="Foto tomada"
            style={{
              marginTop: '20px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              maxWidth: '90%',
              height: 'auto',
            }}
          />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Camara;
