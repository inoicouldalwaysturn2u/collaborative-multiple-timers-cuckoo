import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <p>
        Simple description of the site. Displays <a href="https://cuckoo.team">Cuckoo.team</a> timers. Can have different timers grouped together. No login. Groups of timers are saved and can go back to them by their name.
      </p>
      <p>
        Tech is React JS. Firebase's Firestore for the minimal data holding. Open sourced code available at <a href="https://github.com/inoicouldalwaysturn2u/collaborative-timers-cuckoo">Github</a> or <a href="https://github.com/inoicouldalwaysturn2u/collaborative-timers-cuckoo">Gitlab</a>.
      </p>
    </div>
  );
};

export default AboutPage;
