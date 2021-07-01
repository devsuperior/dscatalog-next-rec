import { ProductItem } from "../../components";
import styles from "../../styles/pages/catalog.module.css";

export default function CatalogHome() {
  return (
    <div className="container">
      <h3 className="my-4">Catálogo de Produtos</h3>
      <div className={styles.catalogProducts}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
}
