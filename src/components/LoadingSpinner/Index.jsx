const LoadingSpinner = ({ isLoading, Loader, color, size, style }) => {
  return (
    <div className={style}>
      <Loader
        color={color}
        // css={override}
        size={size}
        loading={isLoading}
      />
      <div className="text mt-10">Sedang mengambil data</div>
    </div>
  );
};
export default LoadingSpinner;
