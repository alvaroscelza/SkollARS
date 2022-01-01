const Product = ({ image_file_name, title, text, icon_size = "large" }) => {
  let icon_size_class = icon_size === "large" ? "icon-lg" : "";
  let image_classes = `icon ${icon_size_class} flex-shrink-0 mb-1`;

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="text-center text-md-left">
        <img src={image_file_name} alt="" className={image_classes} />
        <div>
          <h5 className="h4 mb-2 mt-2 font-weight-bold text-center text-md-left">{title}</h5>
          <p className="text-center text-md-left pr-md-2">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
