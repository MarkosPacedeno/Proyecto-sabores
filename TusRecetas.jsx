import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonIcon,
  IonSearchbar,
} from '@ionic/react';
import { trash } from 'ionicons/icons';
import { useState, useEffect } from 'react';

const TusRecetas = () => {
  const [recetasGuardadas, setRecetasGuardadas] = useState([]);
  const [filtro, setFiltro] = useState(''); // texto de búsqueda

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem('recetas')) || [];
    setRecetasGuardadas(datos);
  }, []);

  const eliminarReceta = (index) => {
    const nuevasRecetas = recetasGuardadas.filter((_, i) => i !== index);
    setRecetasGuardadas(nuevasRecetas);
    localStorage.setItem('recetas', JSON.stringify(nuevasRecetas));
  };

  // Filtrar recetas según el nombre
  const recetasFiltradas = recetasGuardadas.filter((receta) =>
    receta.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <IonPage>
      <IonContent className="ion-padding" style={{ backgroundColor: '#ffe8d6' }}>
        <IonCard
          style={{
            backgroundColor: '#d87c5a',
            color: '#fff',
            textAlign: 'center',
            borderRadius: '12px',
          }}
        >
          <IonCardHeader>
            <IonCardTitle>
              <h2>Tus Recetas Guardadas</h2>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Aquí están las recetas que has compartido. </p>
            <p>¡Gracias por contribuir al misterio gastronómico!</p>
          </IonCardContent>
        </IonCard>

        {/* 🔎 Barra de búsqueda */}
        <IonSearchbar
          value={filtro}
          onIonInput={(e) => setFiltro(e.target.value)}
          debounce={300}
          placeholder="Buscar receta por nombre..."
        ></IonSearchbar>

        {recetasFiltradas.length === 0 ? (
          <p style={{ textAlign: 'center', marginTop: '20px' }}>
            No se encontraron recetas.
          </p>
        ) : (
          <IonList>
            {recetasFiltradas.map((receta, index) => (
              <IonItem
                key={index}
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  marginBottom: '16px',
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  padding: '16px',
                }}
              >
                {receta.imagen && (
                  <img
                    src={receta.imagen}
                    alt={receta.nombre}
                    style={{
                      width: '100%',
                      maxWidth: '300px',
                      borderRadius: '12px',
                      marginBottom: '12px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    }}
                  />
                )}
                <IonLabel>
                  <h2 style={{ fontWeight: 'bold', marginBottom: '8px' }}>
                    {receta.nombre}
                  </h2>
                  <p>{receta.ingredientes}</p>
                </IonLabel>

                {/* Botón para eliminar receta */}
                <IonButton
                  color="danger"
                  size="small"
                  style={{ marginTop: '12px' }}
                  onClick={() => eliminarReceta(index)}
                >
                  <IonIcon icon={trash} slot="start" />
                  Eliminar
                </IonButton>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default TusRecetas;
