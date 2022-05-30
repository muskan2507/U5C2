
  export const Image = ({ src, alt, borderRadius, width, height, fit }) => {
    return (
      <div>
        <img data-testid="image" src={src} alt={alt} height={height} width={width} style={{borderRadius:borderRadius,fit:fit}} />
      </div>
    );
  };
  
  
  