import React from 'react';

const Grid = ({ photos }) => {
  const chunkedPhotos = chunkArray(photos, 3); // Display 3 images per row

  document.body.style.backgroundColor = 'black';
  
  return (
    <div className="grid" style={{ background: 'black' }}>
      {chunkedPhotos.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map(({ photo, _id }) => (
            <div key={_id} className="grid-item">
              <img
                src={`http://localhost:8000/uploads/${photo}`}
                alt="grid_image"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

// Helper function to chunk an array into smaller arrays
function chunkArray(array, chunkSize) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunkedArray.push(array.slice(i, i + chunkSize));
  }
  return chunkedArray;
}

export default Grid;


