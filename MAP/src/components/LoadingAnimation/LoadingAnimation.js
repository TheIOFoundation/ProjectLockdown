import './LoadingAnimation.css';

export function LoadingAnimation({ isLoading }) {
  if (!isLoading) return null;

  return (
    <div className="spinner">
      <div className="ball"></div>
      <p>Loading map</p>
    </div>
  );
}
