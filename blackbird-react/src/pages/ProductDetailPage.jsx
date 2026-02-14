import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { apiFetch } from '../lib/api';
import '../css/shop.css';

export default function ProductDetailPage() {
  const { id } = useParams();
  const { user, backendToken, backendLoading, loading: authLoading } = useAuth();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [addingToCart, setAddingToCart] = useState(false);
  const [cartMessage, setCartMessage] = useState('');

  useEffect(() => {
    if (!backendToken) {
      if (!backendLoading) setLoading(false);
      return;
    }
    setLoading(true);
    apiFetch(`/user/product/detail/${id}`, { token: backendToken })
      .then(res => {
        setProduct(res.data);
        if (res.data?.colors?.length) setSelectedColor(res.data.colors[0]);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id, backendToken, backendLoading]);

  if (authLoading) return null;
  if (!user) return <Navigate to="/login" replace />;

  const handleAddToCart = async () => {
    setAddingToCart(true);
    setCartMessage('');
    try {
      await apiFetch('/user/cart/add', {
        token: backendToken,
        method: 'POST',
        body: { product_id: product.id, quantity, color_id: selectedColor?.id || null },
      });
      setCartMessage('Added to cart!');
      setTimeout(() => setCartMessage(''), 3000);
    } catch (err) {
      setCartMessage(err.message);
    } finally {
      setAddingToCart(false);
    }
  };

  const images = product?.images || [];
  const getImageUrl = (img) => img?.image_url || img?.url || '';

  const renderStars = (rating) => {
    const stars = [];
    const r = parseFloat(rating) || 0;
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill={i <= r ? 'var(--color-warning)' : 'none'} stroke={i <= r ? 'none' : 'var(--color-text-muted)'} strokeWidth="1">
          <path d="M8 1.5L9.8 5.2L14 5.8L11 8.6L11.7 12.8L8 10.8L4.3 12.8L5 8.6L2 5.8L6.2 5.2L8 1.5Z" />
        </svg>
      );
    }
    return stars;
  };

  if (loading) return <div className="shop-page"><div className="shop-container"><div className="shop-loading"><div className="spinner" /><p>Loading product...</p></div></div></div>;
  if (error) return <div className="shop-page"><div className="shop-container"><div className="shop-empty"><p>{error}</p><Link to="/products" className="btn btn-primary">Back to Products</Link></div></div></div>;
  if (!product) return null;

  return (
    <div className="shop-page">
      <div className="shop-container">
        <nav className="breadcrumb">
          <Link to="/products">Products</Link>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          <span>{product.name}</span>
        </nav>

        <div className="pd-layout">
          <div className="pd-gallery">
            <div className="pd-main-image">
              {images.length > 0 ? (
                <img src={getImageUrl(images[activeImage])} alt={product.name} />
              ) : (
                <div className="pd-no-image">No Image</div>
              )}
            </div>
            {images.length > 1 && (
              <div className="pd-thumbnails">
                {images.map((img, i) => (
                  <button key={i} className={`pd-thumb${i === activeImage ? ' active' : ''}`} onClick={() => setActiveImage(i)}>
                    <img src={getImageUrl(img)} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="pd-info">
            {product.brand && <span className="pd-brand">{product.brand}</span>}
            <h1 className="pd-name">{product.name}</h1>

            <div className="pd-rating-row">
              <div className="pd-stars">{renderStars(product.average_rating)}</div>
              <span className="pd-rating-text">
                {product.average_rating > 0 ? `${product.average_rating} (${product.total_reviews} reviews)` : 'No reviews yet'}
              </span>
            </div>

            <div className="pd-price-row">
              <span className="pd-price">${Number(product.price).toFixed(2)}</span>
              {product.previous_price && product.previous_price > product.price && (
                <span className="pd-price-old">${Number(product.previous_price).toFixed(2)}</span>
              )}
            </div>

            {product.short_description && <p className="pd-description">{product.short_description}</p>}

            {product.colors?.length > 0 && (
              <div className="pd-section">
                <label className="pd-label">Color</label>
                <div className="pd-colors">
                  {product.colors.map(c => (
                    <button
                      key={c.id}
                      className={`pd-color-btn${selectedColor?.id === c.id ? ' active' : ''}`}
                      style={{ '--swatch': c.hex_code }}
                      onClick={() => setSelectedColor(c)}
                      title={c.name}
                    >
                      <span className="pd-color-swatch" />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="pd-section">
              <label className="pd-label">Quantity</label>
              <div className="qty-control">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} disabled={quantity <= 1}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)}>+</button>
              </div>
            </div>

            <div className="pd-actions">
              <button className="btn btn-primary btn-large btn-full" onClick={handleAddToCart} disabled={addingToCart}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 6H3L1 18H19L17 6H14" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M6 6V4C6 2.34315 7.34315 1 9 1H11C12.6569 1 14 2.34315 14 4V6" stroke="currentColor" strokeWidth="1.5"/></svg>
                {addingToCart ? 'Adding...' : 'Add to Cart'}
              </button>
            </div>

            {cartMessage && (
              <div className={`pd-cart-msg${cartMessage.includes('Added') ? '' : ' error'}`}>{cartMessage}</div>
            )}

            {product.return_period && (
              <p className="pd-return-note">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M5 11L2 14L5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {product.return_period}-day return policy
              </p>
            )}

            {product.features?.length > 0 && (
              <div className="pd-features">
                <h3 className="pd-features-title">Features</h3>
                <ul>
                  {product.features.map((f, i) => (
                    <li key={i}>{f.name || f.title || f.feature || JSON.stringify(f)}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {product.description && (
          <div className="pd-full-desc">
            <h2>Description</h2>
            <div dangerouslySetInnerHTML={{ __html: product.description }} />
          </div>
        )}

        {product.details?.length > 0 && (
          <div className="pd-details-table">
            <h2>Specifications</h2>
            <table>
              <tbody>
                {product.details.map((d, i) => (
                  <tr key={i}>
                    <td>{d.key || d.name || d.title}</td>
                    <td>{d.value || d.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {product.similar_products?.length > 0 && (
          <div className="pd-similar">
            <h2>Similar Products</h2>
            <div className="products-grid">
              {product.similar_products.map(p => (
                <Link to={`/products/${p.id}`} key={p.id} className="product-card-shop">
                  <div className="product-card-image">
                    <img src={p.images?.[0]?.image_url || '/images/placeholder.png'} alt={p.name} loading="lazy" />
                  </div>
                  <div className="product-card-body">
                    <h3 className="product-card-name">{p.name}</h3>
                    <div className="product-card-price">
                      <span className="price-current">${Number(p.price).toFixed(2)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
