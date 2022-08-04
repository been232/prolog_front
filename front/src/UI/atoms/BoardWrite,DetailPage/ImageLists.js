import SimpleImageSlider from "react-simple-image-slider";

function ImageLists(props) {
  const data = props.data;

  return (
    <div className="App">
        <SimpleImageSlider
          width={data.width - 50}
          height={data.height - 170}
          images={data.images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
        />
    </div>
  );
}

export default ImageLists;
