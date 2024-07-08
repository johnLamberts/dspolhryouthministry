interface EventsItemProp {
  image?: string;
  title?: string;
  description?: string;
}

const EventsItem = ({ image, title, description }: EventsItemProp) => {
  return (
    <div className="flex basis-1/2 flex-col">
      <img src={image} alt={title} />
      <div className="flex flex-col self-stretch pt-6">
        <h3 className="font-display text-display-md pb-4">{title}</h3>
        <p className="text-body-lg font-light text-neutral-700">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EventsItem;
