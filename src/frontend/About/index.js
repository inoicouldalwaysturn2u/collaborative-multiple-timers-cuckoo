import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <h2>About</h2>
      <p>
        Simple description of the site. Displays <a href="https://cuckoo.team">Cuckoo.team</a> timers. Can have different timers grouped together. No login. Groups of timers are saved and can go back to them by their name.
      </p>
      <p>
        Tech is React JS. Firebase's Firestore for the minimal data holding. Open sourced code available at <a href="https://github.com/inoicouldalwaysturn2u/collaborative-multiple-timers-cuckoo">Github</a> or <a href="https://gitlab.com/inoicouldalwaysturn2u/collaborative-multiple-timers-cuckoo">Gitlab</a>.
      </p>

      <h2>How To</h2>
      <p>Yes</p>
    </div>
  );
};

export default AboutPage;
