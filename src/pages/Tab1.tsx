import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Zonate</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent className="ion-padding">
          <h1>Welcome to Zonate 👋 </h1>
          <p>A better way to donate</p>
        </IonContent>
    </IonPage>
  );
};

export default Tab1;
