import Image from 'next/image';
import { cardImages } from '../items/CardImages';

const CardImagesComponent = () => {
  return (
    <div data-testid="card-images">
      {cardImages.map((image, index) => (
        <div key={index}>
          <Image src={image.src} alt={image.alt} width={300} height={200} data-testid={image['data-testid']} />
          <p>{image.alt}</p>
        </div>
      ))}
    </div>
  );
};

export default CardImagesComponent;
