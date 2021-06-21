import './LoadingAnimation.css';

export function LoadingAnimation({ isLoading }) {
  if (!isLoading) return null;

  return (
    <div className="spinner">
      <div className="ball" />
      <p className="loading-text">Loading map</p>
    </div>
  );
}
