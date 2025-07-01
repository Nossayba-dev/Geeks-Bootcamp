import React from 'react';

function Card() {
  return (
    <main className="container my-4">
    <div className='d-flex  flex-column flex-md-row  align-items-start p-3 mb-3'>
        <i className='class="bi bi-building mb-3 mb-md-0 mx-auto mx-md-0' style={{ fontSize: '4rem',color: 'orange' }}></i>
        <div className='ms-3'>
        <h1 className='mb-2'>About the Company</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus itaque cupiditate possimus quisquam, suscipit harum praesentium qui voluptate facere adipisci fugiat veniam facilis! Quam aliquam sapiente quia minus facilis ut!</p>
        </div>
    </div>

    <div className='d-flex flex-column flex-md-row align-items-start bg-light p-3 mb-3'>
        <i className='bi bi-globe-americas mb-3 mb-md-0 mx-auto mx-md-0' style={{ fontSize: '4rem',color: 'orange' }}></i>
        <div className='ms-3'>
        <h1 className='mb-2'>Our values</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, provident perspiciatis quasi ullam labore quos, tenetur ea quia doloribus dolor est. Pariatur sint libero aliquam distinctio consequatur voluptatum nemo asperiores.</p>
        </div>
    </div>

    <div className='d-flex flex-column flex-md-row  align-items-start p-3 mb-3'>
        <i className='bi bi-bank mb-3 mb-md-0 mx-auto mx-md-0' style={{ fontSize: '4rem', color: 'orange' }}></i>
        <div className='ms-3'>
        <h1 className='mb-2' >Our Mission</h1>
        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cum inventore ipsa animi aut quisquam in ratione, explicabo sunt quod, sint fuga enim, eum ut ad incidunt dolorum aliquam numquam.</p>
        </div>
    </div>
    </main>
  );
}

export default Card;