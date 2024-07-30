import { ServicesData } from "./Servicesdata";
const Services = () => {
  return (
    <div className="services">
      <h1>Service</h1>
      <div className="services_content">
        {ServicesData.map((item) => {
          return (
            <div className="services_item">
              <img src={item.image} alt="services" height={90} />
              <h2>{item.tittle}</h2>
              <p className="desciption">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
