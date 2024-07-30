import { ServicesData } from "./Servicesdata"
const Services = () => {
    return (
        <div className="services">

            <h1 >Service</h1>
            <div className="services_container">
                <div className="services_content">
                    {
                        ServicesData.map((item) => {
                            return (<div className="services_item">
                                <img src={item.image} alt="services" height={70}/>
                                <h4>{item.tittle}</h4>
                                <p>{item.description}</p>

                            </div>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Services;