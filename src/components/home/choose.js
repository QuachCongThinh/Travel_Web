import "../../pages/home/style.scss";

export function Choose({ data }) {
  return (
    <section>
      <div className="choose">
        <div className="choose__content">
          <h2>{data.data?.title}</h2>
          <p>{data.data?.description}</p>
        </div>
        <div className="choose__details">
          <ul>
            {data.data?.whyChooseUs.map((item) => (
              <li>
                <img src={item.iconUrl}></img>
                <h2 className="title">{item.title}</h2>
                <p className="description">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="background">
        <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24377.jpg"></img>
      </div>
    </section>
  );
}
