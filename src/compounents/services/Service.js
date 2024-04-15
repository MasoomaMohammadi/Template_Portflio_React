import './Service.css';
import ServiceItem from './ServiceItems';

function Service() {
  const services = [
    {
      ServiceIcon: "bi bi-backpack2",
      ServiceTittle: "WEB DESIGN",
      ServiceInfo:
        "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
    },
    {
      ServiceIcon: "bi bi-calendar-check",
      ServiceTittle: "WEB DEVELOPMENT",
      ServiceInfo:
        "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
    },
    {
      ServiceIcon: "bi bi-reception-4",
      ServiceTittle: "PHOTOGRAPHY",
      ServiceInfo:
        "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
    },
    {
      ServiceIcon: "bi bi-phone",
      ServiceTittle: "RESPONSIVE DESIGN",
      ServiceInfo:
        "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
    },
    {
      ServiceIcon: "bi bi-brightness-high",
      ServiceTittle: "GRAPHIC DESIGN",
      ServiceInfo:
        "5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
    },
    {
      ServiceIcon: "bi bi-building-fill-check",
      ServiceTittle: "MARKETING SERVICES",
      ServiceInfo:
        "6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
    },
  ];
  return (
    <section id="services">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">SERVICES</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
          <ServiceItem {...services[0]} />
          <ServiceItem {...services[1]} />
          <ServiceItem {...services[2]} />
          <ServiceItem {...services[3]} />
          <ServiceItem {...services[4]} />
          <ServiceItem {...services[5]} />
        </div>
      </div>
    </section>
  );
};

export default Service;