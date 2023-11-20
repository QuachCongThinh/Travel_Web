import "../../pages/footer/style.scss";

export function Awards({data}) {

  return (
    <section>
      <li className="widget-1">
        <h2 class="widget_title">{data.data?.title}</h2>
        <div className="text_widget">
          <p>{data.data?.description}</p>
          <img src={data.data?.imageUrl} alt="Awards"></img>
        </div>
      </li>
    </section>
  );
}
