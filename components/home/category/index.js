import { BsArrowRightCircle } from "react-icons/bs";
import styles from "./styles.module.scss";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
export default function Category({ header, products, background }) {
  const isMedium = useMediaQuery({ query: "(max-width:1300px)" });
  const isMobile = useMediaQuery({ query: "(max-width:550px)" });
  return (
    <div className={styles.category} style={{ background: `${background}` }}>
      <div className={styles.category__header}>
        <h1>{header}</h1>
        {header === "Dresses" && (
          <Link href="/browse?category=64621dcda72d477585034338">
            <BsArrowRightCircle />
          </Link>
        )}
        {header === "Shoes" && (
          <Link href="/browse?category=6462277ca72d47758503451e">
            <BsArrowRightCircle />
          </Link>
        )}
        {header === "Accessories" && (
          <Link href="/browse?category=643504fc05813d8f11c94c6e">
            <BsArrowRightCircle />
          </Link>
        )}
      </div>
      <div className={styles.category__products}>
        {header === "Dresses" &&
          products.slice(0, isMobile ? 6 : isMedium ? 4 : 6).map((product) => {
            if (product.category?.name === "Dresses")
              return (
                <Link
                  href={`/product/${product.slug}?style=0`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={styles.product}>
                    <img src={product.subProducts[0].images[0].url} alt="" />
                  </div>
                </Link>
              );
          })}
        {header === "Shoes" &&
          products.slice(0, isMobile ? 6 : isMedium ? 4 : 6).map((product) => {
            if (product.category?.name === "Shoes")
              return (
                <Link
                  href={`/product/${product.slug}?style=0`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={styles.product}>
                    <img src={product.subProducts[0].images[0].url} alt="" />
                  </div>
                </Link>
              );
          })}
        {header === "Accessories" &&
          products.slice(0, isMobile ? 6 : isMedium ? 4 : 6).map((product) => {
            if (product.category?.name === "Accessories")
              return (
                <Link
                  href={`/product/${product.slug}?style=0`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={styles.product}>
                    <img src={product.subProducts[0].images[0].url} alt="" />
                  </div>
                </Link>
              );
          })}
      </div>
    </div>
  );
}
