const imageStyle = {
  objectFit: "cover",
};

function Image() {
  return (
    <img
      src="https://images.unsplash.com/photo-1732539661267-5a6b5e6aa65e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
      alt="Alt Image Text"
      height="400px"
      width="400px"
      style={imageStyle}
    />
  );
}

export default Image;
