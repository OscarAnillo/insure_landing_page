import data from '../Data/products-data.json';

export default function ProductComponent(){
    return (
        <div className="products">
            <div className="dash"></div>
            <h1 className="products-title">We're different</h1>
            <div className="products-container">
                {data.map(item => (
                    <div key={item.id}>
                        <img src={item.avatar} alt="" />
                        <h2>{item.product}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}