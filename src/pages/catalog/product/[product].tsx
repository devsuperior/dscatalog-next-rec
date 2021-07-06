import Image from "next/image";
import Link from "next/link";
import { ProductPrice } from "../../../components";

import arrow from "../../../../public/blue_arrow.svg";
import productImg from "../../../../public/product_big.png";

import styles from "../../../styles/pages/product.module.css";
import { Product } from "../../../@types";
import { api } from "../../../utils/api";
import { GetServerSidePropsContext } from "next";

export default function ProductDetails(props: Product) {
  return (
    <div className={styles.productDetailsContainer}>
      <div
        className={`d-flex flex-column card-base border-radius-20 ${styles.productDetails}`}
      >
        <Link href="/catalog">
          <a className={styles.productDetailsGoback}>
            <Image src={arrow} alt="Voltar" />
            <h1 className={styles.textGoBack}>voltar</h1>
          </a>
        </Link>
        <div className="row flex-column flex-lg-row align-items-center align-items-lg-start">
          <div className="col-xl-6">
            <div
              className={`text-center ${styles.productDetailsCard} ${styles.imgContainer}`}
            >
              <Image
                src={props.imgUrl}
                alt={props.name}
                className={styles.productDetailsImage}
                width={350}
                height={350}
              />
            </div>
            <div className="d-md-flex justify-content-md-between flex-md-row flex-lg-column">
              <h1 className={styles.productDetailsName}>{props.name}</h1>
              <ProductPrice price={String(props.price)} />
            </div>
          </div>
          <div className={`col-xl-6 ${styles.productDetailsCard}`}>
            <h1 className={styles.productDescriptionTitle}>
              Descrição do Produto
            </h1>
            <p className={styles.productDescriptionText}>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { id } = ctx.query;
  const res = await api.get(`/products/${id}`);
  const product = res.data;

  return {
    props: {
      product,
    },
  };
}
