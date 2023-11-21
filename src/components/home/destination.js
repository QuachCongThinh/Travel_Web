export function Destinations({ data }) {
  return (
    <section>
      <div className="destination__cotainer">
        <div className="destination__content">
          <h2>{data.data?.title}</h2>
          <p>{data.data?.description}</p>
        </div>
        <div className="destination__details">
          <ul>
            {data.data?.destinations.map((item) => (
              <li>
                <img src={item.imageUrl} />
                <div className="text">
                  <h1>{item.title}</h1>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
