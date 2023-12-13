const LoadingSpinner = ({ isLoading, Loader, color, size }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
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
