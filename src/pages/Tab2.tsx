import { IonIcon, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonSearchbar } from '@ionic/react';
import React, { useState } from 'react';
import { search } from 'ionicons/icons';
import axios from 'axios';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  function goGetData() {
    // Data below downloaded from: https://geohub.lacity.org/datasets/lacounty::volunteer-opportunities/explore?location=34.080656%2C-118.157870%2C8.98
    let theURL ="assets/content/Volunteer_Opportunities.json";
    axios.get(theURL).then(
      (theResponse) => {
        for(let i = 0; i < 10; i++) {
          setData(theResponse.data.features);
        }
      }
    ).catch(err => {
      console.log(err)}
    );
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Zonate</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSearchbar></IonSearchbar>
          {/* Button to Search for Volunteer Opportunities */}
          <IonButton className="searchButton" onClick={goGetData}>
            Search<IonIcon slot="start" icon={search} />
          </IonButton> 
        
          <h2 className="ion-padding volOpTitle">Volunteer Opportunities</h2>
          {/* Specify data.map is pulling from an Array */}
          {Array.from(data).map((feature, index) => (
            <center>
              <IonCard> 
                <IonCardHeader key={index}>
                  <IonCardTitle><b>{feature?.properties?.Name}</b></IonCardTitle>
                  <IonCardSubtitle>{feature?.properties?.addrln1} {feature?.properties?.city} {feature?.properties?.state} {feature?.properties?.zip}</IonCardSubtitle>
                  <p className='hrPhones'>Hours: {feature?.properties?.hours}</p>
                  <hr/>
                  <p className='hrPhones'>Contact: {feature?.properties?.phones}</p>
                  <IonCardContent>
                    {feature?.properties?.description}
                  </IonCardContent>
                </IonCardHeader>
              </IonCard>
            </center>
          ))} 

      </IonContent>
    </IonPage>
  );
};

export default Tab2;