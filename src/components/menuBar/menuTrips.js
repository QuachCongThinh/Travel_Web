import "../../pages/menubar/style.scss";


export function MenuTrips({ data }) {
  return (
    <>
      <div className="menubar__details">
        <ul>
          {data.data?.map((item, itemKey) => (
            <li key={itemKey}>
              <div className="image__trips">
                <img src={item.imageUrl}></img>
                <div className="trips__price">
                  <span className={`${item.discount ? "discount" : ""}`}>{item.discount} </span>
                  <span className="normal__price">{item.price}</span>
                </div>
                <div className="details">
                  <p className="title">{item.title}</p>
                  <div className="evaluate">
                    <div className="start"></div>
                    <div className="start"></div>
                    <div className="start"></div>
                    <div className="start"></div>
                    <div className="start"></div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
