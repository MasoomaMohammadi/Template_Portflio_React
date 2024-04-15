function ServiceItem({ ServiceIcon, ServiceTittle, ServiceInfo }) {
  return (
    <div className="col-4">
      <div className="service-box">
        <div className="service-icon">
          <i className={ServiceIcon}></i>
        </div>
        <div className="service-content">
          <h3 className="service-title">{ ServiceTittle}</h3>
          <p className="service-info">{ ServiceInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;