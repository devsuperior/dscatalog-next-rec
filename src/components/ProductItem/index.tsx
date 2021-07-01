import Image from "next/image";
import Link from "next/link";
import styles from "./productitem.module.css";
import productImg from "../../../public/product.png";
import ProductPrice from "../ProductPrice";

export default function ProductItem() {
  return (
    <Link href="/catalog/product/a1ds1fasd5f6a">
      <a className={`card-base border-radius-10 ${styles.productCard}`}>
        <div className={styles.cardTopContainer}>
          <Image
            src={productImg}
            alt="Nome do produto"
            className={styles.productCardImage}
          />
        </div>
        <div className={styles.cardBottomContainer}>
          <h6>Nome do Produto</h6>
          <ProductPrice price="1999,90" />
        </div>
      </a>
    </Link>
  );
}
