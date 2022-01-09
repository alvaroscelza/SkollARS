import indexStyles from "../index.module.scss";
import productStyles from "./Product.module.scss";

const Product = ({ image, title, text, icon_size = "large" }) => {
    let icon_size_class = icon_size === "large" ? productStyles["icon-lg"] : productStyles.icon;

    return (
        <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div>
                <img src={image} alt="" className={icon_size_class} />
                <div>
                    <h5 className="h4 mb-2 mt-2 font-weight-bold">{title}</h5>
                    <p className={indexStyles.p}>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default Product;
