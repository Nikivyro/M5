import React from 'react';
import { Button } from 'react-bootstrap';

function CategoryFilter({ selectedCategory, onCategoryChange }) {
  return (
    <div className="category-buttons d-flex justify-content-start mb-4">
      <div className='me-2 align-self-center'>Filtra per:</div>
      <Button
        variant={selectedCategory === 'all' ? 'primary' : 'outline-primary'}
        onClick={() => onCategoryChange('all')}
        className='me-2'
      >
        Tutte
      </Button>
      <Button
        variant={selectedCategory === 'fantasy' ? 'primary' : 'outline-primary'}
        onClick={() => onCategoryChange('fantasy')}
        className='me-2'
      >
        Fantasy
      </Button>
      <Button
        variant={selectedCategory === 'history' ? 'primary' : 'outline-primary'}
        onClick={() => onCategoryChange('history')}
        className='me-2'
      >
        Storia
      </Button>
      <Button
        variant={selectedCategory === 'horror' ? 'primary' : 'outline-primary'}
        onClick={() => onCategoryChange('horror')}
        className='me-2'
      >
        Horror
      </Button>
      <Button
        variant={selectedCategory === 'romance' ? 'primary' : 'outline-primary'}
        onClick={() => onCategoryChange('romance')}
        className='me-2'
      >
        Romantici
      </Button>
      <Button
        variant={selectedCategory === 'scifi' ? 'primary' : 'outline-primary'}
        onClick={() => onCategoryChange('scifi')}
        className='me-2'
      >
        Scifi
      </Button>
    </div>
  );
}

export default CategoryFilter;
