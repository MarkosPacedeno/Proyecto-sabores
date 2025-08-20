import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from '@ionic/react';

const regiones = [
  {
    nombre: 'Yucatán ',
    platillo: 'Cochinita Pibil ',
    descripcion: 'Cerdo marinado con achiote,\nEnvuelto en hojas de plátano,\nCocido bajo tierra.',
    imagen: '/assets/yucatan.jpg',
  },
  {
    nombre: 'Oaxaca ',
    platillo: 'Tlayuda ',
    descripcion: 'Tortilla gigante crujiente,\nCon asiento, frijoles, queso,\nY cecina o chapulines.',
    imagen: '/assets/oaxaca.jpg',
  },
  {
    nombre: 'Norte de México ',
    platillo: 'Cabrito al pastor ',
    descripcion: 'Cabrito joven asado lentamente,\nTípico en Monterrey y alrededores.',
    imagen: '/assets/norte.jpg',
  }
];

const Regiones = () => {
  return (
    <IonPage>
      <IonContent
        fullscreen
        className="ion-padding"
        style={{
          backgroundColor: '#fbe8d3',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1 style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '2rem',
          marginBottom: '20px',
          color: '#8b4513',
          fontFamily: 'Georgia, serif',
          textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
        }}>
          Regiones y Sabores de México 🇲🇽
        </h1>

        {regiones.map((region, index) => (
          <IonCard
            key={index}
            style={{
              marginBottom: '20px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              borderRadius: '12px',
              maxWidth: '500px',
              width: '100%',
              textAlign: 'center'
            }}
          >
            <img
              src={region.imagen}
              alt={region.platillo}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderTopLeftRadius: '12px',
                borderTopRightRadius: '12px'
              }}
            />
            <IonCardHeader>
              <IonCardTitle style={{
                fontSize: '1.5rem',
                color: '#a0522d',
                fontFamily: 'Georgia, serif',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
              }}>
                {region.platillo}
              </IonCardTitle>
              <IonCardSubtitle style={{
                fontSize: '1rem',
                color: '#5c4033',
                fontStyle: 'italic'
              }}>
                {region.nombre}
              </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <p style={{
                whiteSpace: 'pre-line',
                fontSize: '1rem',
                color: '#4b2e1e',
                fontFamily: 'Verdana, sans-serif'
              }}>
                {region.descripcion}
              </p>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Regiones;
