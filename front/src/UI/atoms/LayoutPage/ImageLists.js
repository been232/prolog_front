import { Carousel } from 'react-carousel-minimal';

function ImageLists(props) {
  const data = props.data.images;

  return (
    <div className="App">
      <div>
        <div>
          <Carousel
            data={data}
            time={2000}
            width={data.width}
            height={data.height}
            automatic={true}
            dots={true}
            slideBackgroundColor="white"
            slideImageFit="cover"
            style={{
              textAlign: 'center',
              maxWidth: '850px',
              maxHeight: '500px',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ImageLists;
