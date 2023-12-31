import "../../style/all.scss";

export function Destinations({ data }) {
  return (
    <div className="destination__cotainer">
      <div className="destination__content">
        <h2>{data.data?.title}</h2>
        <p>{data.data?.description}</p>
      </div>
      <div className="destination__details">
        <ul>
          {data.data?.destinations.map((item, desKey) => (
            <li key={desKey}>
              <div className="text">
                <h1>{item.title}</h1>
              </div>
              <img src={item.imageUrl} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
