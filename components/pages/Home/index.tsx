import React from 'react';

import { UploadedAudioTrackCreation } from '#components/forms/UploadedAudioTrackCreation';
// import { RecordedAudioTrackCreation } from '#components/forms/RecordedAudioTrackCreation';

export default function Home() {
  return (
    <div
      style={{
        alignItems: 'center',
        backgroundImage: `url("https://i.pinimg.com/originals/bd/6c/0b/bd6c0bef4a473bfca44d1f6c83c95006.png")`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
      }}
    >
      <UploadedAudioTrackCreation />
    </div>
  );
}
